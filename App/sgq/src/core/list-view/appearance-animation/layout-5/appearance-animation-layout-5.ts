import { Component, Input, ViewChild, OnChanges } from '@angular/core';
import { IonicPage, Content } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
    selector: 'appearance-animation-layout-5',
    templateUrl: 'appearance-animation.html'
})
export class AppearanceAnimationLayout5 implements OnChanges {
    @Input() data: any;
    @Input() events: any;
    @Input() config: any;
    dataBackup: any[] = [];
    
    @ViewChild(Content)
    content: Content;
    animateItems = [];
    animateClass: any;
    animacaoAtiva: boolean = true;
    descricao: string = "";
    ultimoDownload: any;
    ultimoUpload: any;

    constructor(public storage: Storage) {
        this.animateClass = { 'zoom-in': true };
        this.storage.ready().then(() => {
            this.storage.get('ultimoDownload').then(
                data => {
                    this.ultimoDownload = data ? data : "Nunca";
                }
            );
            this.storage.get('ultimoUpload').then(
                data => {
                    this.ultimoUpload = data ? data : "Nunca";
                }
            );
        });
    }

    onEvent(event: string, item: any, e: any) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    }

    ngOnChanges(changes: { [propKey: string]: any }) {
        let that = this;
        that.data = changes['data'].currentValue;
        if (that.data && that.data) {
            that.animateItems = [];
            for (let i = 0; i < that.data.length; i++) {
                setTimeout(function () {
                    that.animateItems.push(that.data[i]);
                }, 200 * i);
            }
        }
        if (this.dataBackup.length == 0) {
            this.dataBackup = [...this.data];
        }
    }

    filtrar(valor: string) {
        this.animacaoAtiva = false;
        if (valor.length == 0) {
            this.data = [...this.dataBackup];
        } else {
            this.data = this.dataBackup.filter((item) => {
                return item.descricao.toLowerCase().indexOf(valor.toLowerCase()) > -1;
            });
        }
    }

    verificaNovoItem(item) {
        return item.id == 0;
    }
}
