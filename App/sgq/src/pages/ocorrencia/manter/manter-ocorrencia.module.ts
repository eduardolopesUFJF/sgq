import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManterOcorrenciaPage } from './manter-ocorrencia';

@NgModule({
  declarations: [
    ManterOcorrenciaPage
  ],
  imports: [
    IonicPageModule.forChild(ManterOcorrenciaPage)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ManterOcorrenciaPageModule { }
