import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {}

  url = "https://api.github.com/users/"

  getUsuario(nome:string): Observable<Usuario>{
    return this.http.get<Usuario>(this.url)
  }
}
