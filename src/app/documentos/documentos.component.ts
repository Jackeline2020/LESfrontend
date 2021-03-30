import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialogCadastrar() {
    this.dialog.open(DocumentosCadastrarComponent);
  }

  openDialogAlterar() {
    this.dialog.open(DocumentosAlterarComponent);
  }

  openDialogDeletar() {
    this.dialog.open(DocumentosDeletarComponent);
  }
}

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.cadastrar.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosCadastrarComponent {}

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.alterar.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosAlterarComponent {}

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.deletar.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosDeletarComponent {}