package com.todolist.ToDoList.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.todolist.ToDoList.entity.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long>{
	
	public Usuario findByEmailAndSenha(String email, String senha);
	public Usuario findByEmail(String email);
	
}
