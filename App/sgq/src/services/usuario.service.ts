import { Injectable } from '@angular/core';
import { BaseService } from "./base.service";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { UsuarioLogin } from '../models/usuarioLogin';
import "rxjs/Rx";

@Injectable()
export class UsuarioService extends BaseService {

    constructor(http: HttpClient) {
        super(http, 'usuario/');
    }

    public logar(usuarioLogin: UsuarioLogin): Observable<number> {
        this.headers = this.headers.set('BancoSchema', localStorage.getItem('BancoSchema'));
        return this.http.post<number>(this.apiUrl + 'logar', usuarioLogin, { headers: this.headers })
            .catch(this.handleError);
    }

}
