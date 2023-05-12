import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TarefaService } from '../servicos/tarefas/tarefa.service';
import { Tarefas, Usuario } from '../modelos/Usuario';
import { UsuarioService } from '../servicos/usuarios/usuario.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-lista-de-tarefas',
  templateUrl: './lista-de-tarefas.component.html',
  styleUrls: ['./lista-de-tarefas.component.css']
})
export class ListaDeTarefasComponent implements OnInit {
  
  usuario = new Usuario();

  
  ngOnInit(): void {
    this.servico.listaUsuario().pipe(
      tap(data => console.log(data))
      )
      .subscribe( 
        data => {
          this.usuario = data;
          console.log(this.usuario)
        }
        );
      }

  constructor(
    private servico: UsuarioService,
    private servicoTarefa: TarefaService,
  ) {}
      
  deletarTarefa(idTarefa: number) {
    this.servicoTarefa.deletarTarefa(this.usuario.id, idTarefa)
    .subscribe(data => {
      console.log(data)
      alert("Tarefa foi removida !")
      location.reload();
    })
  }

  concluirTarefa(tarefaId: number) {
    this.servicoTarefa.concluirTarefa(tarefaId)
    .subscribe(data => {
      console.log(data)
      alert("Tarefa foi concluida !")
      location.reload();
    })
  }

  ordenarTarefasPorPrioridade(): Tarefas[] {
    return this.usuario.listaTarefa.sort((a, b) => a.prioridade - b.prioridade);
  }
}
