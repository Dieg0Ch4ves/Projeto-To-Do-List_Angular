import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaDeTarefasComponent } from './lista-de-tarefas.component';
import { AlterarTarefaComponent } from '../alterar-tarefa/alterar-tarefa.component';

const routes: Routes = [
  { path: '', component: ListaDeTarefasComponent },
  { path: ':id', component: AlterarTarefaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaDeTarefaRoutingModule { }