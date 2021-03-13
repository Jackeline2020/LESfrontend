import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-enderecos',
  templateUrl: './enderecos.component.html',
  styleUrls: ['./enderecos.component.css']
})
export class EnderecosComponent implements OnInit {
  getCadastro;
  tipoLogradouro; cep; logradouro; numero; bairro; 
  complemento; tipoEndereco; cidade; estado;
  constructor(public dialog: MatDialog) {}

  openDialogCadastrar() {
    this.dialog.open(EnderecosComponentModalCadastrar);
  }

  openDialogAlterar() {
    this.dialog.open(EnderecosComponentModalAlterar);
  }

  openDialogDeletar() {
    this.dialog.open(EnderecosComponentModalDeletar);
  }

  ngOnInit() {
    this.getCadastro = JSON.parse(localStorage.getItem('cadastro'));
    this.tipoLogradouro = this.getCadastro['tipoLogradouro'];
    this.cep = this.getCadastro['cep'];
    this.logradouro = this.getCadastro['logradouro'];
    this.numero = this.getCadastro['numero'];
    this.bairro = this.getCadastro['bairro'];
    this.complemento = this.getCadastro['complemento'];
    this.tipoEndereco = this.getCadastro['tipoEndereco'];
    this.cidade = this.getCadastro['cidade'];
    this.estado = this.getCadastro['estado'];
  }
}

@Component({
  selector: 'app-enderecos',
  templateUrl: './enderecos.component.cadastrar.html',
  styleUrls: ['./enderecos.component.css']
})
export class EnderecosComponentModalCadastrar {
  formCadastro;
  getCadastro;
  valoresForm: Object;
  conversao;
  tipoLogradouro; cep; logradouro; numero; bairro; 
  complemento; tipoEndereco; cidade; estado;
  constructor(
    private fb: FormBuilder) { }

  ngOnInit() {
    this.formCadastro = this.fb.group({
      tipoLogradouro: [''],
      cep: [''],
      logradouro: [''],
      numero: [''],
      bairro: [''],
      complemento: [''],
      tipoEndereco: [''],
      cidade: [''],
      estado: ['']
    });

    this.formCadastro.valueChanges.pipe(
      debounceTime(1000))
      .subscribe(res => {
        console.log(res);
        this.valoresForm = res;
    });

    this.getCadastro = JSON.parse(localStorage.getItem('cadastro'));
    this.tipoLogradouro = this.getCadastro['tipoLogradouro'];
    this.cep = this.getCadastro['cep'];
    this.logradouro = this.getCadastro['logradouro'];
    this.numero = this.getCadastro['numero'];
    this.bairro = this.getCadastro['bairro'];
    this.complemento = this.getCadastro['complemento'];
    this.tipoEndereco = this.getCadastro['tipoEndereco'];
    this.cidade = this.getCadastro['cidade'];
    this.estado = this.getCadastro['estado'];
  }

  cadastro() {
    this.conversao = JSON.stringify(this.valoresForm);
    console.log(this.conversao);
    localStorage.setItem('cadastro', this.conversao);
  }
}

@Component({
  selector: 'app-enderecos',
  templateUrl: './enderecos.component.alterar.html',
  styleUrls: ['./enderecos.component.css']
})
export class EnderecosComponentModalAlterar {
  formCadastro;
  getCadastro;
  valoresForm: Object;
  conversao;
  tipoLogradouro; cep; logradouro; numero; bairro; 
  complemento; tipoEndereco; cidade; estado;
  constructor(
    private fb: FormBuilder) { }

  ngOnInit() {
    this.formCadastro = this.fb.group({
      tipoLogradouro: [''],
      cep: [''],
      logradouro: [''],
      numero: [''],
      bairro: [''],
      complemento: [''],
      tipoEndereco: [''],
      cidade: [''],
      estado: ['']
    });

    this.formCadastro.valueChanges.pipe(
      debounceTime(1000))
      .subscribe(res => {
        console.log(res);
        this.valoresForm = res;
    });

    this.getCadastro = JSON.parse(localStorage.getItem('cadastro'));
    this.tipoLogradouro = this.getCadastro['tipoLogradouro'];
    this.cep = this.getCadastro['cep'];
    this.logradouro = this.getCadastro['logradouro'];
    this.numero = this.getCadastro['numero'];
    this.bairro = this.getCadastro['bairro'];
    this.complemento = this.getCadastro['complemento'];
    this.tipoEndereco = this.getCadastro['tipoEndereco'];
    this.cidade = this.getCadastro['cidade'];
    this.estado = this.getCadastro['estado'];
  }

  cadastro() {
    this.conversao = JSON.stringify(this.valoresForm);
    console.log(this.conversao);
    localStorage.setItem('cadastro', this.conversao);
  }
}

@Component({
  selector: 'app-enderecos',
  templateUrl: './enderecos.component.deletar.html',
  styleUrls: ['./enderecos.component.css']
})
export class EnderecosComponentModalDeletar {}