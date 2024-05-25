import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input({ required: false })
  placeholder!: string;

  @Output()
  onClick= new EventEmitter<void>();

  onClickSubmit(){
    this.onClick.emit();
  }
}
