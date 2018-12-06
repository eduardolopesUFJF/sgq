import { Injectable } from '@angular/core';
import { BaseService } from "./base.service";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import "rxjs/Rx";
import { Servico } from '../models/servico';

@Injectable()
export class ServicoService extends BaseService {

    constructor(http: HttpClient) {
        super(http, 'servico/');
    }

    public obterServicos(areaId: number): Observable<Servico[]> {
        this.headers = this.headers.set('BancoSchema', localStorage.getItem('BancoSchema'));
        return this.http.get<Servico[]>(this.apiUrl + areaId, { headers: this.headers })
            .catch(this.handleError);
    }

}
