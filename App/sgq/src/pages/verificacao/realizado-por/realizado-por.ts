import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { Inspecao } from '../../../models/inspecao';
import { Storage } from '@ionic/storage';
import { RealizadoPor } from '../../../models/realizado-por';
import { Funcionario } from '../../../models/funcionario';
import { StorageServiceUtils } from '../../../utils/storage-service-utils';
import { Servico } from '../../../models/servico';
import { Fornecedor } from '../../../models/fornecedor';
import { FuncionarioTerceirizado } from '../../../models/funcionario-terceirizado';
import { ToastService } from '../../../utils/toast-service';
import { RealizadoPorFuncionario } from '../../../models/realizado-por-funcionario';
import { UUID } from 'angular2-uuid';
import { Alteracao } from '../../../models/alteracao';

@IonicPage()
@Component({
    selector: 'page-realizado-por',
    templateUrl: 'realizado-por.html'
})

export class RealizadoPorPage {

    inspecao: Inspecao = new Inspecao();
    servico: Servico = new Servico();
    realizadoPor: RealizadoPor = new RealizadoPor();
    cadastrando: boolean = false;
    funcionarios: Funcionario[] = [];
    funcionariosSelecionados: Funcionario[] = [];
    fornecedores: Fornecedor[] = [];
    fornecedorSelecionado: Fornecedor = new Fornecedor();
    funcionariosTerceirizadosSelecionados: FuncionarioTerceirizado[] = [];
    idCentroCusto: number;
    descricaoCentroCusto: string;

    constructor(
        public viewCtrl: ViewController,
        public storage: Storage,
        public storageServiceUtils: StorageServiceUtils,
        public toastService: ToastService,
        public navParams: NavParams
    ) {
        this.inspecao = this.navParams.data.inspecao;
        if (!this.inspecao.realizadosPor) {
            this.inspecao.realizadosPor = [];
        }
        this.servico = this.navParams.data.servico;
        this.obterFuncionarios();
        this.obterFornecedores();
    }

    async obterFuncionarios() {
        await this.storage.ready();
        this.funcionarios = await this.storage.get('funcionarios');

        const obras = await this.storageServiceUtils.montarObra();
        const obra = obras.find(x => x.id == this.servico.idObra);
        this.idCentroCusto = obra.idCentroCusto;
        this.descricaoCentroCusto = obra.descricao;

        this.funcionarios = [...this.funcionarios.filter(x => x.idCentroCusto == null || x.idCentroCusto == this.idCentroCusto)];
    }

    async obterFornecedores() {
        await this.storage.ready();
        this.fornecedores = await this.storage.get('fornecedores');
    }

    limparSelecoes() {
        this.funcionariosSelecionados = [];
        this.fornecedorSelecionado = new Fornecedor();
        this.funcionariosTerceirizadosSelecionados = [];
    }

    salvar(valid: boolean) {
        if (valid) {
            let realizadoPor = new RealizadoPor({
                idGuid: UUID.UUID(),
                idInspecao: this.inspecao.id,
                idGuidInspecao: this.inspecao.idGuidInspecao,
                tipoFuncionario: this.realizadoPor.tipoFuncionario,
                idCentroCusto: this.realizadoPor.tipoFuncionario == 1 ? this.idCentroCusto : null,
                nomeCentroCusto: this.realizadoPor.tipoFuncionario == 1 ? this.descricaoCentroCusto : null,
                idFornecedor: this.realizadoPor.tipoFuncionario == 0 ? this.fornecedorSelecionado.id : null,
                nomeFornecedor: this.realizadoPor.tipoFuncionario == 0 ? this.fornecedorSelecionado.nome : null,
                delete: false,
                nomesFuncionarios: this.realizadoPor.tipoFuncionario == 0 ? 
                                        this.funcionariosTerceirizadosSelecionados.map(x => x.nome) : this.funcionariosSelecionados.map(x => x.nome)
            });
            if (this.realizadoPor.tipoFuncionario == 0) {
                this.funcionariosTerceirizadosSelecionados.forEach((item) => {
                    realizadoPor.funcionarios.push(new RealizadoPorFuncionario({
                        idFuncionarioTerceirizado: item.id
                    }));
                });
            } else {
                this.funcionariosSelecionados.forEach((item) => {
                    realizadoPor.funcionarios.push(new RealizadoPorFuncionario({
                        idFuncionario: item.id
                    }));
                });
            }
            this.inspecao.realizadosPor.push(realizadoPor);
            this.gerarAtualizacaoDeCriacao(realizadoPor);
            this.realizadoPor = new RealizadoPor();
            this.cadastrando = false;
        } else {
            this.toastService.presentToastWarning("Você precisa preencher todos os campos.");
        }
    }

    gerarAtualizacaoDeCriacao(realizadoPor: RealizadoPor) {
        this.storage.ready().then(() => {
            let atualizacoesArray: Alteracao[] = [];
            this.storage.get('atualizacoes').then(
                atualizacoes => {
                    let alteracao = new Alteracao({ id: UUID.UUID(), idRealizadoPor: realizadoPor.id, idGuidRealizadoPor: realizadoPor.idGuid, tipo: "Insert", entidade: "RealizadoPor", valor: JSON.stringify(realizadoPor), data: new Date(), descricao: "Definição de 'Realizado Por' no serviço '" + this.servico.descricao + "." });
                    if (atualizacoes) {
                        atualizacoesArray = atualizacoes;
                        atualizacoesArray.push(alteracao);
                    } else {
                        atualizacoesArray.push(alteracao);
                    }
                    this.storage.set('atualizacoes', atualizacoesArray);
                    this.atualizarObraEdicao(this.inspecao);
                }
            );
        });
    }

    gerarAtualizacaoDeStatus(realizadoPor: RealizadoPor) {
        this.storage.ready().then(() => {
            let atualizacoesArray: Alteracao[] = [];
            this.storage.get('atualizacoes').then(
                atualizacoes => {
                    let alteracao = new Alteracao({ id: UUID.UUID(), idRealizadoPor: realizadoPor.id, idGuidRealizadoPor: realizadoPor.idGuid, tipo: "Update", entidade: "RealizadoPor", valor: JSON.stringify(realizadoPor), data: new Date(), descricao: "Remoção de 'Realizado Por' no serviço '" + this.servico.descricao + "." });
                    if (atualizacoes) {
                        atualizacoesArray = atualizacoes;
                        atualizacoesArray.push(alteracao);
                    } else {
                        atualizacoesArray.push(alteracao);
                    }
                    this.storage.set('atualizacoes', atualizacoesArray);
                    this.atualizarObraEdicao(this.inspecao);
                }
            );
        });
    }

    remover(item: RealizadoPor) {
        const realizadoPor = this.inspecao.realizadosPor.find(x => item.id ? x.id == item.id : x.idGuid == item.idGuid);
        if (item.id) {
            realizadoPor.delete = !realizadoPor.delete;
        } else {
            const indice = this.inspecao.realizadosPor.findIndex(x => x.idGuid == item.idGuid);
            this.inspecao.realizadosPor.splice(indice,1);
        }
        this.gerarAtualizacaoDeStatus(realizadoPor);
    }
    
    async atualizarObraEdicao(item: Inspecao) {
        let obras = await this.storageServiceUtils.montarObra();
        let inspecao = obras.find(x => x.id == this.servico.idObra).areas.find(x => this.servico.idAreaGuid ? (x.idGuid == this.servico.idAreaGuid) : (x.id == this.servico.idArea)).servicos.find(x => this.servico.idGuidServico ? (x.idGuidServico == this.servico.idGuidServico) : (x.id == this.servico.id)).inspecoesObra.find(x => item.idGuidInspecao ? (x.idGuidInspecao == item.idGuidInspecao) : (x.id == item.id));
        inspecao.realizadosPor = item.realizadosPor;
        this.storageServiceUtils.armazenarObraNoStorage(obras);
    }

}
