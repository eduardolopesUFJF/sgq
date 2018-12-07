import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemAreaPage } from './item-area';
import { AppearanceAnimationLayout5Module } from '../../core/list-view/appearance-animation/layout-5/appearance-animation-layout-5.module';

@NgModule({
  declarations: [
    ItemAreaPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemAreaPage),
    AppearanceAnimationLayout5Module
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ItemAreaPageModule {}
