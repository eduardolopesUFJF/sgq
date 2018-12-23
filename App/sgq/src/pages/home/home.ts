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
      { "title": "Home", "icon": "home", "component": "HomePage" },
      { "title": "Baixar dados", "icon": "cloud-download", "component": "Baixar" },
      { "title": "Listar alterações", "icon": "list", "component": "AlteracoesPage" },
      { "title": "Publicar alterações", "icon": "cloud-upload", "component": "Subir" },
      { "title": "Descartar alterações", "icon": "trash", "component": "Descartar" },
      { "title": "Acesso ás obras", "icon": "checkmark-circle-outline", "component": "ObraPage" },
      { "title": "Sair", "icon": "exit", "component": "LoginPage" },
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
