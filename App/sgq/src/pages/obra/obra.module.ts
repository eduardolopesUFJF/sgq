import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ObraPage } from './obra';
import { AppearanceAnimationLayout5Module } from '../../core/list-view/appearance-animation/layout-5/appearance-animation-layout-5.module';

@NgModule({
  declarations: [
    ObraPage,
  ],
  imports: [
    IonicPageModule.forChild(ObraPage),
    AppearanceAnimationLayout5Module
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ObraPageModule {}
