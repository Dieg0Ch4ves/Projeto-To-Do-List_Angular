package com.todolist.ToDoList.entity.type;

public enum Prioridade {

	ALTA, MÉDIA, BAIXA;

	public static Prioridade paraString(String texto) {
		switch (texto.toLowerCase()){
		case "alta": 
			return Prioridade.ALTA;
		case "media":
			return Prioridade.MÉDIA;
		case "baixa":
			return Prioridade.BAIXA;
			
		default:
			throw new IllegalArgumentException("Unexpected value: " + texto.toLowerCase());
		}
	}
}
