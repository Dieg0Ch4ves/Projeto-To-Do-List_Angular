import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormBuilder, FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { CadastroUsuarioComponent } from './cadastro-usuario.component';
import { CadastroUsuarioRoutingModule } from './cadastro-usuario.routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CadastroUsuarioComponent,
  ],
  imports: [
    CommonModule,
    CadastroUsuarioRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class CadastroUsuarioModule { }