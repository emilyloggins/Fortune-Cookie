import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-sign-up',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './user-sign-up.component.html',
  styleUrl: './user-sign-up.component.scss'
})
export class UserSignUpComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  signUpError: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  signUp() {
    // Check if passwords match
    if (this.password !== this.confirmPassword) {
      this.signUpError = 'Passwords do not match';
      return;
    }

    this.authService
      .signup(this.email, this.password)
      .then(() => {
        this.router.navigate(['/dashboard']); // Redirect after successful sign-up
      })
      .catch((error) => {
        this.signUpError = error.message;
        console.error(error);
      });
  }
}
