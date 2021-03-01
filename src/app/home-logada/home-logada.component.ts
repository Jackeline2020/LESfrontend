import { Component, OnInit } from '@angular/core';
import { ModalidadesService } from '../modalidades.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-home-logada',
  templateUrl: './home-logada.component.html',
  styleUrls: ['./home-logada.component.css']
})
export class HomeLogadaComponent implements OnInit {
  getCadastro;
  nomeCompleto; cpf; celular; email; senha; tipoLogradouro; cep;
  logradouro; bairro; numero; cidade; estado;
  modalidade;
  constructor(
    private modalidadeService: ModalidadesService,
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.getCadastro = JSON.parse(localStorage.getItem('cadastro'));
    this.nomeCompleto = this.getCadastro['nome'];
    this.cpf = this.getCadastro['cpf'];
    this.celular = this.getCadastro['telefone'];
    this.email = this.getCadastro['email'];
    this.senha = this.getCadastro['senha'];
    this.tipoLogradouro = this.getCadastro['tipoLogradouro'];
    this.cep = this.getCadastro['cep'];
    this.logradouro = this.getCadastro['logradouro'];
    this.bairro = this.getCadastro['bairro'];
    this.numero = this.getCadastro['numero'];
    this.cidade = this.getCadastro['cidade'];
    this.estado = this.getCadastro['estado'];
  }

  investment(id) {
    this.userService.setProduct(id);
    this.router.navigate(['painel-investir']);
  }

}
