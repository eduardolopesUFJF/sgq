import { Component } from '@angular/core';
import { IonicPage, NavParams, Events } from 'ionic-angular';
import { MyApp } from '../../app/app.component';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  Math: any;
  pages: any;

  constructor(public navParams: NavParams, public events: Events) {
    this.Math = Math;
    this.pages = [
      { "title": "Baixar dados", "icon": "cloud-download", "component": "Baixar", "color": "green" },
      { "title": "Publicar alterações", "icon": "cloud-upload", "component": "Subir", "color": "green" },
      { "title": "Listar alterações", "icon": "list", "component": "AlteracoesPage", "color": "orange" },
      { "title": "Descartar alterações", "icon": "trash", "component": "Descartar", "color": "red" },
      { "title": "Cadastrar Checklist", "icon": "checkmark-circle-outline", "component": "ChecklistPage", "color": "orange" },
      { "title": "Acesso ás obras", "icon": "build", "component": "ObraPage", "color": "green" },
      { "title": "Sair", "icon": "exit", "component": "LoginPage", "color": "red" },
    ];
  }

  get progressbarAtivo() {
    return MyApp.progressbarAtivo;
  }

  get progress() {
    return MyApp.progress;
  }

  get segundos() {
    return MyApp.segundos;
  }

  openPage(page) {
    this.events.publish('openPage',page);
  }

}
