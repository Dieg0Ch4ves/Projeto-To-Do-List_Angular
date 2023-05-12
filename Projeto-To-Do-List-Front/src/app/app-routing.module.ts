import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { LogarComponent } from './logar/logar.component';
import { ListaDeTarefasComponent } from './lista-de-tarefas/lista-de-tarefas.component';
import { CriarTarefaComponent } from './criar-tarefa/criar-tarefa.component';
import { AlterarTarefaComponent } from './alterar-tarefa/alterar-tarefa.component';

const routes: Routes = [
    {path: 'login', component: LogarComponent},
    {path: 'tarefas', loadChildren: () => import('./lista-de-tarefas/lista-de-tarefa.module').then(m => m.ListaDeTarefaModule) },
    {path: 'criarTarefa', component: CriarTarefaComponent},
    {path: 'cadastro', loadChildren: () => import('./cadastro-usuario/cadastro-usuario.module').then(m => m.CadastroUsuarioModule)},
    {path: '' , redirectTo: 'cadastro', pathMatch: "full"}, 
]

@NgModule ({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}