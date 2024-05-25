import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  
  constructor(private formBuild:FormBuilder) {}

  form : FormGroup = this.formBuild.group({
    usuario: ["", Validators.required]
  })

  ngOnInit(): void {}

  onSubmit(){
    
  }
}
