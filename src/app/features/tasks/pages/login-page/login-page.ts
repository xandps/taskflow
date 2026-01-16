import { Component, signal } from '@angular/core';
import { Input } from '../../../../../shared/components/input/input';
import { Button } from '../../../../../shared/components/button/button';
import { AuthService } from '../../../../core/services/auth-service';
import { form } from '@angular/forms/signals';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';

interface LoginForm {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login-page',
  imports: [Input, Button, JsonPipe],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  error: string = 'Credenciais inválidas'
  protected readonly cliente = signal<LoginForm>({
    email: '',
    password: ''
  });

  protected readonly formularioCliente = form(this.cliente);

  constructor(private authService: AuthService, private router: Router) {}

  login() {
  console.log('testeeeeeeee');
    const success = this.authService.login(
      this.formularioCliente().value().email,
      this.formularioCliente().value().password
    );

    if (success) {
      this.router.navigate(['/tasks']);
    } else {
      alert(this.error);
    }
  }
}
