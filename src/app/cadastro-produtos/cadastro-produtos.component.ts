import { Component, OnInit, NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material';
import { MatDialog } from '@angular/material/dialog';

@NgModule({
exports: [ 
  MatSlideToggleModule
],
})

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.css']
})
export class CadastroProdutosComponent implements OnInit {

  constructor(public dialog: MatDialog) {}


  ngOnInit() {
  }

  openDialogCadastrar() {
    this.dialog.open(ProdutosComponentModalCadastrar);
  }
  openDialogAlterar() {
    this.dialog.open(ProdutosComponentModalAlterar);
  }
}

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.modal.component.html',
  styleUrls: ['./cadastro-produtos.component.css']
})
export class ProdutosComponentModalCadastrar {}

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './alterar.produtos.modal.component.html',
  styleUrls: ['./cadastro-produtos.component.css']
})
export class ProdutosComponentModalAlterar {}