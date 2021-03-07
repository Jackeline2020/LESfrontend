import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-home-logada',
  templateUrl: './home-logada.component.html',
  styleUrls: ['./home-logada.component.css']
})
export class HomeLogadaComponent implements OnInit {
  formCadastro;
  getCadastro;
  valoresForm: Object;
  conversao;
  nomeCompleto; email; 
  /*cpf; celular; tipoLogradouro; cep;
  logradouro; bairro; numero; cidade; estado;
  modalidade;*/
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(HomeLogadaModalCli);
  }

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
    /*this.cpf = this.getCadastro['cpf'];
    this.celular = this.getCadastro['telefone'];
    this.tipoLogradouro = this.getCadastro['tipoLogradouro'];
    this.cep = this.getCadastro['cep'];
    this.logradouro = this.getCadastro['logradouro'];
    this.bairro = this.getCadastro['bairro'];
    this.numero = this.getCadastro['numero'];
    this.cidade = this.getCadastro['cidade'];
    this.estado = this.getCadastro['estado'];*/
  }

  //cadastro
  cadastro() {
    this.conversao = JSON.stringify(this.valoresForm);
    console.log(this.conversao);
    localStorage.setItem('cadastro', this.conversao);
  }
  
}

@Component({
  selector: 'app-home-logada',
  templateUrl: './home-logada.modal.alterar.cliente.html',
  styleUrls: ['./home-logada.component.css']
})

export class HomeLogadaModalCli {
  getCadastro;
  nomeCompleto; email; cpf; 
  constructor(public dialog: MatDialog) { }

ngOnInit() {
    this.getCadastro = JSON.parse(localStorage.getItem('cadastro'));
    this.nomeCompleto = this.getCadastro['nome'];
    this.email = this.getCadastro['email'];
    this.cpf = this.getCadastro['cpf'];
  }

}