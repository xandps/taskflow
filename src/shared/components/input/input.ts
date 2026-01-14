import { Component, input, } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  template: `
    <div class="inputui">
      <input [type]="type()" [placeholder]="placeholder()"/>
    </div>
  `,
  styleUrl: './input.scss',
})
export class Input {
  type = input<string>('text');
  placeholder = input<string>('Digite aqui...');
}
