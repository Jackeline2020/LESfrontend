import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule} from '@angular/material/card';
import { MatDialogModule} from '@angular/material/dialog';
import { NgxMaskModule, IConfig } from 'ngx-mask';

import { SingletonRouterService } from '../services/singletonRouter.service';

import { AuthGuard } from './../../auth.guard';
import { AuthService } from './../../auth.service';

import { ModalCadastroConcluidoComponent } from './modal-cadastro-concluido/modal-concluido.component';
import { ModalNotCadastroComponent } from './modal-not-cadastro/modal-not-cadastro.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/routing.module';

import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent, ContentComponentDialog } from './content/content.component';
import { ClientesComponent, ClientesComponentModalDeletar, ClientesComponentModalAlterar  } from './clientes/clientes.component';
import { TelefonesComponent, TelefonesComponentModalAlterar, TelefonesComponentModalCadastrar, TelefonesComponentModalDeletar } from './telefones/telefones.component';
import { EnderecosComponent, EnderecosComponentModalCadastrar, EnderecosComponentModalDeletar, EnderecosComponentModalAlterar } from './enderecos/enderecos.component';

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

    ModalCadastroConcluidoComponent,
    ModalNotCadastroComponent,
    LoginComponent,

    TelefonesComponent,
    TelefonesComponentModalAlterar,
    TelefonesComponentModalCadastrar,
    TelefonesComponentModalDeletar,

    EnderecosComponent,
    EnderecosComponentModalCadastrar,
    EnderecosComponentModalDeletar,
    EnderecosComponentModalAlterar,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    AuthGuard, 
    AuthService, 
    SingletonRouterService, { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }
  ],
  entryComponents: [
    ModalNotCadastroComponent, 
    ModalCadastroConcluidoComponent, 
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
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
