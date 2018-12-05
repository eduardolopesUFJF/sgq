import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export abstract class BaseService {

    protected apiUrl;

    headers = new HttpHeaders();

    constructor(protected http: HttpClient, rota: string) {
        this.apiUrl = environment.urlAPI + rota;
        if (localStorage.getItem('BancoSchema'))
            this.headers = this.headers.set('BancoSchema', localStorage.getItem('BancoSchema'));
    }

    protected handleError(error: any) {
        if (error.status == '401' || error.status == '403') {
            location.href = environment.urlAPI;
        } else {
            return Promise.reject(error);
        }
    }

}