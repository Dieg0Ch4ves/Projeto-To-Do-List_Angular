import { Component, OnInit } from '@angular/core';
import { Tarefas } from '../modelos/Usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { TarefaService } from '../servicos/tarefas/tarefa.service';

@Component({
  selector: 'app-alterar-tarefa',
  templateUrl: './alterar-tarefa.component.html',
  styleUrls: ['./alterar-tarefa.component.css']
})
export class AlterarTarefaComponent implements OnInit {

  tarefa = new Tarefas();

  constructor(
    private route: ActivatedRoute,
    private tarefaService: TarefaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const tarefaId = this.route.snapshot.params['id'];
    this.tarefaService.tarefaPorId(tarefaId).subscribe((tarefa) => {
      this.tarefa = tarefa;
    });
  }

  salvarTarefa(): void {
    // Lógica para salvar a tarefa atualizada usando o serviço TarefaService
    this.tarefaService.alterarTarefa(this.tarefa.id, this.tarefa).subscribe((data) => {
      console.log(data);
      alert('Tarefa atualizada com sucesso!');
      this.router.navigate(['/tarefas'])      
    });
  }
}
