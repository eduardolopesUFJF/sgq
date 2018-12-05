import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AreaCadastroPage } from './area-cadastro';

@NgModule({
  declarations: [
    AreaCadastroPage
  ],
  imports: [
    IonicPageModule.forChild(AreaCadastroPage)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AreaCadastroPageModule {}
