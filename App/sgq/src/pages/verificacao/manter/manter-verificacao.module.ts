import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManterVerificacaoPage } from './manter-verificacao';

@NgModule({
  declarations: [
    ManterVerificacaoPage
  ],
  imports: [
    IonicPageModule.forChild(ManterVerificacaoPage)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ManterVerificacaoPageModule { }
