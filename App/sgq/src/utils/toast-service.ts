import { ToastController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { AppSettings } from '../config/app-settings';

@Injectable()
export class ToastService {

  constructor(private toastCtrl: ToastController) {}

  presentToastError(message: string) {
    let toastItem = AppSettings.TOAST;
    toastItem.cssClass = "toast-error";
    toastItem["message"] = message;
    let toast = this.toastCtrl.create(toastItem);
    toast.present();
  }

  presentToastSuccess(message: string) {
    let toastItem = AppSettings.TOAST;
    toastItem.cssClass = "toast-success";
    toastItem["message"] = message;
    let toast = this.toastCtrl.create(toastItem);
    toast.present();
  }

  presentToastWarning(message: string) {
    let toastItem = AppSettings.TOAST;
    toastItem.cssClass = "toast-warning";
    toastItem["message"] = message;
    let toast = this.toastCtrl.create(toastItem);
    toast.present();
  }

}
