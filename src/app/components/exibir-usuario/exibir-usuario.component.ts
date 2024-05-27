import { Component, Input } from '@angular/core';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-exibir-usuario',
  templateUrl: './exibir-usuario.component.html',
  styleUrl: './exibir-usuario.component.scss'
})
export class ExibirUsuarioComponent {
  @Input()
  usuario!: Usuario
}
