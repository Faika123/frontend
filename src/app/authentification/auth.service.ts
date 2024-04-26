import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn = this.isLoggedInSubject.asObservable();

  constructor() {
    this.checkLoggedInStatus();
  }

  login(): void {
    localStorage.setItem('loginToken', 'myAuthToken'); 
    this.isLoggedInSubject.next(true);
  }

  logout(): void {
    localStorage.removeItem('loginToken');
    this.isLoggedInSubject.next(false);
  }

  getUsername(): string {
    return ''; 
  }

  private checkLoggedInStatus(): void {
    const token = localStorage.getItem('loginToken');
    const isLoggedIn = !!token;
    this.isLoggedInSubject.next(isLoggedIn);
  }
}
