import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin;
  theEvent;
  key;
  regex;
  keys;
  message;
  getCadastro;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.formLogin = this.fb.group({
      email: [''],
      senha: ['']
    });
  }
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
    /*const senhaPersistido = this.getCadastro['senha'];
    const senhaDigitado = this.formLogin.get('senha').value;
    const emailPersistido = this.getCadastro['email'];
    const emailDigitado = this.formLogin.get('email').value;
    if (senhaPersistido === senhaDigitado && emailPersistido === emailDigitado) {*/
      this.router.navigate(['clientes']);
  }
  
}

