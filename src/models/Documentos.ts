import { Clientes } from "./clientes";
import { tipoDocumentos } from "./tipoDocumentos";

export class Documentos {
    id: number;
    numero: string;
    validade: string;
    tipo_documento_id: tipoDocumentos;
    cliente_id: Clientes;
}