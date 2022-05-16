import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Cliente } from '../clientes/cliente';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiURL: string = environment.apiURLBase + '/api/client';


  constructor(
    private http: HttpClient
  ) { }

  getCliente(): Cliente {
    let cliente: Cliente = new Cliente()
    cliente.cpf = "888888"
    cliente.name = "Wanderlei Rocha"
    return cliente
  }

  salvar(cliente: Cliente): Observable<Cliente> {
    //return this.http.post<Cliente>( `${this.apiURL}` , cliente);
    return this.http.post<Cliente>(`${this.apiURL}`, cliente);
  }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.apiURL}`);
  }

  deletar(cliente: Cliente): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${cliente.id}`);
  }

  getClienteById(id: number) {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  atualizar(cliente: Cliente) {
    return this.http.put<Cliente>(`${this.apiURL}/${cliente.id}`, cliente);
  }

}
