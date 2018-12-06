import { Injectable } from '@angular/core';
import { BaseService } from "./base.service";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Alteracao } from '../models/alteracao';
import "rxjs/Rx";

@Injectable()
export class AlteracaoService extends BaseService {

    constructor(http: HttpClient) {
        super(http, 'alteracao/');
    }

    public publicar(alteracoes: Alteracao[]): Observable<boolean> {
        this.headers = this.headers.set('BancoSchema', localStorage.getItem('BancoSchema'));
        return this.http.post<boolean>(this.apiUrl, alteracoes, { headers: this.headers })
            .catch(this.handleError);
    }

}
