import { Injectable } from '@angular/core';
import { BaseService } from "./base.service";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import "rxjs/Rx";
import { Cliente } from '../models/cliente';

@Injectable()
export class ClienteService extends BaseService {

    constructor(http: HttpClient) {
        super(http, 'cliente/');
    }

    public obterTodas(): Observable<Cliente[]> {
        return this.http.get<Cliente[]>(this.apiUrl, { headers: this.headers })
            .catch(this.handleError);
    }

}
