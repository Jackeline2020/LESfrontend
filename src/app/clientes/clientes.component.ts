import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { debounceTime } from 'rxjs/operators';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/Cliente';
import { OperationDialogComponent } from '../operation-dialog/operation-dialog.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  public clienteForm: FormGroup;
  cliente = new Cliente();
  clienteId: number;

  constructor(
    public formBuilder: FormBuilder,
    public clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clienteId = + params['id'];
    })
    this.findCliente(this.clienteId);
  }
  
 /* createFormCliente(){
    this.clienteForm = this.formBuilder.group({
      nome: [null, [Validators.required]],
      email: [null, [Validators.required]],
      senha: [null, [Validators.required]],
      confirmaSenha: [null, [Validators.required]]
    });
  } */

  findCliente(cliente_id: number) {
    this.clienteService.findClienteById(cliente_id).subscribe(data => {
      if (data != null) {
        this.cliente = data;
        this.onLoadForm(data);
      }
    });
    this.cdRef.detectChanges;
  }

  onLoadForm(cliente: Cliente) {
    this.onSetCliente(cliente);
  }

  onSetCliente(cliente: Cliente) {
    if (cliente != null) {
      this.clienteForm.patchValue({
        nome: cliente.nome,
        email: cliente.email,
        senha: cliente.senha
      });
    }
  }
  
  openDialogAlterar() {
    this.dialog.open(ClientesComponentModalAlterar);
  }

  openDialogDeletar() {
    this.dialog.open(ClientesComponentModalDeletar);
  }

}

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.alterar.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponentModalAlterar {
  public clienteForm: FormGroup;
  clienteId: number;
  cliente = new Cliente();

  constructor(
    public formBuilder: FormBuilder,
    public clienteService: ClienteService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {};

  onAtualizarCliente(clienteId: number) {
    /*const documentoForm: Documento = {
      cpf: this.clienteForm.get('cpf')?.value,
      cliente_id: this.clienteId
    } */
    const cliente: Cliente = {  
      id: this.clienteId,
      nome: this.clienteForm.get['nome'],
      email: this.clienteForm.get['email'],
      senha: this.clienteForm.get['senha'],
      tipoId: this.clienteForm.get['tipoId']
      };
    if (this.clienteForm.valid) {
      this.clienteService.updateCliente(cliente, clienteId)
        .subscribe(result => {
          this.onShowDialog(result, 'Atualizar', '/clientes');
        })
    }
  }

    onShowDialog(result: String, operation: String, destination: String): void {
      const dialogRef = this.dialog.open(OperationDialogComponent, {
        data: {
          operation: operation,
          message: result
        }
      });
      dialogRef.afterClosed().subscribe(closed => {
        this.router.navigate([destination]);
      });
    }
  }
  


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.deletar.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponentModalDeletar {
  clienteId: number;

  constructor(
    public formBuilder: FormBuilder,
    public clienteService: ClienteService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  onDeleteCliente(clienteId: number): void {
    this.clienteService.deleteCliente(clienteId).subscribe(result => {
      this.onShowDialog(result, 'Excluir', '/clientes');
    });
  }
  
  onShowDialog(result: String, operation: String, destination: String): void {
    const dialogRef = this.dialog.open(OperationDialogComponent, {
      data: {
        operation: operation,
        message: result
      }
    });
    dialogRef.afterClosed().subscribe(closed => {
      this.router.navigate([destination]);
    });
  }
}