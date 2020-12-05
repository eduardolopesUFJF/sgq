import { LoadingController } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class LoadingService {
  loading: any;
  loadingSubida: any;
  porcentagem: number = 0;
  intervalo;
  constructor(private loadingCtrl: LoadingController) { }

  show() {
    this.loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `<img src="assets/svg/grid.svg"/>`
    });
    this.loading.present();
  }

  hide() {
    this.loading.dismiss();
  }

  showSubida() {
    this.porcentagem = 0;
    this.loadingSubida = this.loadingCtrl.create({
      spinner: 'hide',
      content: `<img src="assets/svg/grid.svg"/>
      <p>0 %</p>
      `
    });
    this.loadingSubida.setCssClass('text-align: center');
    this.loadingSubida.present();

    this.intervalo = setInterval(() => {
      this.porcentagem += 5;
      if (this.porcentagem > 100) {
        this.loadingSubida.setContent(`<img src="assets/svg/grid.svg"/>
        <p>Finalizando...</p>`);
      } else {
        this.loadingSubida.setContent(`<img src="assets/svg/grid.svg"/><p>` + this.porcentagem + ` %</p>`);
      }
    }, 5000);
  }

  hideSubida() {
    clearInterval(this.intervalo);
    this.intervalo = null;
    this.loadingSubida.dismiss();
  }
}
