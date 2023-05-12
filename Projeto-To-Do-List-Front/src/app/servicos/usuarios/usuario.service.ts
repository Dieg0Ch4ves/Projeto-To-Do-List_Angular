import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Usuario } from 'src/app/modelos/Usuario';
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  constructor(
    private http: HttpClient
  ) {}

  //Url API 
  private url:string = 'http://localhost:8080/usuario'

  //Todos Usuarios
  todosUsuarios() {
    return this.http.get<Usuario[]>(this.url)
  }

  /* Cadastro */
  criarUsuario(obj: Usuario) {
    return this.http.post<Usuario>(this.url, obj);
  }

  /* Login  */
  logarUsuario(email: string, senha:string) {
    return this.http.post<any>((this.url + "/login"), {email: email , senha: senha})
    .pipe(
      tap(response => localStorage.setItem('token', response))
    );
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem('token')
  }

  //Obter usuario
  listaUsuario() {
    const token: any = this.getToken()
    const headers = {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    };
    const params = new HttpParams().set('token', token);
    return this.http.get<Usuario>(this.url + `/lista`, {headers: headers, params: params} )
  }

}
