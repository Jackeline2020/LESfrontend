import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { OperationDialogComponent } from '../operation-dialog/operation-dialog.component';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {
  
  public clienteForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public clienteService: ClienteService,
    private dialog: MatDialog,
    public cdRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.createFormCliente();
  }

  createFormCliente(){
    this.clienteForm = this.formBuilder.group({
      nome: [null, [Validators.required]],
      email: [null, [Validators.required]],
      senha: [null, [Validators.required]],
      tipoId: [null, [Validators.required]],
    });
  }

  onAddCliente() {
    if (this.clienteForm.valid) {
      this.clienteService.postCliente(this.clienteForm.value).pipe()
      .subscribe(dados => {
        this.onConfirmAdd(dados);
      });
    }
    }

  onConfirmAdd(result: String): void {
    const dialogConfirm = this.dialog.open(OperationDialogComponent, {
      data: {
        operation: 'Cadastro',
        message: result
      }
    });
    dialogConfirm.afterClosed().subscribe(closed => { 
      window.location.reload();
    });
  }  
}

/* const senha = this.clienteForm.get('senha').value;
    const confirmaSenha = this.clienteForm.get('confirmaSenha').value;
    if (senha !== confirmaSenha) {
      this.openDialog();
    }else{
        localStorage.setItem('cadastro', this.conversao);
        if (localStorage.getItem('cadastro')) {
          this.openDialogSuccess();
          this.router.navigate(['login']);
        }
      }


      openDialog() {
    const dialogRef = this.dialog.open(ModalNotCadastroComponent, {
      height: '120px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogSuccess() {
    const dialogRef = this.dialog.open(ModalCadastroConcluidoComponent, {
      height: '120px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
*/