import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FortuneLandingComponent } from './fortune-landing/fortune-landing.component';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FortuneLandingComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getUser().then((user) => {
      if (user) {
        this.User = user;
        console.log('User is logged in:', user);
      } else {
        console.log('No user logged in.');
      }
    });
  }

  User: any;
    
  title = 'crickets_corner';
}
