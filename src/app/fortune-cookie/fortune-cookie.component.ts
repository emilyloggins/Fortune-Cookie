import { Component } from '@angular/core';

@Component({
  selector: 'app-fortune-cookie',
  standalone: true,
  templateUrl: './fortune-cookie.component.html',
  styleUrls: ['./fortune-cookie.component.scss']
})
export class FortuneCookieComponent {
  fortunes: string[] = [
    'You will have a great day!',
    'A pleasant surprise is waiting for you.',
    'Beware of unexpected changes.',
    'Your talents will soon be recognized.',
    'A new adventure is on the horizon.',
    'Happiness is on its way to you.'
  ];
  
  fortune: string = '';

  crackCookie() {
    // Randomly select a fortune from the fortunes array
    const randomIndex = Math.floor(Math.random() * this.fortunes.length);
    this.fortune = this.fortunes[randomIndex];
  }
}