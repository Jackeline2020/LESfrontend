import { Injectable } from '@angular/core';

@Injectable()
export class SingletonRouterService {
  private credentials = true;

  getCredentials(): boolean {
    return this.credentials;
  }

  setCredentials(credentials: boolean) {
    this.credentials = credentials;
  }
}
 
/*public findAllClientesByMotoristaId(motoristaId: number): Observable<Clientes[]> {
  return this.httpClient.get<Clientes[]>(this.apiUrl + '/motorista/' + motoristaId)
  .pipe(
  delay(2000)
  );
  }*/