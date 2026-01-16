import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  template: `
    <button class="buttonui" (click)="clicked.emit()">
      {{ text() }}
    </button>
  `,
  styleUrl: './button.scss',
})
export class Button {
  text = input<string>('Entrar');
  clicked = output<void>();
}
