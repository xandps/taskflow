import { Component } from '@angular/core';
import { Input } from '../../../../../shared/components/input/input';
import { Button } from '../../../../../shared/components/button/button';

@Component({
  selector: 'app-login-page',
  imports: [Input, Button],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {

}
