import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    const token = localStorage.getItem('loginToken');
    if (token) {
      return true;
    } else {
      // Si l'utilisateur n'est pas connecté, redirigez-le vers la page de connexion
      this.router.navigate(['/login']);
      return false;
    }
  }
}
