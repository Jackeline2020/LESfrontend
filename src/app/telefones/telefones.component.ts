import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-telefones',
  templateUrl: './telefones.component.html',
  styleUrls: ['./telefones.component.css']
})
export class TelefonesComponent implements OnInit {
  getCadastro;
  ddd; telefone;
  constructor(public dialog: MatDialog) {}

  openDialogCadastrar() {
    this.dialog.open(TelefonesComponentModalCadastrar);
  }

  openDialogAlterar() {
    this.dialog.open(TelefonesComponentModalAlterar);
  }

  openDialogDeletar() {
    this.dialog.open(TelefonesComponentModalDeletar);
  }

  ngOnInit() {
    this.getCadastro = JSON.parse(localStorage.getItem('cadastro'));
    this.ddd = this.getCadastro['ddd'];
    this.telefone = this.getCadastro['telefone'];
  }

}

@Component({
  selector: 'app-telefones',
  templateUrl: './telefones.component.cadastrar.html',
  styleUrls: ['./telefones.component.css']
})
export class TelefonesComponentModalCadastrar {
  formCadastro;
  getCadastro;
  valoresForm: Object;
  conversao;
  ddd; telefone;
  constructor(
    private fb: FormBuilder) { }

  ngOnInit() {
    this.formCadastro = this.fb.group({
      ddd: [''],
      telefone: ['']
    });

    this.formCadastro.valueChanges.pipe(
      debounceTime(1000))
      .subscribe(res => {
        console.log(res);
        this.valoresForm = res;
    });

    this.getCadastro = JSON.parse(localStorage.getItem('cadastro'));
    this.ddd = this.getCadastro['ddd'];
    this.telefone = this.getCadastro['telefone'];
  }

  cadastro() {
    this.conversao = JSON.stringify(this.valoresForm);
    console.log(this.conversao);
    localStorage.setItem('cadastro', this.conversao);
  }
}

@Component({
  selector: 'app-telefones',
  templateUrl: './telefones.component.alterar.html',
  styleUrls: ['./telefones.component.css']
})
export class TelefonesComponentModalAlterar {

}

@Component({
  selector: 'app-telefones',
  templateUrl: './telefones.component.deletar.html',
  styleUrls: ['./telefones.component.css']
})
export class TelefonesComponentModalDeletar {

}