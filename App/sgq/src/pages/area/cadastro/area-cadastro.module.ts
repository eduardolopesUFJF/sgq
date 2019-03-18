import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AreaCadastroPage } from './area-cadastro';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  declarations: [
    AreaCadastroPage
  ],
  imports: [
    IonicPageModule.forChild(AreaCadastroPage),
    IonicSelectableModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AreaCadastroPageModule {}
