import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { Network } from '@ionic-native/network';
import { ToastService } from '../utils/toast-service';
import { LoadingService } from '../utils/loading-service';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { MaskDirective } from '../directives/mask.directive';
import { DatePicker } from '@ionic-native/date-picker';
import { MessageService } from '../utils/message-service';
import { IonicSelectableModule } from 'ionic-selectable';
import { LZStringModule, LZStringService } from 'ng-lz-string';
import { StorageServiceUtils } from '../utils/storage-service-utils';

@NgModule({
  declarations: [
    MyApp,
    MaskDirective
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    // IonicStorageModule.forRoot({ name: '__mydb', driverOrder: ['sqlite', 'websql', 'indexeddb'] }),
    IonicSelectableModule,
    LZStringModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    StatusBar,
    SplashScreen,
    ToastService,
    StorageServiceUtils,
    LZStringService,
    LoadingService,
    MessageService,
    Network,
    DatePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
