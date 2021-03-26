import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { OperationDialogComponent } from '../operation-dialog/operation-dialog.component';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
 
  public produtoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public produtoService: ProdutoService,
    private dialog: MatDialog,
    public cdRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.createFormCliente();
  }

  createFormCliente(){
    this.produtoForm = this.formBuilder.group({
      descricao: [null, [Validators.required]],
      valor: [null, [Validators.required]],
      marca: [null, [Validators.required]],
      modelo: [null, [Validators.required]],
      conteudoEmbalagem: [null, [Validators.required]],
      garantia: [null, [Validators.required]],
      peso: [null, [Validators.required]],
    });
  }

  onAddProduto() {
    if (this.produtoForm.valid) {
      this.produtoService.postProduto(this.produtoForm.value).pipe()
      .subscribe(dados => {
        this.onConfirmAdd(dados);
      });
    }
    }

  onConfirmAdd(result: String): void {
    const dialogConfirm = this.dialog.open(OperationDialogComponent, {
      data: {
        operation: 'Cadastro',
        message: result
      }
    });
    dialogConfirm.afterClosed().subscribe(closed => { 
      window.location.reload();
    });
  }  

}
