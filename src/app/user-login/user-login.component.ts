import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss'
})
export class UserLoginComponent {
  email: string = '';
  password: string = '';
  loginError: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService
      .login(this.email, this.password)
      .then(() => {
        this.router.navigate(['/landing']); 
      })
      .catch((error) => {
        this.loginError = 'Invalid email or password';
        console.error(error);
      });
  }
}
