import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VerificacaoPage } from './verificacao';

@NgModule({
  declarations: [
    VerificacaoPage
  ],
  imports: [
    IonicPageModule.forChild(VerificacaoPage)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class VerificacaoPageModule { }
