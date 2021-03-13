import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  getCadastro;
  nomeCompleto; email; cpf;
  constructor(public dialog: MatDialog) { }

  openDialogAlterar() {
    this.dialog.open(ClientesComponentModalAlterar);
  }

  openDialogDeletar() {
    this.dialog.open(ClientesComponentModalDeletar);
  }

  ngOnInit() {
    this.getCadastro = JSON.parse(localStorage.getItem('cadastro'));
    this.nomeCompleto = this.getCadastro['nome'];
    this.email = this.getCadastro['email'];
    this.cpf = this.getCadastro['cpf'];
  }
  
}

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.alterar.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponentModalAlterar {
  formCadastro;
  getCadastro;
  valoresForm: Object;
  conversao;
  id; nomeCompleto; email; cpf;
  constructor(
    private fb: FormBuilder) { }

  ngOnInit() {
    this.formCadastro = this.fb.group({
      nome: [''],
      email: [''],
      cpf: ['']
    });

    this.formCadastro.valueChanges.pipe(
      debounceTime(1000))
      .subscribe(res => {
        console.log(res);
        this.valoresForm = res;
    });

    this.getCadastro = JSON.parse(localStorage.getItem('cadastro'));
    this.nomeCompleto = this.getCadastro['nome'];
    this.email = this.getCadastro['email'];
    this.cpf = this.getCadastro['cpf'];
  }

  cadastro() {
    this.conversao = JSON.stringify(this.valoresForm);
    console.log(this.conversao);
    localStorage.setItem('cadastro', this.conversao);
  }
  
}

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.deletar.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponentModalDeletar {}