import { Injectable } from '@angular/core';
import { BaseService } from "./base.service";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import "rxjs/Rx";
import { Obra } from '../models/obra';

@Injectable()
export class ObraService extends BaseService {

    constructor(http: HttpClient) {
        super(http, 'obra/');
    }

    public obterTodasAtivas(): Observable<Obra[]> {
        this.headers = this.headers.set('BancoSchema', localStorage.getItem('BancoSchema'));
        return this.http.get<Obra[]>(this.apiUrl, { headers: this.headers })
            .catch(this.handleError);
    }

    public obterIdsTodasAtivas(): Observable<number[]> {
        this.headers = this.headers.set('BancoSchema', localStorage.getItem('BancoSchema'));
        return this.http.get<number[]>(this.apiUrl + 'ids', { headers: this.headers })
            .catch(this.handleError);
    }

    public obterObraCompleta(idObra: number): Observable<Obra> {
        this.headers = this.headers.set('BancoSchema', localStorage.getItem('BancoSchema'));
        return this.http.get<Obra>(this.apiUrl + idObra, { headers: this.headers })
            .catch(this.handleError);
    }

}
