import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Clientes } from '../models/clientes';;

@Injectable({
 providedIn: 'root'
})

export class ClienteService {
    apiUrl = 'http://localhost:8320/clientes';
    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    constructor(private httpClient: HttpClient) {}

    public findClientesById(cliente_id: number): Observable<Clientes> {
        return this.httpClient.get<Clientes>(this.apiUrl + '/' + cliente_id);
    }

    public postCliente(cliente: Clientes) {
        return this.httpClient.post(this.apiUrl, cliente, { responseType: 'text' });
    }
    public deleteCliente(cliente_id: number) {
        return this.httpClient.delete(this.apiUrl + '/' + cliente_id, { responseType: 'text' });
    }
};

/*public findAllClientesByMotoristaId(motoristaId: number): Observable<Clientes[]> {
  return this.httpClient.get<Clientes[]>(this.apiUrl + '/motorista/' + motoristaId)
  .pipe(
  delay(2000)
  );
  }*/