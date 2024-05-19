// AuthService
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  isLoggedIn(): boolean {
    // Vérifier si l'utilisateur est connecté en fonction de votre logique
    return !!sessionStorage.getItem('loginToken');
  }

  getToken(): string | null {
    return sessionStorage.getItem('loginToken');
  }

  getUserFromToken(token: string): any {
    // Implémentez la logique pour extraire les informations de l'utilisateur à partir du token
    // Cette fonction peut utiliser une bibliothèque de décodage JWT ou votre propre logique
    // Pour cet exemple, nous renvoyons simplement un objet vide
    return this.http.get<any>('http://localhost:3005/${id}');
  }

  logout(): void {
    // Supprimer le token de la session lors de la déconnexion
    sessionStorage.removeItem('loginToken');
    // Vous pouvez également rediriger l'utilisateur vers la page de connexion
  }
}
