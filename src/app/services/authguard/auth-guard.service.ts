import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../authentification/auth.service';
import { TokenStorageService } from '../token-service/token-storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private tokenStorage: TokenStorageService, private router: Router) {}

  canActivate(): boolean {
    if (this.tokenStorage.isLoggedIn()) {
      return true;
    } else {
      // Si l'utilisateur n'est pas connecté, redirigez-le vers la page de connexion
      this.router.navigate(['/login']);
      return false;
    }
  }
}
