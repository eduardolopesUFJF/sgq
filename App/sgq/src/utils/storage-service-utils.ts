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
      this.loadingService.hide();
      return obras;
    }
  }

  async montarObraBackup() {
    await this.storage.ready();
    const tamanhoObra = await this.storage.get('tamanhoObra');
    if (tamanhoObra > 1) {
      const obras1 = await this.storage.get('obrasBackup1');
      const obras2 = await this.storage.get('obrasBackup2');
      this.storage.set('obras1', obras1);
      this.storage.set('obras2', obras2);
    } else {
      const obras = await this.storage.get('obrasBackup');
      this.storage.set('obras', obras);
    }
    const itens = await this.storage.get('itensChecklistBackup');
    this.storage.set('itensChecklist', itens);
  }

  public armazenarObraNoStorage(obras: Obra[], realizarBackup?: boolean) {
    const obrasString = JSON.stringify(obras);
    const valorMaximoJson = 83378796;
    if (obrasString.length > valorMaximoJson) {
      const meio = Math.floor(obrasString.length / 2);
      this.storage.set('tamanhoObra', 2);
      this.storage.set('obras1', obrasString.slice(0, meio));
      this.storage.set('obras2', obrasString.slice(meio, obrasString.length));
      if (realizarBackup) {
        this.storage.set('obrasBackup1', obrasString.slice(0, meio));
        this.storage.set('obrasBackup2', obrasString.slice(meio, obrasString.length));
      }
    } else {
      this.storage.set('tamanhoObra', 1);
      this.storage.set('obras', obras);
      if (realizarBackup) {
        this.storage.set('obrasBackup', obras);
      }
    }
  }
}
