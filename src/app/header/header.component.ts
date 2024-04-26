import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authentification/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  nom: string | undefined;
  isOpen = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
      if (loggedIn) {
        // Récupérer le nom d'utilisateur depuis le service d'authentification
        this.nom = this.authService.getUsername();
      }
    });
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  logout(): void {
    // Appeler la méthode logout du service d'authentification
    this.authService.logout();
  }

  // Méthode pour gérer la connexion de l'utilisateur
  login(): void {
    // Redirigez l'utilisateur vers la page de connexion
    this.router.navigate(['/signin']);
  }
}
