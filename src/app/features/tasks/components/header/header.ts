import { Component } from '@angular/core';
import { Button } from '../../../../../shared/components/button/button';

@Component({
  selector: 'app-header',
  imports: [Button],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  sendMessage() {
    console.log('Enviando mensagem pelo WhatsApp...');
    window.open('https://wa.me/5511968349354?text=Ol%C3%A1%20Ale%2C%20tudo%20bem%3F', '_blank');
  }
}
