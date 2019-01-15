import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RealizarVerificacaoPage } from './realizar-verificacao';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  declarations: [
    RealizarVerificacaoPage
  ],
  imports: [
    IonicPageModule.forChild(RealizarVerificacaoPage),
    IonicSelectableModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class RealizarVerificacaoPageModule { }
