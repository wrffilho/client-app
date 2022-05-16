import {ServicoPrestadoBusca} from './../servico-prestado/servico-prestado-lista/ServicoPrestadoBusca';
import {environment} from './../../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { ServicoPrestado } from '../servico-prestado/servicoPrestado';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  apiURL: string = environment.apiURLBase + "/api/servicos-prestados"

  constructor(private http: HttpClient) { }

  salvar(servicoPrestado: ServicoPrestado) : Observable<ServicoPrestado>{
    return this.http.post<ServicoPrestado>(this.apiURL, servicoPrestado);
  }

  buscar(name: string, month: number) : Observable<ServicoPrestadoBusca[]>{

    const httpParams = new HttpParams()
      .set("name", name)
      .set("month", month ?  month.toString() : '');

    const url = this.apiURL + "?" + httpParams.toString();
    return this.http.get<any>(url);
  }
}
