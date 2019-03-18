import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppearanceAnimationLayout5Module } from '../../core/list-view/appearance-animation/layout-5/appearance-animation-layout-5.module';
import { ChecklistPage } from './checklist';

@NgModule({
  declarations: [
    ChecklistPage
  ],
  imports: [
    IonicPageModule.forChild(ChecklistPage),
    AppearanceAnimationLayout5Module
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ChecklistPageModule {}
