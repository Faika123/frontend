import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signup: any = {
    nom: '',
    prenom: '',
    email: '',
    mot_de_passe: '',
    tel: '',
    type_utilisateur: '',
    photo_url: ''
  };

  constructor(private http: HttpClient, private router: Router) { }

  onSubmit() {
    this.http.post('http://localhost:3005/signup', this.signup).subscribe({
      next: (res: any) => {
        console.log('Signup Success');
        this.router.navigateByUrl('/signin');
      },
      error: (error) => {
        console.error('Signup Error:', error);
        console.log('Signup Failed. Please try again.');
      }
    });
  }
}