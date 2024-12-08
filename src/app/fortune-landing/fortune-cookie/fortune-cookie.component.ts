import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fortune-cookie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fortune-cookie.component.html',
  styleUrl: './fortune-cookie.component.scss'
})
export class FortuneCookieComponent {
  
  // ngOnChanges() {
  //   console.log(this.isCookieCracked, "cracked")
  // }

  @Input() isCookieCracked: boolean = false;
}
