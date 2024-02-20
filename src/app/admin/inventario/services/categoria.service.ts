import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl = environment.urlServidor

  constructor(private http: HttpClient) { }

  funListar(){
    return this.http.get(`${this.baseUrl}/categoria`) 
  }

  funGuardar(registro: any){
    return this.http.post(`${this.baseUrl}/categoria`, registro)
  }
}
