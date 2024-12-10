import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { environment } from '../../environments/environment.dev';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private firebaseApp: FirebaseApp;
  private auth;

  constructor() {
      this.firebaseApp = initializeApp(environment.firebaseConfig);
      this.auth! = getAuth(this.firebaseApp);
  }

  async login(email: string, password: string): Promise<any> {
    return signInWithEmailAndPassword(this.auth!, email, password);
  }

  async signup(email: string, password: string): Promise<any> {
    return createUserWithEmailAndPassword(this.auth!, email, password);
  }

  logout(): Promise<void> {
    return signOut(this.auth!);
  }

  getUser() {
    return new Promise((resolve, reject) => {
      onAuthStateChanged(this.auth!, (user) => {
        resolve(user);
      }, reject);
    });
  }
}
