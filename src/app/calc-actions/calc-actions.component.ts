import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-calc-actions',
  standalone: true,
  imports: [],
  templateUrl: './calc-actions.component.html',
  styleUrl: './calc-actions.component.css'
})
export class CalcActionsComponent {
  @Output() buttonClicked = new EventEmitter<string>(); 
  
  onClick(buttonValue: string) {
    this.buttonClicked.emit(buttonValue);
  }
}
