import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {

  url: string = 'https://angular.dev/'

  somaValor(value1: number, value2: number): number{
    return value1 + value2
  }

}
