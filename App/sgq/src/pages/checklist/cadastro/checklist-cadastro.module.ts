import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChecklistCadastroPage } from './checklist-cadastro';

@NgModule({
  declarations: [
    ChecklistCadastroPage
  ],
  imports: [
    IonicPageModule.forChild(ChecklistCadastroPage)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ChecklistCadastroPageModule {}
