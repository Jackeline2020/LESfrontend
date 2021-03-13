import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ModalNotCadastroComponent } from '../modal-not-cadastro/modal-not-cadastro.component';
import { ModalCadastroConcluidoComponent } from '../modal-cadastro-concluido/modal-concluido.component';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {
  formCadastro;
  getCadastro;
  valoresForm: Object;
  conversao;
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit() {
    this.formCadastro = this.fb.group({
      nome: [''],
      email: [''],
      senha: [''],
      confirmaSenha: ['']
    });
  
    this.formCadastro.valueChanges.pipe(
      debounceTime(1000))
      .subscribe(res => {
        console.log(res);
        this.valoresForm = res;
      });
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

  cadastro() {
    this.conversao = JSON.stringify(this.valoresForm);
    console.log(this.conversao);
    const senha = this.formCadastro.get('senha').value;
    const confirmaSenha = this.formCadastro.get('confirmaSenha').value;
    if (senha !== confirmaSenha) {
      this.openDialog();
    }else{
        localStorage.setItem('cadastro', this.conversao);
        if (localStorage.getItem('cadastro')) {
          // TODO REDIRECIIONAR PARA PAGINA DE CADASTRO CONCLUIDO
          this.openDialogSuccess();
          this.router.navigate(['login']);
        }
      }
    }
}
