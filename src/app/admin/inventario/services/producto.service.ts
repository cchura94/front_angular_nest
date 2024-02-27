import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  baseUrl = environment.urlServidor

  constructor(private http: HttpClient) { }

  funListar(){
    return this.http.get(`${this.baseUrl}/producto/back`) 
  }

}
