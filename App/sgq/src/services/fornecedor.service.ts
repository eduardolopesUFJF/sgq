import { Injectable } from '@angular/core';
import { BaseService } from "./base.service";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Fornecedor } from '../models/fornecedor';
import "rxjs/Rx";

@Injectable()
export class FornecedorService extends BaseService {

    constructor(http: HttpClient) {
        super(http, 'fornecedor/');
    }

    public obterTodos(): Observable<Fornecedor[]> {
        this.headers = this.headers.set('BancoSchema', localStorage.getItem('BancoSchema'));
        return this.http.get<Fornecedor[]>(this.apiUrl, { headers: this.headers })
            .catch(this.handleError);
    }

}
