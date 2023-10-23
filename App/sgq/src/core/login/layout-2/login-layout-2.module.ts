import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginLayout2 } from './login-layout-2';
import { SelectLayout1Module } from '../../select/layout-1/select-layout-1.module';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
    declarations: [
        LoginLayout2,
    ],
    imports: [
        IonicPageModule.forChild(LoginLayout2),
        SelectLayout1Module,
        IonicSelectableModule
    ],
    exports: [
        LoginLayout2
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class LoginLayout2Module { }
