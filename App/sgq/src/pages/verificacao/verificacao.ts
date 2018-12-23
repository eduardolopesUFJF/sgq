import { Component } from '@angular/core';
import { IonicPage, NavParams, ModalController } from 'ionic-angular';
import { Servico } from '../../models/servico';
import { Inspecao } from '../../models/inspecao';
import { Storage } from '@ionic/storage';
import { Alteracao } from '../../models/alteracao';
import { UUID } from 'angular2-uuid';
import { MessageService } from '../../utils/message-service';
import { ItemInspecao } from '../../models/item-inspecao';

@IonicPage()
@Component({
    selector: 'page-verificacao',
    templateUrl: 'verificacao.html'
})

export class VerificacaoPage {

    servico: Servico = new Servico();
    inspecoes: Inspecao[] = [];
    inspecoesBackup: Inspecao[] = [];
    broadcomb: string;

    constructor(
        public navParams: NavParams,
        public storage: Storage,
        public modalCtrl: ModalController,
        public messageService: MessageService
    ) {
        this.servico = navParams.data.servico;
        this.inspecoes = [...this.servico.inspecoesObra];
        this.inspecoesBackup = [...this.servico.inspecoesObra];
        this.broadcomb = navParams.data.broadcomb + " >> " + this.servico.descricao;
    }

    novaInspecao() {
        let modal = this.modalCtrl.create("ManterVerificacaoPage", { inspecao: new Inspecao() });
        modal.present();

        modal.onWillDismiss((inspecao: Inspecao) => {
            if (inspecao) {
                inspecao.idGuidInspecao = UUID.UUID();
                inspecao.idServico = this.servico.id;
                this.storage.ready().then(() => {
                    this.storage.get('itensChecklist').then(
                        servicos => {
                            let servico = servicos.find(x => x.id == this.servico.idChecklist);
                            servico.itensChecklistServico.forEach(item => {
                                let novoItem = new ItemInspecao();
                                novoItem.dataHoraInclusao = new Date();
                                novoItem.descricao = item.descricao;
                                novoItem.idItemServico = item.id;
                                novoItem.idGuidInspecao = inspecao.idGuidInspecao;
                                novoItem.ordem = item.ordem.toString();
                                inspecao.inspecaoObraItens.push(novoItem);
                            });
                            this.inspecoes.unshift(inspecao);
                            this.inspecoesBackup.unshift(inspecao);
                            this.criarInspecao(inspecao);
                        }
                    );
                });
            }
        });
    }

    abrirItensInspecao(inspecao: Inspecao) {
        let modal = this.modalCtrl.create("RealizarVerificacaoPage", { inspecao: inspecao, descServico: this.servico.descricao });
        modal.present();

        modal.onWillDismiss((inspecao: Inspecao) => {
            if (inspecao) {
                let index = this.inspecoesBackup.findIndex(x => inspecao.id != 0 ? (x.id == inspecao.id) : (x.idGuidInspecao == inspecao.idGuidInspecao));
                this.inspecoesBackup[index] = inspecao;
                this.inspecoes = [...this.inspecoesBackup];
                this.editarInspecao(inspecao, "Realização da verificação");
            }
        });
    }

    editar(inspecao: Inspecao) {
        let modal = this.modalCtrl.create("ManterVerificacaoPage", { inspecao: inspecao });
        modal.present();

        modal.onWillDismiss((inspecao: Inspecao) => {
            if (inspecao) {
                let index = this.inspecoesBackup.findIndex(x => inspecao.id != 0 ? (x.id == inspecao.id) : (x.idGuidInspecao == inspecao.idGuidInspecao));
                this.inspecoesBackup[index] = inspecao;
                this.inspecoes = [...this.inspecoesBackup];
                this.editarInspecao(inspecao, "Edição da verificação");
            }
        });
    }

    editarInspecao(inspecao: Inspecao, acao: string) {
        this.storage.ready().then(() => {
            let atualizacoesArray: Alteracao[] = [];
            this.storage.get('atualizacoes').then(
                atualizacoes => {
                    let alteracao = new Alteracao({ id: UUID.UUID(), idInspecao: inspecao.id, idGuidInspecao: inspecao.idGuidInspecao, idArea: this.servico.idArea, idGuidArea: this.servico.idAreaGuid, idServico: this.servico.id, idGuidServico: this.servico.idGuidServico, tipo: "Update", entidade: "Inspecao", valor: JSON.stringify(inspecao), data: new Date(), descricao: acao + "'" + inspecao.local + "' no serviço '" + this.servico.descricao + "'.", obraId: this.servico.idObra });
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
                    let alteracao = new Alteracao({ id: UUID.UUID(), idInspecao: inspecao.id, idGuidInspecao: inspecao.idGuidInspecao, idArea: this.servico.idArea, idGuidArea: this.servico.idAreaGuid, idServico: this.servico.id, idGuidServico: this.servico.idGuidServico, tipo: "Insert", entidade: "Inspecao", valor: JSON.stringify(inspecao), data: new Date(), descricao: "Criação da verificação '" + inspecao.local + "' no serviço '" + this.servico.descricao + "'.", obraId: this.servico.idObra });
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
                return item.local.toLowerCase().indexOf(valor.toLowerCase()) > -1;
            });
        }
    }

    confirmarExclusao(item: Inspecao) {
        let mensagem: string;
        if (!item.delete) {
            mensagem = "Deseja realmente excluir a verificação '" + item.local + "'?";
        } else {
            mensagem = "Deseja realmente reativar a verificação '" + item.local + "'?";
        }
        this.messageService.exibirMensagemConfirmacao(mensagem, () => { this.alterarSituacaoVerificacao(item) });
    }

    alterarSituacaoVerificacao(item: Inspecao): any {
        this.storage.ready().then(() => {
            let atualizacoesArray: Alteracao[] = [];
            this.storage.get('atualizacoes').then(
                atualizacoes => {
                    item.delete = !item.delete;
                    let alteracao = new Alteracao({ id: UUID.UUID(), idInspecao: item.id, idGuidInspecao: item.idGuidInspecao, idArea: this.servico.idArea, idGuidArea: this.servico.idAreaGuid, idServico: this.servico.id, idGuidServico: this.servico.idGuidServico, tipo: "Update", entidade: "Inspecao", valor: JSON.stringify(item), data: new Date(), descricao: (item.delete ? "Inativação" : "Ativação") + " da verificação '" + item.local + "' no serviço '" + this.servico.descricao + "'.", obraId: this.servico.idObra });
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
                    inspecao.local = item.local;
                    inspecao.dataInspecao = item.dataInspecao;
                    inspecao.dataEncerramento = item.dataEncerramento;
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

}