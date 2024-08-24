import { Component, Input } from '@angular/core';
import { CalcActionsComponent } from '../calc-actions/calc-actions.component';

@Component({
  selector: 'app-calc-view',
  standalone: true,
  imports: [CalcActionsComponent],
  templateUrl: './calc-view.component.html',
  styleUrl: './calc-view.component.css'
})
export class CalcViewComponent {
  @Input() operador: string | undefined;
  n1 = 0;
  n2= 0;

  result=0;
  onButtonClicked(operador: string) {
    switch (operador) {
      case '+':
        this.result=this.n1+this.n2;
        break;
      case '-':
        this.result=this.n1-this.n2;
        break;
      case '*':
        this.result=this.n1*this.n2;
        break;
      case '^':
        this.result=Math.pow(this.n1,this.n2);
        break;
      case '/':
        this.result=this.n1/this.n2;
        break;
      case 'CE':
        this.n1 = 0;
        this.n2 = 0;
        this.result=0;
        break;
      }
  }

  onInputChange1(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.n1 = Number(input.value);
  }

  onInputChange2(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.n2 = Number(input.value);
  }
}
