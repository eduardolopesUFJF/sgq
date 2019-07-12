import { Component } from '@angular/core';
import { IonicPage, ModalController, ActionSheetController, NavParams, ViewController } from 'ionic-angular';
import { Inspecao } from '../../models/inspecao';
import { Storage } from '@ionic/storage';
import { MessageService } from '../../utils/message-service';
import { Ocorrencia } from '../../models/ocorrencia';
import { Alteracao } from '../../models/alteracao';
import { UUID } from 'angular2-uuid';
import { Servico } from '../../models/servico';
import { StorageServiceUtils } from '../../utils/storage-service-utils';

@IonicPage()
@Component({
    selector: 'page-ocorrencia',
    templateUrl: 'ocorrencia.html'
})

export class OcorrenciaPage {

    inspecao: Inspecao = new Inspecao();
    servico: Servico = new Servico();
    broadcomb: string;
    ocorrenciaBackup: Ocorrencia = new Ocorrencia();

    constructor(
        public navParams: NavParams,
        public storage: Storage,
        public viewCtrl: ViewController,
        public actionSheetCtrl: ActionSheetController,
        public storageServiceUtils: StorageServiceUtils,
        public modalCtrl: ModalController,
        public messageService: MessageService
    ) {
        this.inspecao = navParams.data.inspecao;
        this.servico = navParams.data.servico;
        this.broadcomb = navParams.data.broadcomb;
    }

    exibirOpcoes(ocorrencia: Ocorrencia) {
        const actionSheet = this.actionSheetCtrl.create(
            {
                "buttons": [
                    {
                        "text": "Editar",
                        handler: () => {
                            this.editar(ocorrencia);
                        }
                    },
                    {
                        "text": !ocorrencia.delete ? "Excluir" : "Reativar",
                        handler: () => {
                            this.confirmarExclusao(ocorrencia);
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

    novaOcorrencia() {
        let modal = this.modalCtrl.create("ManterOcorrenciaPage", { ocorrencia: new Inspecao() });
        modal.present();

        modal.onWillDismiss((ocorrencia: Ocorrencia) => {
            if (ocorrencia) {
                ocorrencia.idGuidOcorrencia = UUID.UUID();
                ocorrencia.idInspecaoObra = this.inspecao.id;
                ocorrencia.idGuidInspecao = this.inspecao.idGuidInspecao;
                this.inspecao.ocorrencias.unshift(ocorrencia);
                this.gerarNovaOcorrencia(ocorrencia);
            }
        });
    }

    gerarNovaOcorrencia(ocorrencia: Ocorrencia) {
        this.storage.ready().then(() => {
            let atualizacoesArray: Alteracao[] = [];
            this.storage.get('atualizacoes').then(
                atualizacoes => {
                    let alteracao = new Alteracao({ id: UUID.UUID(), idOcorrencia: ocorrencia.id, idGuidOcorrencia: ocorrencia.idGuidOcorrencia, idInspecao: this.inspecao.id, idGuidInspecao: this.inspecao.idGuidInspecao, idArea: this.servico.idArea, idGuidArea: this.servico.idAreaGuid, idServico: this.servico.id, idGuidServico: this.servico.idGuidServico, tipo: "Insert", entidade: "Ocorrencia", valor: JSON.stringify(ocorrencia), data: new Date(), descricao: "Criação da ocorrência '" + ocorrencia.descricao + "' em '" + this.broadcomb + "'.", obraId: this.servico.idObra });
                    if (atualizacoes) {
                        atualizacoesArray = atualizacoes;
                        atualizacoesArray.push(alteracao);
                    } else {
                        atualizacoesArray.push(alteracao);
                    }
                    this.storage.set('atualizacoes', atualizacoesArray);
                    this.atualizarOcorrenciaCriacao(ocorrencia);
                }
            );
        });
    }

    async atualizarOcorrenciaCriacao(item: Ocorrencia) {
        let obras = await this.storageServiceUtils.montarObra();
        obras.find(x => x.id == this.servico.idObra).areas.find(x => this.servico.idAreaGuid ? (x.idGuid == this.servico.idAreaGuid) : (x.id == this.servico.idArea)).servicos.find(x => this.servico.idGuidServico ? (x.idGuidServico == this.servico.idGuidServico) : (x.id == this.servico.id)).inspecoesObra.find(x => this.inspecao.idGuidInspecao ? (x.idGuidInspecao == this.inspecao.idGuidInspecao) :(x.id == this.inspecao.id)).ocorrencias.unshift(item);
        this.storageServiceUtils.armazenarObraNoStorage(obras);
    }

    editar(ocorrencia: Ocorrencia) {
        let modal = this.modalCtrl.create("ManterOcorrenciaPage", { ocorrencia: ocorrencia });
        this.ocorrenciaBackup = new Ocorrencia(ocorrencia);
        modal.present();

        modal.onWillDismiss((data: any) => {
            if (data) {
                this.editarOcorrencias(data);
            } else {
                const ocorrenciaArray = this.inspecao.ocorrencias.find(x => this.ocorrenciaBackup.idGuidOcorrencia ? (x.idGuidOcorrencia == this.ocorrenciaBackup.idGuidOcorrencia) : (x.id == this.ocorrenciaBackup.id));
                ocorrenciaArray.dataDescricao = this.ocorrenciaBackup.dataDescricao;
                ocorrenciaArray.descricao = this.ocorrenciaBackup.descricao;
                ocorrenciaArray.dataTratativa = this.ocorrenciaBackup.dataTratativa;
                ocorrenciaArray.tratativa = this.ocorrenciaBackup.tratativa;
            }
        });
    }

    editarOcorrencias(ocorrencia: Ocorrencia) {
        this.storage.ready().then(() => {
            let atualizacoesArray: Alteracao[] = [];
            this.storage.get('atualizacoes').then(
                atualizacoes => {
                    let alteracao = new Alteracao({ id: UUID.UUID(), idOcorrencia: ocorrencia.id, idGuidOcorrencia: ocorrencia.idGuidOcorrencia, idInspecao: this.inspecao.id, idGuidInspecao: this.inspecao.idGuidInspecao, idArea: this.servico.idArea, idGuidArea: this.servico.idAreaGuid, idServico: this.servico.id, idGuidServico: this.servico.idGuidServico, tipo: "Update", entidade: "Ocorrencia", valor: JSON.stringify(ocorrencia), data: new Date(), descricao: "Edição da ocorrência '" + ocorrencia.descricao + "' em '" + this.broadcomb + "'.", obraId: this.servico.idObra });
                    if (atualizacoes) {
                        atualizacoesArray = atualizacoes;
                        atualizacoesArray.push(alteracao);
                    } else {
                        atualizacoesArray.push(alteracao);
                    }
                    this.storage.set('atualizacoes', atualizacoesArray);
                    this.atualizarOcorrenciaEdicao(ocorrencia);
                }
            );
        });
    }

    async atualizarOcorrenciaEdicao(item: Ocorrencia) {
        let obras = await this.storageServiceUtils.montarObra();
        const ocorrencia = obras.find(x => x.id == this.servico.idObra).areas.find(x => this.servico.idAreaGuid ? (x.idGuid == this.servico.idAreaGuid) : (x.id == this.servico.idArea)).servicos.find(x => this.servico.idGuidServico ? (x.idGuidServico == this.servico.idGuidServico) : (x.id == this.servico.id)).inspecoesObra.find(x => this.inspecao.idGuidInspecao ? (x.idGuidInspecao == this.inspecao.idGuidInspecao) :(x.id == this.inspecao.id)).ocorrencias.find(x => x.idGuidOcorrencia ? (x.idGuidOcorrencia == item.idGuidOcorrencia) : (x.id == item.id));
        ocorrencia.dataDescricao = item.dataDescricao;
        ocorrencia.descricao = item.descricao;
        ocorrencia.dataTratativa = item.dataTratativa;
        ocorrencia.tratativa = item.tratativa;
        this.storageServiceUtils.armazenarObraNoStorage(obras);
    }

    confirmarExclusao(ocorrencia: Ocorrencia) {
        let mensagem: string;
        if (!ocorrencia.delete) {
            mensagem = "Deseja realmente excluir a ocorrência selecionada?";
        } else {
            mensagem = "Deseja realmente reativar a ocorrência selecionada?";
        }
        this.messageService.exibirMensagemConfirmacao(mensagem, () => { this.alterarSituacaoOcorrencia(ocorrencia) });
    }

    alterarSituacaoOcorrencia(ocorrencia: Ocorrencia): any {
        this.storage.ready().then(() => {
            let atualizacoesArray: Alteracao[] = [];
            this.storage.get('atualizacoes').then(
                atualizacoes => {
                    ocorrencia.delete = !ocorrencia.delete;
                    let alteracao = new Alteracao({ id: UUID.UUID(), idOcorrencia: ocorrencia.id, idGuidOcorrencia: ocorrencia.idGuidOcorrencia, idInspecao: this.inspecao.id, idGuidInspecao: this.inspecao.idGuidInspecao, idServico: this.servico.id, idGuidServico: this.servico.idGuidServico, tipo: "Update", entidade: "Ocorrencia", valor: JSON.stringify(ocorrencia), data: new Date(), descricao: (ocorrencia.delete ? "Inativação" : "Ativação") + " da ocorrência '" + ocorrencia.descricao + "' em '" + this.broadcomb.toUpperCase() + "'." });
                    if (atualizacoes) {
                        atualizacoesArray = atualizacoes;
                        atualizacoesArray.push(alteracao);
                    } else {
                        atualizacoesArray.push(alteracao);
                    }
                    this.storage.set('atualizacoes', atualizacoesArray);
                    this.atualizarOcorrenciaSituacao(ocorrencia);
                }
            );
        });
    }

    async atualizarOcorrenciaSituacao(ocorrencia: Ocorrencia) {
        let obras = await this.storageServiceUtils.montarObra();
        obras.find(x => x.id == this.servico.idObra).areas.find(x => this.servico.idAreaGuid ? (x.idGuid == this.servico.idAreaGuid) : (x.id == this.servico.idArea)).servicos.find(x => this.servico.idGuidServico ? (x.idGuidServico == this.servico.idGuidServico) : (x.id == this.servico.id)).inspecoesObra.find(x => this.inspecao.idGuidInspecao ? (x.idGuidInspecao == this.inspecao.idGuidInspecao) : (x.id == this.inspecao.id)).ocorrencias.find(x => ocorrencia.idGuidOcorrencia ? (x.idGuidOcorrencia == ocorrencia.idGuidOcorrencia) : (x.id == ocorrencia.id)).delete = ocorrencia.delete;
        this.storageServiceUtils.armazenarObraNoStorage(obras);
    }

}