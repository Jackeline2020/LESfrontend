import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  apiUrl = 'http://localhost:8320/clientes';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
 
  constructor(
    private httpClient: HttpClient
  ) { }

  public findAllClientes(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.apiUrl);
  }

  public findClienteById(clienteId: number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(this.apiUrl + '/' + clienteId);
  }

  public postCliente(cliente: Cliente) {
    return this.httpClient.post(this.apiUrl, cliente, { responseType: 'text' });
  }

  public deleteCliente(clienteId: number) {
    return this.httpClient.delete(this.apiUrl + '/' + clienteId, { responseType: 'text' });
  }

  public updateCliente(cliente: Cliente, clienteId: number) {
    return this.httpClient.put(this.apiUrl + '/' + clienteId, cliente, { responseType: 'text' });
  }
}
