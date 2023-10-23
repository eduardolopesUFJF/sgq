import { Injectable } from '@angular/core';
import { BaseService } from "./base.service";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import "rxjs/Rx";
import { PermissaoExclusao } from '../models/permissao-exclusao';

@Injectable()
export class PermissaoService extends BaseService {

    constructor(http: HttpClient) {
        super(http, 'permissao/');
    }

    public obterPermissoesExclusao(cliente: string): Observable<PermissaoExclusao> {
        this.headers = this.headers.set('BancoSchema', 'BPOSSAS_CONTROLE_CLIENTES');
        return this.http.get<PermissaoExclusao>(this.apiUrl + 'delecoes/' + cliente, { headers: this.headers })
            .catch(this.handleError);
    }

}