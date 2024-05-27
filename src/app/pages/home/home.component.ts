import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from '../../models/usuario';
import { Repositorio } from '../../models/repositorio';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private formBuild: FormBuilder, private rota: Router) { }
;

  form = this.formBuild.group({
    usuario: ["", Validators.required]
  })

  ngOnInit(): void {
  }

  onSubmit():void {
    
    if (this.form.invalid) {
      return
    }

    const _usuario = this.form.value.usuario as string;
    
    this.rota.navigate([`/perfil/${_usuario}`])

  }
}
