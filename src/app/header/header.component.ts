import { Component } from '@angular/core';
import { AuthService } from '../services/authentification/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn = false;
  nom = '';

  constructor(private authService: AuthService) {
    this.isLoggedIn = this.authService.isLoggedIn();
    if (this.isLoggedIn) {
      const token = this.authService.getToken();
      // Extraire le nom d'utilisateur à partir du token (à définir selon votre logique)
      this.nom = 'Nom Utilisateur';
    }
  }

  logout(): void {
    this.authService.logout();
  }
}
