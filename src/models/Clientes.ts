import { tipoClientes } from "./tipoClientes";

export class Clientes {
  id: number;
  nome: string;
  email: string;
  senha: string;
  confirma_senha: string;
  tipo_cliente_id: tipoClientes;
}