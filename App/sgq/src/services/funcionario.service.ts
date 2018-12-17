import { Injectable } from '@angular/core';
import { BaseService } from "./base.service";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Funcionario } from '../models/funcionario';
import "rxjs/Rx";

@Injectable()
export class FuncionarioService extends BaseService {

    constructor(http: HttpClient) {
        super(http, 'funcionario/');
    }

    public obterTodos(): Observable<Funcionario[]> {
        this.headers = this.headers.set('BancoSchema', localStorage.getItem('BancoSchema'));
        return this.http.get<Funcionario[]>(this.apiUrl + 'ativos/', { headers: this.headers })
            .catch(this.handleError);
    }

}
