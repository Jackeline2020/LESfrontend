import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from '../content/content.component';
import { CadastroClientesComponent } from '../cadastro-clientes/cadastro-clientes.component';
import { ClientesComponent } from '../clientes/clientes.component';
import { LoginComponent, LoginAdminComponent } from '../login/login.component';
import { TelefonesComponent } from '../telefones/telefones.component';
import { EnderecosComponent } from '../enderecos/enderecos.component';
import { CartoesComponent } from '../cartoes/cartoes.component';
import { PedidosComponent } from '../pedidos/pedidos.component';
import { ProdutosComponent } from '../produtos/produtos.component';
import { CadastroProdutosComponent } from '../cadastro-produtos/cadastro-produtos.component';
import { CuponsComponent } from '../cupons/cupons.component';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { DocumentosComponent } from '../documentos/documentos.component';
import { EstoqueComponent } from '../estoque/estoque.component';
import { RankingComponent } from '../ranking/ranking.component';
import { SolicitacoesComponent } from '../solicitacoes/solicitacoes.component';
import { CarrinhoComponent } from '../carrinho/carrinho.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'cadastro-clientes', component: CadastroClientesComponent },
  { path: 'clientes', component: ClientesComponent},
  { path: 'login', component: LoginComponent},
  { path: 'loginAdmin', component: LoginAdminComponent},
  { path: 'telefones', component: TelefonesComponent},
  { path: 'enderecos', component: EnderecosComponent},
  { path: 'cartoes', component: CartoesComponent},
  { path: 'pedidos', component: PedidosComponent},
  { path: 'produtos', component: ProdutosComponent},
  { path: 'cadProdutos', component: CadastroProdutosComponent},
  { path: 'cupons', component: CuponsComponent},
  { path: 'usuarios', component: UsuariosComponent},
  { path: 'documentos', component: DocumentosComponent},
  { path: 'estoque', component: EstoqueComponent},
  { path: 'ranking', component: RankingComponent},
  { path: 'solicitacoes', component: SolicitacoesComponent},
  { path: 'carrinho', component: CarrinhoComponent},

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
