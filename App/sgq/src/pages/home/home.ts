import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { MyApp } from '../../app/app.component';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  Math: any;

  constructor() {
    this.Math = Math;
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

}
