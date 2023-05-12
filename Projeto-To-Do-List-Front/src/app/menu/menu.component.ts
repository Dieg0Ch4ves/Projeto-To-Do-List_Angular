import { Component } from '@angular/core';
import { UsuarioService } from '../servicos/usuarios/usuario.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(
    private service: UsuarioService
  ) {}

  sair() {
    this.service.logout();
  }
}
