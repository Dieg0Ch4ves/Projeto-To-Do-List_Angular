import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { MenuComponent } from './menu/menu.component';
import { LogarComponent } from './logar/logar.component';
import { ListaDeTarefasComponent } from './lista-de-tarefas/lista-de-tarefas.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CriarTarefaComponent } from './criar-tarefa/criar-tarefa.component';
import { AlterarTarefaComponent } from './alterar-tarefa/alterar-tarefa.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { CadastroUsuarioModule } from './cadastro-usuario/cadastro-usuario.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LogarComponent,
    RodapeComponent,
    CriarTarefaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
