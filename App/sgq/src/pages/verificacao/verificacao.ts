import { Component } from '@angular/core';
import { IonicPage, NavParams, ModalController, ActionSheetController, NavController } from 'ionic-angular';
import { Servico } from '../../models/servico';
import { Inspecao } from '../../models/inspecao';
import { Storage } from '@ionic/storage';
import { Alteracao } from '../../models/alteracao';
import { UUID } from 'angular2-uuid';
import { MessageService } from '../../utils/message-service';
import { ItemInspecao } from '../../models/item-inspecao';
import { ItemChecklist } from '../../models/item-checklist';

@IonicPage()
@Component({
    selector: 'page-verificacao',
    templateUrl: 'verificacao.html'
})

export class VerificacaoPage {

    servico: Servico = new Servico();
    itemChecklist: ItemChecklist = new ItemChecklist();
    inspecoes: Inspecao[] = [];
    inspecoesBackup: Inspecao[] = [];
    itensBackup: ItemInspecao[] = [];
    inspecaoBackup: Inspecao = new Inspecao();
    statusBackup: number;
    idFuncionarioAprovadoBackup: number;
    idFuncionarioInspecionadoBackup: number;
    broadcomb: string;

    constructor(
        public navParams: NavParams,
        public storage: Storage,
        public actionSheetCtrl: ActionSheetController,
        public modalCtrl: ModalController,
        public messageService: MessageService,
        public navCtrl: NavController
    ) {
        this.servico = navParams.data.servico;
        this.inspecoes = [...this.ordenar(this.servico.inspecoesObra)];
        this.inspecoesBackup = [...this.servico.inspecoesObra];
        this.obterItemChecklist();
        this.broadcomb = navParams.data.broadcomb + " >> " + this.servico.descricao;
    }

    ordenar(inspecoes: Inspecao[]) {
        return inspecoes.sort((a, b) => {
            if (a.dataInspecao > b.dataInspecao) return -1;
            else return 1;
        });
    }

    atualizarStatus() {
        setTimeout(() => {
            if (this.servico.status == 0) {
                this.servico.situacao = 'Em aberto';
                this.criarAtualizacaoStatus();
            } else {
                if (this.servico.inspecoesObra.some(x => x.status == 0)) {
                    this.servico.status = 0;
                    this.messageService.exibirMensagem("Não foi possível finalizar o Serviço, existem inspeções em aberto.");
                } else {
                    this.servico.situacao = 'Finalizado';
                    this.criarAtualizacaoStatus();
                }
            }
        }, 100);
    }

    criarAtualizacaoStatus() {
        this.storage.ready().then(() => {
            let atualizacoesArray: Alteracao[] = [];
            this.storage.get('atualizacoes').then(
                atualizacoes => {
                    let alteracao = new Alteracao({ id: UUID.UUID(), idServico: this.servico.id, idGuidServico: this.servico.idGuidServico, idArea: this.servico.idArea, idGuidArea: this.servico.idAreaGuid, tipo: "Update", entidade: "Servico", valor: JSON.stringify(this.servico), data: new Date(), descricao: (this.servico.status == 0 ? "Reabertura" : "Finalização") + " do serviço '" + this.servico.descricao + "' em '" + this.broadcomb.toUpperCase() + "'.", obraId: this.servico.idObra });
                    if (atualizacoes) {
                        atualizacoesArray = atualizacoes;
                        atualizacoesArray.push(alteracao);
                    } else {
                        atualizacoesArray.push(alteracao);
                    }
                    this.storage.set('atualizacoes', atualizacoesArray);
                    this.atualizarObra(this.servico);
                }
            );
        });
    }

    atualizarObra(item: Servico) {
        this.storage.ready().then(() => {
            this.storage.get('obras').then(
                obras => {
                    obras.find(x => x.id == this.servico.idObra).areas.find(x => this.servico.idAreaGuid ? (x.idGuid == this.servico.idAreaGuid) : (x.id == this.servico.idArea)).servicos.find(x => item.idGuidServico ? (x.idGuidServico == item.idGuidServico) : (x.id == item.id)).status = item.status;
                    this.storage.set('obras', obras);
                }
            );
        });
    }

    obterItemChecklist() {
        this.storage.ready().then(() => {
            this.storage.get('itensChecklist').then(
                itens => {
                    this.itemChecklist = itens.find(x => x.id == this.servico.idChecklist);
                    if (!this.itemChecklist) {
                        this.itemChecklist = itens.find(x => x.idGuid == this.servico.idChecklistGuid);
                    }
                }
            );
        });
    }

    novaInspecao() {
        let modal = this.modalCtrl.create("ManterVerificacaoPage", { inspecao: new Inspecao(), itemChecklist: this.itemChecklist });
        modal.present();

        modal.onWillDismiss((inspecao: Inspecao) => {
            if (inspecao) {
                inspecao.idGuidInspecao = UUID.UUID();

                inspecao.idGuidServico = this.servico.idGuidServico;
                inspecao.idServico = this.servico.id;

                this.itemChecklist.itensChecklistServico.forEach(item => {
                    let novoItem = new ItemInspecao();
                    novoItem.dataHoraInclusao = new Date();
                    novoItem.descricao = item.descricao;
                    novoItem.idGuidInspecao = inspecao.idGuidInspecao;
                    novoItem.ordem = item.ordem.toString();

                    novoItem.idGuidItemServico = item.idGuid;
                    novoItem.idItemServico = item.id;
                    
                    inspecao.inspecaoObraItens.push(novoItem);
                });
                this.inspecoes.unshift(inspecao);
                this.inspecoesBackup.unshift(inspecao);
                this.criarInspecao(inspecao);
            }
        });
    }

    abrirItensInspecao(inspecao: Inspecao) {
        let modal = this.modalCtrl.create("RealizarVerificacaoPage", { inspecao: inspecao, descServico: this.broadcomb, servico: this.servico });
        this.itensBackup = [];
        this.statusBackup = inspecao.status;
        this.idFuncionarioAprovadoBackup = inspecao.idFuncionarioAprovado;
        this.idFuncionarioInspecionadoBackup = inspecao.idFuncionarioInspecionado;
        inspecao.inspecaoObraItens.forEach(element => {
            this.itensBackup.push(new ItemInspecao(element));
        });
        modal.present();

        modal.onWillDismiss((data: any) => {
            if (data.concluido) {
                data.inspecao.qtdA = data.inspecao.inspecaoObraItens.filter(x => x.inspecao1 == 'A').length;
                data.inspecao.qtdNA = data.inspecao.inspecaoObraItens.filter(x => x.inspecao1 == 'N').length;
                data.inspecao.qtdR = data.inspecao.inspecaoObraItens.filter(x => x.inspecao1 == 'R').length;
                data.inspecao.qtdX = data.inspecao.inspecaoObraItens.filter(x => x.inspecao1 == 'X').length;
                data.inspecao.qtdRA = data.inspecao.inspecaoObraItens.filter(x => x.inspecao2 == 'A').length;
                let index = this.inspecoesBackup.findIndex(x => data.inspecao.id != 0 ? (x.id == data.inspecao.id) : (x.idGuidInspecao == data.inspecao.idGuidInspecao));
                this.inspecoesBackup[index] = data.inspecao;
                this.inspecoes = [...this.inspecoesBackup];
                this.editarInspecao(data.inspecao, "Realização da verificação");
            } else {
                data.inspecao.inspecaoObraItens = [...this.itensBackup];
                data.inspecao.status = this.statusBackup;
                data.inspecao.idFuncionarioAprovado = this.idFuncionarioAprovadoBackup;
                data.inspecao.idFuncionarioInspecionado = this.idFuncionarioInspecionadoBackup;
                let index = this.inspecoesBackup.findIndex(x => data.inspecao.id != 0 ? (x.id == data.inspecao.id) : (x.idGuidInspecao == data.inspecao.idGuidInspecao));
                this.inspecoesBackup[index] = data.inspecao;
                this.inspecoes = [...this.inspecoesBackup];
            }
        });
    }

    editar(inspecao: Inspecao) {
        let modal = this.modalCtrl.create("ManterVerificacaoPage", { inspecao: inspecao, itemChecklist: this.itemChecklist });
        this.inspecaoBackup = new Inspecao(inspecao);
        modal.present();

        modal.onWillDismiss((inspecao: Inspecao) => {
            if (inspecao) {
                let index = this.inspecoesBackup.findIndex(x => inspecao.id != 0 ? (x.id == inspecao.id) : (x.idGuidInspecao == inspecao.idGuidInspecao));
                this.inspecoesBackup[index] = inspecao;
                this.inspecoes = [...this.inspecoesBackup];
                this.editarInspecao(inspecao, "Edição da verificação");
            } else {
                const inspecaoArray = this.inspecoes.find(x => x.idGuidInspecao ? (x.idGuidInspecao == this.inspecaoBackup.idGuidInspecao) : (x.id == this.inspecaoBackup.id));
                inspecaoArray.dataInspecao = this.inspecaoBackup.dataInspecao;
                inspecaoArray.dataEncerramento = this.inspecaoBackup.dataEncerramento;
                inspecaoArray.campo1 = this.inspecaoBackup.campo1;
                inspecaoArray.campo2 = this.inspecaoBackup.campo2;
                inspecaoArray.campo3 = this.inspecaoBackup.campo3;
                inspecaoArray.campo4 = this.inspecaoBackup.campo4;
            }
        });
    }

    editarInspecao(inspecao: Inspecao, acao: string) {
        this.storage.ready().then(() => {
            let atualizacoesArray: Alteracao[] = [];
            this.storage.get('atualizacoes').then(
                atualizacoes => {
                    let alteracao = new Alteracao({ id: UUID.UUID(), idInspecao: inspecao.id, idGuidInspecao: inspecao.idGuidInspecao, idArea: this.servico.idArea, idGuidArea: this.servico.idAreaGuid, idServico: this.servico.id, idGuidServico: this.servico.idGuidServico, tipo: "Update", entidade: "Inspecao", valor: JSON.stringify(inspecao), data: new Date(), descricao: acao + " '" + inspecao.campo1 + "' no serviço '" + this.servico.descricao + "'.", obraId: this.servico.idObra });
                    if (atualizacoes) {
                        atualizacoesArray = atualizacoes;
                        atualizacoesArray.push(alteracao);
                    } else {
                        atualizacoesArray.push(alteracao);
                    }
                    this.storage.set('atualizacoes', atualizacoesArray);
                    this.atualizarObraEdicao(inspecao);
                }
            );
        });
    }

    criarInspecao(inspecao: Inspecao) {
        this.storage.ready().then(() => {
            let atualizacoesArray: Alteracao[] = [];
            this.storage.get('atualizacoes').then(
                atualizacoes => {
                    let alteracao = new Alteracao({ id: UUID.UUID(), idInspecao: inspecao.id, idGuidInspecao: inspecao.idGuidInspecao, idArea: this.servico.idArea, idGuidArea: this.servico.idAreaGuid, idServico: this.servico.id, idGuidServico: this.servico.idGuidServico, tipo: "Insert", entidade: "Inspecao", valor: JSON.stringify(inspecao), data: new Date(), descricao: "Criação da verificação '" + inspecao.campo1 + "' no serviço '" + this.servico.descricao + "'.", obraId: this.servico.idObra });
                    if (atualizacoes) {
                        atualizacoesArray = atualizacoes;
                        atualizacoesArray.push(alteracao);
                    } else {
                        atualizacoesArray.push(alteracao);
                    }
                    this.storage.set('atualizacoes', atualizacoesArray);
                    this.atualizarObraCriacao(inspecao);
                }
            );
        });
    }

    filtrar(valor: string) {
        if (valor.length == 0) {
            this.inspecoes = [...this.inspecoesBackup];
        } else {
            this.inspecoes = this.inspecoesBackup.filter((item) => {
                return item.campo1.toLowerCase().indexOf(valor.toLowerCase()) > -1;
            });
        }
    }

    confirmarExclusao(item: Inspecao) {
        let mensagem: string;
        if (!item.delete) {
            mensagem = "Deseja realmente excluir a verificação '" + item.campo1 + "'?";
        } else {
            mensagem = "Deseja realmente reativar a verificação '" + item.campo1 + "'?";
        }
        this.messageService.exibirMensagemConfirmacao(mensagem, () => { this.alterarSituacaoVerificacao(item) });
    }

    alterarSituacaoVerificacao(item: Inspecao): any {
        this.storage.ready().then(() => {
            let atualizacoesArray: Alteracao[] = [];
            this.storage.get('atualizacoes').then(
                atualizacoes => {
                    item.delete = !item.delete;
                    let alteracao = new Alteracao({ id: UUID.UUID(), idInspecao: item.id, idGuidInspecao: item.idGuidInspecao, idArea: this.servico.idArea, idGuidArea: this.servico.idAreaGuid, idServico: this.servico.id, idGuidServico: this.servico.idGuidServico, tipo: "Update", entidade: "Inspecao", valor: JSON.stringify(item), data: new Date(), descricao: (item.delete ? "Inativação" : "Ativação") + " da verificação '" + item.campo1 + "' no serviço '" + this.servico.descricao + "'.", obraId: this.servico.idObra });
                    if (atualizacoes) {
                        atualizacoesArray = atualizacoes;
                        atualizacoesArray.push(alteracao);
                    } else {
                        atualizacoesArray.push(alteracao);
                    }
                    this.storage.set('atualizacoes', atualizacoesArray);
                    this.atualizarObraSituacao(item);
                }
            );
        });
    }

    atualizarObraSituacao(item: Inspecao) {
        this.storage.ready().then(() => {
            this.storage.get('obras').then(
                obras => {
                    obras.find(x => x.id == this.servico.idObra).areas.find(x => this.servico.idAreaGuid ? (x.idGuid == this.servico.idAreaGuid) : (x.id == this.servico.idArea)).servicos.find(x => this.servico.idGuidServico ? (x.idGuidServico == this.servico.idGuidServico) : (x.id == this.servico.id)).inspecoesObra.find(x => item.idGuidInspecao ? (x.idGuidInspecao == item.idGuidInspecao) : (x.id == item.id)).delete = item.delete;
                    this.storage.set('obras', obras);
                }
            );
        });
    }

    atualizarObraEdicao(item: Inspecao) {
        this.storage.ready().then(() => {
            this.storage.get('obras').then(
                obras => {
                    let inspecao = obras.find(x => x.id == this.servico.idObra).areas.find(x => this.servico.idAreaGuid ? (x.idGuid == this.servico.idAreaGuid) : (x.id == this.servico.idArea)).servicos.find(x => this.servico.idGuidServico ? (x.idGuidServico == this.servico.idGuidServico) : (x.id == this.servico.id)).inspecoesObra.find(x => item.idGuidInspecao ? (x.idGuidInspecao == item.idGuidInspecao) : (x.id == item.id));
                    inspecao.campo1 = item.campo1;
                    inspecao.campo2 = item.campo2;
                    inspecao.campo3 = item.campo3;
                    inspecao.campo4 = item.campo4;
                    inspecao.dataInspecao = item.dataInspecao;
                    inspecao.dataEncerramento = item.dataEncerramento;
                    inspecao.idFuncionarioAprovado = item.idFuncionarioAprovado;
                    inspecao.idFuncionarioInspecionado = item.idFuncionarioInspecionado;
                    inspecao.status = item.status;
                    inspecao.situacao = item.situacao;
                    inspecao.inspecaoObraItens = item.inspecaoObraItens;
                    this.storage.set('obras', obras);
                }
            );
        });
    }

    atualizarObraCriacao(item: Inspecao) {
        this.storage.ready().then(() => {
            this.storage.get('obras').then(
                obras => {
                    obras.find(x => x.id == this.servico.idObra).areas.find(x => this.servico.idAreaGuid ? (x.idGuid == this.servico.idAreaGuid) : (x.id == this.servico.idArea)).servicos.find(x => this.servico.idGuidServico ? (x.idGuidServico == this.servico.idGuidServico) : (x.id == this.servico.id)).inspecoesObra.unshift(item);
                    this.storage.set('obras', obras);
                }
            );
        });
    }

    exibirOpcoes(inspecao: Inspecao) {
        const actionSheet = this.actionSheetCtrl.create(
            {
                "buttons": [
                    {
                        "text": "Realizar inspeção",
                        handler: () => {
                            this.abrirItensInspecao(inspecao);
                        }
                    },
                    {
                        "text": "Editar",
                        handler: () => {
                            this.editar(inspecao);
                        }
                    },
                    {
                        "text": !inspecao.delete ? "Excluir" : "Reativar",
                        handler: () => {
                            this.confirmarExclusao(inspecao);
                        }
                    },
                    {
                        "text": "Cancelar",
                        "role": "cancel"
                    }
                ]
            }
        );
        actionSheet.present();
    }

    voltarHome() {
        this.navCtrl.setRoot("HomePage");
    }

}