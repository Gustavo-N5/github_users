import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from '../../models/usuario';
import { Repositorio } from '../../models/repositorio';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  
  constructor(private formBuild:FormBuilder, private usuarioService: UsuarioService) {}

  usuario!:Usuario;
  repositorios!: Repositorio[];

  form = this.formBuild.group({
    usuario: ["", Validators.required]
  })

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.form.invalid){
      return
    }
    
    const _usuario = this.form.value.usuario as string
    console.log(_usuario)
    this.usuarioService.getRositorio(_usuario).subscribe((data)=>{
      this.repositorios = data;
      console.log(this.repositorios)
    });

    this.usuarioService.getUsuario(_usuario).subscribe((data)=>{
      this.usuario = data;
      console.log(this.usuario.avatar_url)
    });

    
  }
}
