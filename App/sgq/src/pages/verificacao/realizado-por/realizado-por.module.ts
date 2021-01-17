import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RealizadoPorPage } from './realizado-por';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  declarations: [
    RealizadoPorPage
  ],
  imports: [
    IonicPageModule.forChild(RealizadoPorPage),
    IonicSelectableModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class RealizadoPorPageModule { }
