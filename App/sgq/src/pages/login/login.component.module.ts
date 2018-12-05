import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginLayout2Module } from '../../core/login/layout-2/login-layout-2.module';
import { LoginPage } from './login.component';
import { SelectLayout3Module } from '../../core/select/layout-3/select-layout-3.module';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    LoginLayout2Module,
    SelectLayout3Module
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class LoginPageModule {}
