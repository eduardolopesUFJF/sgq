import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppSettings } from '../config/app-settings';
import { AngularFireModule } from 'angularfire2';
import { Network } from '@ionic-native/network';
import { ToastService } from '../utils/toast-service';
import { LoadingService } from '../utils/loading-service';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from '../utils/message-service';
import { IonicStorageModule } from '@ionic/storage';
import { MaskDirective } from '../directives/mask.directive';

@NgModule({
  declarations: [
    MyApp,
    MaskDirective
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(AppSettings.FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot()
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
    LoadingService,
    MessageService,
    Network,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
