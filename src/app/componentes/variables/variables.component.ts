import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent {

  nombre: string = 'Marcos López';
  nota: number = 3;
  constructor() { }

}
