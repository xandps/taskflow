import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `<button class="buttonui">{{text()}}</button>`,
  styleUrl: './button.scss',
})
export class Button {
  text = input<string>('Entrar');
}
