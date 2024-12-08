import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FortuneCookieComponent } from './fortune-cookie/fortune-cookie.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FortuneCookieComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'crickets_corner';
}
