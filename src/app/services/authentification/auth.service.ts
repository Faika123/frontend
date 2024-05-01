import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:5000/authService';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  constructor(private http: HttpClient) { }

  signin(email: string, mot_de_passe: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      email,
      mot_de_passe
    }, httpOptions);
  }

  signup(nom: string, prenom: string, email: string, mot_de_passe: string, tel: string, photo_url: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      nom,
      prenom,
      email,
      mot_de_passe,
      tel,
      photo_url
    }, httpOptions);
  }
}
