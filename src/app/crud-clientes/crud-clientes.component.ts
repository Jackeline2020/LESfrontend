import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-clientes',
  templateUrl: './crud-clientes.component.html',
  styleUrls: ['./crud-clientes.component.css']
})
export class CRUDClientesComponent implements OnInit {
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
      email: [''],
      senha: [''],
      termos: ['']
    });
  
    this.formCadastro.valueChanges.pipe(
      debounceTime(1000))
      .subscribe(res => {
        console.log(res);
        this.valoresForm = res;
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
