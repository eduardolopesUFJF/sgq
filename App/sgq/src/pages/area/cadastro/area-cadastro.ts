import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { Area } from '../../../models/area';
import { ItemChecklist } from '../../../models/item-checklist';
import { Storage } from '@ionic/storage';
import { Alteracao } from '../../../models/alteracao';
import { ToastService } from '../../../utils/toast-service';
import { UUID } from 'angular2-uuid';
import { Servico } from '../../../models/servico';

@IonicPage()
@Component({
  selector: 'page-area-cadastro',
  templateUrl: 'area-cadastro.html'
})

export class AreaCadastroPage {

  obraId: number;
  itens: number[] = [];
  area: Area = new Area();

  opcoesItens: ItemChecklist[] = [];
  servicosEscolhidos: number[] = [];

  constructor(
    public storage: Storage,
    public navParams: NavParams,
    public toastService: ToastService,
    public viewCtrl: ViewController
  ) {
    this.obraId = this.navParams.data.obraId;
    this.obterItensChecklist();
  }

  obterItensChecklist() {
    this.storage.ready().then(() => {
      this.storage.get('itensChecklist').then(
        itens => {
          this.opcoesItens = itens;
        }
      );
    });
  }

  salvar(formValido) {
    if (formValido) {
      this.area.idGuid = UUID.UUID();
      this.servicosEscolhidos.forEach(item => {
        let servico: Servico = new Servico();
        
        servico.idGuidServico = UUID.UUID();
        servico.idChecklist = item;
        servico.idObra = this.obraId;
        servico.idAreaGuid = this.area.idGuid;

        let servicoEscolhido = this.opcoesItens.find(x => x.id == item);
        servico.itensChecklistServico = servicoEscolhido.itensChecklistServico;
        servico.descricao = servicoEscolhido.descricao;
        servico.tipo = servicoEscolhido.tipo;

        this.area.servicos.push(servico);
      });
      this.storage.ready().then(() => {
        let atualizacoesArray: Alteracao[] = [];
        this.storage.get('atualizacoes').then(
          atualizacoes => {
            this.area.idObra = this.obraId;
            let alteracao = new Alteracao({ id: UUID.UUID(), idArea: this.area.id, idGuidArea: this.area.idGuid, tipo: "Insert", entidade: "Area", valor: JSON.stringify(this.area), data: new Date(), descricao: "Inserção da área: " + this.area.descricao, obraId: this.obraId });
            if (atualizacoes) {
              atualizacoesArray = atualizacoes;
              atualizacoesArray.push(alteracao);
            } else {
              atualizacoesArray.push(alteracao);
            }
            this.storage.set('atualizacoes', atualizacoesArray);
            this.atualizarObra();
          }
        );
      });
    } else {
      this.toastService.presentToastWarning("Preencha todos os campos.");
    }
  }

  atualizarObra() {
    this.storage.ready().then(() => {
      this.storage.get('obras').then(
        obras => {
          this.area.situacao = this.area.status == 0 ? 'Em aberto' : 'Finalizado';
          obras.find(x => x.id == this.obraId).areas.unshift(this.area);
          this.storage.set('obras', obras);
          this.viewCtrl.dismiss(this.area);
        }
      );
    });
  }

  voltar() {
    this.viewCtrl.dismiss(null);
  }

}
