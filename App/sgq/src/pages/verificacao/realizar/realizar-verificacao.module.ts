import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RealizarVerificacaoPage } from './realizar-verificacao';

@NgModule({
  declarations: [
    RealizarVerificacaoPage
  ],
  imports: [
    IonicPageModule.forChild(RealizarVerificacaoPage)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class RealizarVerificacaoPageModule { }
