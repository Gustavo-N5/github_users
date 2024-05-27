import { Component, Input } from '@angular/core';
import { Usuario } from '../../models/usuario';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-exibir-usuario',
  templateUrl: './exibir-usuario.component.html',
  styleUrl: './exibir-usuario.component.scss'
})
export class ExibirUsuarioComponent {
  

  constructor(private rota: Router) {    
  }

  @Input()
  usuario!: Usuario

  contato(){
    window.open(this.usuario.html_url)
  }
}
