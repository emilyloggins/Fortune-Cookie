import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FortuneLandingComponent } from './fortune-landing/fortune-landing.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FortuneLandingComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'crickets_corner';
}
