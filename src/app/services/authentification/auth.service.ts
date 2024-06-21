import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:3005/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  constructor(private http: HttpClient) { }

  login(email: string, mot_de_passe: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      email,
      mot_de_passe
    }, httpOptions);
  }

  register(username: string, email: string, password: string, address: string, phone: string, profile_image: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password,
      address,
      phone,
      profile_image
    }, httpOptions);
  }
  
}