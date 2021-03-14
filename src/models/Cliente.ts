import { tipoClientes } from "./tipoClientes";

export class Cliente {
  clienteId: number;
  nome: string;
  email: string;
  senha: string;
  confirma_senha: string;
  tipo_cliente_id?: tipoClientes;
}