import { Cidades } from "./Cidades";
import { Clientes } from "./clientes";
import { tipoEnderecos } from "./tipoEnderecos";

export class Enderecos {
  id: number;
  cep: string;
  logradouro: string;
  numero: string;
  bairro: string;
  complemento: string;
  cidade_id: Cidades;
  cliente_id: Clientes;
  tipo_enderecos_id: tipoEnderecos;
}