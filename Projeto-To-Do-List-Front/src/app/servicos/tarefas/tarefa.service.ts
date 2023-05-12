import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Tarefas } from 'src/app/modelos/Usuario';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private url: string = 'http://localhost:8080/tarefa';

  constructor(
    private http: HttpClient,
  ) { }

  criarTarefa(usuarioId: number , tarefa: Tarefas) {
    return this.http.post<Tarefas>((`${this.url}/${usuarioId}`), tarefa )
  }

  deletarTarefa(usuarioId: number, tarefaId: number) {
    return this.http.delete(`${this.url}/${usuarioId}/${tarefaId}`)
  }

  concluirTarefa(tarefaId: number) {
    return this.http.put(`${this.url}/concluir/${tarefaId}`, null)
  }

  tarefaPorId(tarefaId: number) {
    return this.http.get<Tarefas>(`${this.url}/tarefaId/${tarefaId}`)
  }

  alterarTarefa(tarefaId: number , tarefa: Tarefas) {
    return this.http.put(`${this.url}/${tarefaId}`, tarefa)
  }

}
