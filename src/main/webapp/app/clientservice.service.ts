/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cours } from './cours';


@Injectable({
  providedIn: 'root'
})
export class ClientserviceService {
  service: any;

  constructor(private http: HttpClient) { }


  get(){
    return this.http.get<Cours[]>('http://localhost:8080/api/cours');
  }


}






