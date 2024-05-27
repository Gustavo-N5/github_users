import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss'
})
export class UsuarioComponent implements OnInit{

  
  constructor(private activatedRoute: ActivatedRoute, private usuarioService: UsuarioService, private formBuild: FormBuilder) {}

  form = this.formBuild.group({
    usuario: ["", Validators.required]
  })

  usuario!: Usuario;

  ngOnInit(): void {
    this.buscarUsuario(this.activatedRoute.snapshot.params["user"])

    this.form.patchValue({
      usuario: this.activatedRoute.snapshot.params["user"]
    })
  }

  buscarUsuario(_usuario:string){
    // Requesição para buscar de usuario 
    this.usuarioService.getUsuario(_usuario).subscribe((data) => { 
      this.usuario = data;
      console.log(data)
    });

    // Requesição para busccar os repositorios
     this.usuarioService.getRositorio(_usuario).subscribe((data) => {
      this.usuario.repositorios = data;
    });
  }

}