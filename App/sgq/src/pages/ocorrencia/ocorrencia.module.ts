import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OcorrenciaPage } from './ocorrencia';

@NgModule({
  declarations: [
    OcorrenciaPage
  ],
  imports: [
    IonicPageModule.forChild(OcorrenciaPage)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class OcorrenciaPageModule { }