package com.todolist.ToDoList.controllers.Models;

import com.todolist.ToDoList.entity.type.Prioridade;

public record TarefaDTO(String titulo, String descricao, Prioridade prioridade) {

}
