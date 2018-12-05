import { Injectable } from '@angular/core';
import { BaseService } from "./base.service";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import "rxjs/Rx";
import { ItemChecklist } from '../models/item-checklist';

@Injectable()
export class ChecklistService extends BaseService {

    constructor(http: HttpClient) {
        super(http, 'checklist/');
    }

    public obterTodas(): Observable<ItemChecklist[]> {
        this.headers = this.headers.set('BancoSchema', localStorage.getItem('BancoSchema'));
        return this.http.get<ItemChecklist[]>(this.apiUrl + 'itens-ativos/', { headers: this.headers })
            .catch(this.handleError);
    }

}
