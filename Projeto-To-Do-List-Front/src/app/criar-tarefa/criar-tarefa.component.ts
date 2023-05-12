import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../servicos/usuarios/usuario.service';
import { Tarefas, Usuario } from '../modelos/Usuario';
import { tap } from 'rxjs';
import { TarefaService } from '../servicos/tarefas/tarefa.service';

@Component({
  selector: 'app-criar-tarefa',
  templateUrl: './criar-tarefa.component.html',
  styleUrls: ['./criar-tarefa.component.css']
})
export class CriarTarefaComponent implements OnInit {

  usuario = new Usuario();
  tarefa = new Tarefas();

  constructor(
    private router: Router,
    private servico: UsuarioService,
    private servicoTarefa: TarefaService
  ) {
  }

  ngOnInit(): void {
    this.servico.listaUsuario().pipe(
      tap(data => console.log(data))
    )
    .subscribe(
      data => {
        this.usuario = data;
      }
    );
  }

  criarTarefa() {
    this.servicoTarefa.criarTarefa(this.usuario.id, this.tarefa)
    .subscribe(() => {
      console.log(this.tarefa)
      alert("Tarefa Criada Com Sucesso !")
      this.router.navigate(['/tarefas'])
      this.tarefa = {
        id: 0,
        titulo: '',
        descricao: '',
        dataCriacao: '',
        dataConclusao: '',
        prioridade: 0,
        concluida: false
      }
    } )
  }
}
