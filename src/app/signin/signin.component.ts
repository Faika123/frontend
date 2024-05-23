import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  data: any = {
    email: '',
    mot_de_passe: ''
  };
  constructor(private http: HttpClient, private router: Router) { }
  
  onSubmit() {
    this.http.post('http://localhost:3005/login', this.data).subscribe({
      next: (res: any) => {
        console.log('token retrieved: ', res.token);
        localStorage.setItem('loginToken', res.token);
        this.router.navigateByUrl('');
      },
      error: (error) => {
        console.error('login error:', error);
        if (error.status === 0) {
          console.log('Connection refused. Please make sure the server is running.');
        } else {
          console.log('Login failed. Please check your credentials.');
        }
      }
    });
  }
}
