import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from '../content/content.component';
import { CadastroClientesComponent } from '../cadastro-clientes/cadastro-clientes.component';
import { ClientesComponent } from '../clientes/clientes.component';
import { AuthGuard } from 'auth.guard';
import { LoginComponent } from '../login/login.component';
import { TelefonesComponent } from '../telefones/telefones.component';
import { EnderecosComponent } from '../enderecos/enderecos.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'cadastro-clientes', component: CadastroClientesComponent },
  { path: 'clientes', component: ClientesComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent},
  { path: 'telefones', component: TelefonesComponent},
  { path: 'enderecos', component: EnderecosComponent},
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
