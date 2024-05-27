import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss'
})
export class UsuarioComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute,
    private usuarioService: UsuarioService,
    private formBuild: FormBuilder,
    private spinner: NgxSpinnerService,

  ) { }

  form = this.formBuild.group({
    usuario: ["", Validators.required]
  })

  usuario!: Usuario;

  isErro!: boolean;

  ngOnInit(): void {
    this.form.patchValue({
      usuario: this.activatedRoute.snapshot.params["user"]
    });
    this.buscarUsuario()
  }

  buscarUsuario() {
    this.spinner.show()
    const _usuario = this.form.value.usuario as string
    // Requesição para buscar de usuario 
    this.usuarioService.getUsuario(_usuario).subscribe((data) => {
      this.usuario = data;
      // Requesição para busccar os repositorios
      this.usuarioService.getRositorio(_usuario).subscribe((data) => {
        this.usuario.repositorios = data;
      }, (error) => {
        this.isErro = true
      });
    }, (error) => {
      this.isErro = true
    });
    this.spinner.hide()
  }


}
