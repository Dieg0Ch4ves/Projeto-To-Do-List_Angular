import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicos/usuarios/usuario.service';
import { Usuario } from '../modelos/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logar',
  templateUrl: './logar.component.html',
  styleUrls: ['./logar.component.css']
})
export class LogarComponent {

  usuario = new Usuario();

  constructor(
    private servico: UsuarioService,
    private router: Router,
  ) {}


  logar() {
    this.servico.logarUsuario(this.usuario.email, this.usuario.senha)
    .subscribe((data) => {
      this.router.navigate(['/tarefas'])
    })
  }
  
  mostrarSenha: boolean = false;

  alternarVisibilidadeSenha() {
    this.mostrarSenha = !this.mostrarSenha;
  }  
}
