import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-cartoes',
  templateUrl: './cartoes.component.html',
  styleUrls: ['./cartoes.component.css']
})
export class CartoesComponent implements OnInit {
  getCadastro;
  numero; validade; nome; bandeira; codigo; 
  constructor(public dialog: MatDialog) { }

  openDialogCadastrar() {
    this.dialog.open(CartoesComponentModalCadastrar);
  }

  openDialogAlterar() {
    this.dialog.open(CartoesComponentModalAlterar);
  }

  openDialogDeletar() {
    this.dialog.open(CartoesComponentModalDeletar);
  }

  ngOnInit() {
    this.getCadastro = JSON.parse(localStorage.getItem('cadastro'));
    this.numero = this.getCadastro['numero'];
    this.validade = this.getCadastro['validade'];
    this.nome = this.getCadastro['nome'];
    this.bandeira = this.getCadastro['bandeira'];
    this.codigo = this.getCadastro['codigo'];
  }

}

@Component({
  selector: 'app-cartoes',
  templateUrl: './cartoes.component.cadastrar.html',
  styleUrls: ['./cartoes.component.css']
})
export class CartoesComponentModalCadastrar{
  formCadastro;
  getCadastro;
  valoresForm: Object;
  conversao;
  numero; validade; nome; bandeira; codigo; 

  constructor(
    private fb: FormBuilder) { }

  ngOnInit() {
    this.formCadastro = this.fb.group({
      numero: [''],
      validade: [''],
      nome: [''],
      bandeira: [''],
      codigo: ['']
    });

  this.formCadastro.valueChanges.pipe(
    debounceTime(1000))
    .subscribe(res => {
      console.log(res);
      this.valoresForm = res;
  });

  this.getCadastro = JSON.parse(localStorage.getItem('cadastro'));
  this.numero = this.getCadastro['numero'];
  this.validade = this.getCadastro['validade'];
  this.nome = this.getCadastro['nome'];
  this.bandeira = this.getCadastro['bandeira'];
  this.codigo = this.getCadastro['codigo'];
}

cadastro() {
  this.conversao = JSON.stringify(this.valoresForm);
  console.log(this.conversao);
  localStorage.setItem('cadastro', this.conversao);
}
}

@Component({
selector: 'app-cartoes',
templateUrl: './cartoes.component.alterar.html',
styleUrls: ['./cartoes.component.css']
})
export class CartoesComponentModalAlterar {
formCadastro;
getCadastro;
valoresForm: Object;
conversao;
numero; validade; nome; bandeira; codigo; 

constructor(
  private fb: FormBuilder) { }

ngOnInit() {
  this.formCadastro = this.fb.group({
    numero: [''],
    validade: [''],
    nome: [''],
    bandeira: [''],
    codigo: ['']
  });

  this.formCadastro.valueChanges.pipe(
    debounceTime(1000))
    .subscribe(res => {
      console.log(res);
      this.valoresForm = res;
  });

  this.getCadastro = JSON.parse(localStorage.getItem('cadastro'));
  this.numero = this.getCadastro['numero'];
  this.validade = this.getCadastro['validade'];
  this.nome = this.getCadastro['nome'];
  this.bandeira = this.getCadastro['bandeira'];
  this.codigo = this.getCadastro['codigo'];
}

cadastro() {
  this.conversao = JSON.stringify(this.valoresForm);
  console.log(this.conversao);
  localStorage.setItem('cadastro', this.conversao);
}
}

@Component({
selector: 'app-cartoes',
templateUrl: './cartoes.component.deletar.html',
styleUrls: ['./cartoes.component.css']
})
export class CartoesComponentModalDeletar {}