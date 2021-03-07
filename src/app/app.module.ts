import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatDialogModule} from '@angular/material/dialog';
import { HeaderComponent } from './header/header.component';
import { ContentComponent, ContentComponentDialog } from './content/content.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CRUDClientesComponent } from './crud-clientes/crud-clientes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeLogadaComponent, HomeLogadaModalCli  } from './home-logada/home-logada.component';
import { CadastroConcluidoComponent } from './cadastro-concluido/cadastro-concluido.component';
import { AuthGuard } from './../../auth.guard';
import { AuthService } from './../../auth.service';
import { AcessoNegadoComponent } from './acesso-negado/acesso-negado.component';
import { ModalNotCadastroComponent } from './modal-not-cadastro/modal-not-cadastro.component';
import { SingletonRouterService } from '../services/singletonRouter.service';

import { MatCardModule} from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import { PainelInvestirComponent } from './painel-investir/painel-investir.component';
import { InvestirComponent } from './investir/investir.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent, 
    ContentComponentDialog,
    FooterComponent,
    CRUDClientesComponent,
    HomeLogadaComponent,
    HomeLogadaModalCli,
    CadastroConcluidoComponent,
    AcessoNegadoComponent,
    ModalNotCadastroComponent,
    LoginComponent,
    PainelInvestirComponent,
    InvestirComponent
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
  providers: [AuthGuard, AuthService, SingletonRouterService, { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' }}],
  entryComponents: [ModalNotCadastroComponent, ContentComponent, ContentComponentDialog, HomeLogadaComponent, HomeLogadaModalCli],
  bootstrap: [AppComponent, ContentComponentDialog, HomeLogadaComponent, HomeLogadaModalCli],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
