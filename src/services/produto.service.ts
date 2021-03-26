import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  apiUrl = 'http://localhost:8320/produtos';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
 
  constructor(
    private httpClient: HttpClient
  ) { }

  public findAllProdutos(): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(this.apiUrl);
  }

  public postProduto(produto: Produto) {
    return this.httpClient.post(this.apiUrl, produto, { responseType: 'text' });
  }

  public deleteProduto(produtoId: number) {
    return this.httpClient.delete(this.apiUrl + '/' + produtoId, { responseType: 'text' });
  }

  public updateProduto(produto: Produto, produtoId: number) {
    return this.httpClient.put(this.apiUrl + '/' + produtoId, produto, { responseType: 'text' });
  }
}
