package com.todolist.ToDoList.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.todolist.ToDoList.entity.Tarefa;

public interface TarefaRepository extends JpaRepository<Tarefa, Long>{

}
