import { Component, Input, OnInit } from '@angular/core';
import { Repositorio } from '../../models/repositorio';

@Component({
  selector: 'app-repositorios',
  templateUrl: './repositorios.component.html',
  styleUrl: './repositorios.component.scss'
})
export class RepositoriosComponent implements OnInit {
  @Input()
  repositorios!: Repositorio[];

  ngOnInit(): void {

  }

  abrirRepositorio(index: number){
    window.open(this.repositorios[index].html_url)
  }

}
