import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Obra } from '../models/obra';
import { LoadingService } from './loading-service';

@Injectable()
export class StorageServiceUtils {

  constructor(private storage: Storage, private loadingService: LoadingService) { }

  async montarObra() {
    this.loadingService.show();

    await this.storage.ready();
    const tamanhoObra = await this.storage.get('tamanhoObra');

    if (tamanhoObra > 1) {
      const obras1 = await this.storage.get('obras1');
      const obras2 = await this.storage.get('obras2');
      const obras = JSON.parse(obras1 + obras2);
      this.loadingService.hide();
      return obras;
    }
    else {
      let obras = await this.storage.get('obras');
      obras = JSON.parse(obras);
      this.loadingService.hide();
      return obras;
    }
  }

  montarObraBackup() {
    this.storage.ready().then(() => {
      this.storage.get('tamanhoObra').then((tamanhoObra) => {
        if (tamanhoObra > 1) {
          this.storage.get('obrasBackup1').then((obra1) => {
            this.storage.get('obrasBackup2').then((obra2) => {
              let obrasBackup = JSON.parse(obra1 + obra2);
              this.storage.set('obras', obrasBackup);
            });
          });
        } else {
          this.storage.get('obrasBackup').then((obrasBackup) => {
            obrasBackup = JSON.parse(obrasBackup);
            this.storage.set('obras', obrasBackup);
            this.storage.get('itensChecklistBackup').then(
              checklistBackup => {
                this.storage.set('itensChecklist', checklistBackup);
              }
            );
          });
        }
      });
    });
  }

  public armazenarObraNoStorage(obras: Obra[]) {
    const obrasString = JSON.stringify(obras);
    const valorMaximoJson = 83378796;
    if (obrasString.length > valorMaximoJson) {
      this.storage.set('tamanhoObra', 2);
      this.storage.set('obras1', obrasString.slice(0, obrasString.length / 2));
      this.storage.set('obras2', obrasString.slice(obrasString.length / 2, obrasString.length));
      this.storage.set('obrasBackup1', obrasString.slice(0, obrasString.length / 2));
      this.storage.set('obrasBackup2', obrasString.slice(obrasString.length / 2, obrasString.length));
    } else {
      this.storage.set('tamanhoObra', 1);
      this.storage.set('obras', obras);
      this.storage.set('obrasBackup', obras);
    }
  }
}
