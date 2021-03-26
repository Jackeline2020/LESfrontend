import { tipoCliente } from "./tipoCliente";

export class Cliente {
  id: number;
  nome: string;
  email: string;
  senha: string;
  tipoId: tipoCliente;
}