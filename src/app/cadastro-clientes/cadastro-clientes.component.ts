import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ModalNotCadastroComponent } from '../modal-not-cadastro/modal-not-cadastro.component';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {
  formLogin;
  theEvent;
  key;
  regex;
  keys;
  message;

  formCadastro;
  getCadastro;
  valoresForm: Object;
  conversao;
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit() {
    // this.formCadastro
    //localStorage.clear();
    this.formCadastro = this.fb.group({
      nome: [''],
      cpf: [''],
      telefone: [''],
      email: [''],
      senha: [''],
      tipoLogradouro: [''],
      cep: [''],
      logradouro: [''],
      bairro: [''],
      numero: [''],
      cidade: [''],
      estado: [''],
      termos: ['']
    });
  
    this.formCadastro.valueChanges.pipe(
      debounceTime(1000))
      .subscribe(res => {
        console.log(res);
        this.valoresForm = res;
      });

      //login
    this.formLogin = this.fb.group({
      email: [''],
      senha: ['']
    });
  }
//login
  onlynumber(evt) {
    this.theEvent = evt || window.event;
    this.key = this.theEvent.keyCode || this.theEvent.which;
    this.key = String.fromCharCode(this.key);
    this.regex = /^[0-9.]+$/;
    if (!this.regex.test(this.key)) {
      this.theEvent.returnValue = false;
      if (this.theEvent.preventDefault) {
        this.theEvent.preventDefault();
      }
    }
  }

  login() {
    this.getCadastro = JSON.parse(localStorage.getItem('cadastro'));
    const senhaPersistido = this.getCadastro['senha'];
    const senhaDigitado = this.formLogin.get('senha').value;
    const emailPersistido = this.getCadastro['email'];
    const emailDigitado = this.formLogin.get('email').value;
    if (senhaPersistido === senhaDigitado && emailPersistido === emailDigitado) {
      this.router.navigate(['home-logada']);
    } else {
      this.openDialog();
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalNotCadastroComponent, {
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  //cadastro
  cadastro() {
    this.conversao = JSON.stringify(this.valoresForm);
    console.log(this.conversao);
    localStorage.setItem('cadastro', this.conversao);

    // verificar modal aqui
    this.verificaCadastro();
  }

  verificaCadastro() {
    setTimeout(() => {
      if (localStorage.getItem('cadastro')) {
        // TODO REDIRECIIONAR PARA PAGINA DE CADASTRO CONCLUIDO
        this.router.navigate(['cadastro-concluido']);
      } else {
        return false;
      }
    }, 200);
  }

}
