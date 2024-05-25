import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../../models/usuario';
import { Repositorio } from '../../models/repositorio';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {}

  url = "https://api.github.com/users/"

  getUsuario(usuario:string): Observable<Usuario>{
    return this.http.get<Usuario>(this.url + usuario);
  }

  getRositorio(usuario:string): Observable<Repositorio[]>{
    return this.http.get<Repositorio[]>(`${this.url}${usuario}/repos`);
  }
}
