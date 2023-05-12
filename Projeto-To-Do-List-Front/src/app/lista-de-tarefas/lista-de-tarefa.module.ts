import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaDeTarefaRoutingModule } from './lista-de-tarefa.routing.module';
import { ListaDeTarefasComponent } from './lista-de-tarefas.component';
import { AlterarTarefaComponent } from '../alterar-tarefa/alterar-tarefa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ListaDeTarefasComponent,
    AlterarTarefaComponent
  ],
  imports: [
    CommonModule,
    ListaDeTarefaRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[
    ListaDeTarefasComponent
  ]
})
export class ListaDeTarefaModule { }