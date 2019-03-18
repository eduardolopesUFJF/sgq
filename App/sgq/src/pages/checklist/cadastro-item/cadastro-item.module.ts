import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroItemPage } from './cadastro-item';

@NgModule({
  declarations: [
    CadastroItemPage
  ],
  imports: [
    IonicPageModule.forChild(CadastroItemPage)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ChecklistCadastroPageModule {}
