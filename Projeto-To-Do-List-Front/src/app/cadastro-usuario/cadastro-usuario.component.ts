import { Component } from '@angular/core';
import { UsuarioService } from '../servicos/usuarios/usuario.service';
import { Usuario } from '../modelos/Usuario';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent {

  usuario = new Usuario();

  constructor(
    private servico: UsuarioService,
    private router: Router
  ) {}

  //Cadastro
  criar() {
    this.servico.criarUsuario(this.usuario)
    .subscribe(() => {
      console.log(this.usuario)
      alert("Usuario Criado Com Sucesso !")

      this.router.navigate(['/login'])
      this.usuario = {
        id: 0,
        nome: '',
        senha: '',
        email: '',
        listaTarefa: [],
      }
    })
  }
  
  mostrarSenha: boolean = false;

  alternarVisibilidadeSenha() {
    this.mostrarSenha = !this.mostrarSenha;
  }  
}
