import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FortuneCookieComponent } from './fortune-cookie/fortune-cookie.component';

@Component({
  selector: 'app-fortune-landing',
  standalone: true,
  imports: [CommonModule, FortuneCookieComponent],
  templateUrl: './fortune-landing.component.html',
  styleUrls: ['./fortune-landing.component.scss']
})
export class FortuneLandingComponent {

  isCookieCracked: boolean = false;

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
    this.isCookieCracked = true;
    const randomIndex = Math.floor(Math.random() * this.fortunes.length);
    this.fortune = this.fortunes[randomIndex];
  }

  reset() {
    this.isCookieCracked = false;
    this.fortune = '';
  }

  saveFortune() {
    
  }
}