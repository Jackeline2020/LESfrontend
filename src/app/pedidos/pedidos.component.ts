import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialogCancelar() {
    this.dialog.open(PedidosCancelarComponent);
  }

  openDialogTrocar() {
    this.dialog.open(PedidosTrocarComponent);
  }
}


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.cancelar.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosCancelarComponent {}

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.trocar.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosTrocarComponent {}