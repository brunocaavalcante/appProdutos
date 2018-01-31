import { Injectable } from '@angular/core';
import {Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class ProdutoService{

    url = "http://localhost:3000/produtos";

    constructor(private http: Http){

    }

    list(){

        return this.http.get(this.url).map(res => res.json());
    }

    save(obj){

        this.http.post(this.url, obj).map(res => res.json());

    }

}
