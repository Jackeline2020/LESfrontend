import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from '../content/content.component';
import { CadastroClientesComponent } from '../cadastro-clientes/cadastro-clientes.component';
import { ClientesComponent } from '../clientes/clientes.component';
import { LoginComponent } from '../login/login.component';
import { TelefonesComponent } from '../telefones/telefones.component';
import { EnderecosComponent } from '../enderecos/enderecos.component';
import { CartoesComponent } from '../cartoes/cartoes.component';
import { PedidosComponent } from '../pedidos/pedidos.component';
import { ProdutosComponent } from '../produtos/produtos.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'cadastro-clientes', component: CadastroClientesComponent },
  { path: 'clientes', component: ClientesComponent},
  { path: 'login', component: LoginComponent},
  { path: 'telefones', component: TelefonesComponent},
  { path: 'enderecos', component: EnderecosComponent},
  { path: 'cartoes', component: CartoesComponent},
  { path: 'pedidos', component: PedidosComponent},
  { path: 'produtos', component: ProdutosComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
