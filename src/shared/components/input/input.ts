import { Component, input, } from '@angular/core';
import { Field } from '@angular/forms/signals';

@Component({
  selector: 'app-input',
  imports: [Field],
  template: `
    <div class="inputui">
      <input [field]="formField()" [type]="type()" [placeholder]="placeholder()"/>
    </div>
  `,
  styleUrl: './input.scss',
})
export class Input {
  formField = input<any>();
  type = input<string>('text');
  placeholder = input<string>('Digite aqui...');
}
