package com.todolist.ToDoList.controllers.Models;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record UsuarioDTO(@NotBlank String nome, @NotNull String email,@NotNull String senha) {

}
