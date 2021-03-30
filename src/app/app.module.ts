import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule} from '@angular/material/card';
import { MatDialogModule} from '@angular/material/dialog';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/routing.module';

import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { LoginComponent, LoginAdminComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent, ContentComponentDialog } from './content/content.component';
import { ClientesComponent, ClientesComponentModalDeletar, ClientesComponentModalAlterar  } from './clientes/clientes.component';
import { TelefonesComponent, TelefonesComponentModalAlterar, TelefonesComponentModalCadastrar, TelefonesComponentModalDeletar } from './telefones/telefones.component';
import { EnderecosComponent, EnderecosComponentModalCadastrar, EnderecosComponentModalDeletar, EnderecosComponentModalAlterar } from './enderecos/enderecos.component';
import { CartoesComponent, CartoesComponentModalAlterar, CartoesComponentModalCadastrar, CartoesComponentModalDeletar } from './cartoes/cartoes.component';
import { PedidosComponent, PedidosCancelarComponent, PedidosTrocarComponent } from './pedidos/pedidos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { OperationDialogComponent } from './operation-dialog/operation-dialog.component';
import { CuponsComponent } from './cupons/cupons.component';
import { CadastroProdutosComponent, ProdutosComponentModalCadastrar, ProdutosComponentModalAlterar } from './cadastro-produtos/cadastro-produtos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { DocumentosComponent, DocumentosCadastrarComponent, DocumentosAlterarComponent, DocumentosDeletarComponent } from './documentos/documentos.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { RankingComponent } from './ranking/ranking.component';
import { SolicitacoesComponent } from './solicitacoes/solicitacoes.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent, 
    ContentComponentDialog,
    FooterComponent,

    CadastroClientesComponent,
    ClientesComponent,
    ClientesComponentModalDeletar,
    ClientesComponentModalAlterar,

    LoginComponent,
    LoginAdminComponent,

    TelefonesComponent,
    TelefonesComponentModalAlterar,
    TelefonesComponentModalCadastrar,
    TelefonesComponentModalDeletar,

    EnderecosComponent,
    EnderecosComponentModalCadastrar,
    EnderecosComponentModalDeletar,
    EnderecosComponentModalAlterar,

    CartoesComponent,
    CartoesComponentModalAlterar,
    CartoesComponentModalCadastrar,
    CartoesComponentModalDeletar,

    PedidosComponent,
    PedidosCancelarComponent,
    PedidosTrocarComponent,

    ProdutosComponent,
    CadastroProdutosComponent,
    ProdutosComponentModalCadastrar,
    ProdutosComponentModalAlterar,
    
    OperationDialogComponent,
    CuponsComponent,
    UsuariosComponent,

    DocumentosComponent,
    DocumentosCadastrarComponent,
    DocumentosAlterarComponent,
    DocumentosDeletarComponent,

    EstoqueComponent,
    RankingComponent,
    SolicitacoesComponent,
    CarrinhoComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    NgxMaskModule.forRoot(),
    MatSlideToggleModule
  ],
  providers: [],
  entryComponents: [
    ContentComponent, 
    ContentComponentDialog, 
    ClientesComponent, 
    ClientesComponentModalDeletar, 
    ClientesComponentModalAlterar,
    TelefonesComponentModalAlterar, 
    TelefonesComponentModalCadastrar, 
    TelefonesComponentModalDeletar, 
    EnderecosComponentModalDeletar,
    EnderecosComponentModalCadastrar,
    EnderecosComponentModalAlterar,
    CartoesComponentModalAlterar,
    CartoesComponentModalCadastrar,
    CartoesComponentModalDeletar,
    OperationDialogComponent,
    PedidosCancelarComponent,
    PedidosTrocarComponent,
    ProdutosComponentModalCadastrar,
    ProdutosComponentModalAlterar,
    DocumentosCadastrarComponent,
    DocumentosAlterarComponent,
    DocumentosDeletarComponent,
  ],
  bootstrap: [
    AppComponent, 
    ContentComponentDialog, 
    ClientesComponent,
    ClientesComponentModalDeletar,
    ClientesComponentModalAlterar, 
    TelefonesComponentModalAlterar, 
    TelefonesComponentModalCadastrar, 
    TelefonesComponentModalDeletar, 
    EnderecosComponentModalCadastrar, 
    EnderecosComponentModalDeletar,
    EnderecosComponentModalAlterar,
    CartoesComponentModalAlterar,
    CartoesComponentModalCadastrar,
    CartoesComponentModalDeletar,
    OperationDialogComponent,
    PedidosCancelarComponent,
    PedidosTrocarComponent,
    ProdutosComponentModalCadastrar,
    ProdutosComponentModalAlterar,
    DocumentosCadastrarComponent,
    DocumentosAlterarComponent,
    DocumentosDeletarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
