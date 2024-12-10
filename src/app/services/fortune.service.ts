import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FortuneService {
  private localStorageKey = 'savedFortunes';

  saveFortune(fortune: string): void {
    const fortunes = this.getFortunes();
    fortunes.push(fortune);
    localStorage.setItem(this.localStorageKey, JSON.stringify(fortunes));
    // this.getFortunes();
  }

  getFortunes(): string[] {
    const fortunes = localStorage.getItem(this.localStorageKey);
    return fortunes ? JSON.parse(fortunes) : [];
  }

  clearFortunes(): void {
    localStorage.removeItem(this.localStorageKey);
  }
}
