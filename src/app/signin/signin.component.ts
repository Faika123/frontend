import { Component } from '@angular/core';
import { AuthService } from '../services/authentification/auth.service';
import { TokenStorageService } from '../services/token-service/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  form: any = {
    email: null,
    mot_de_passe: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  isSuccessful = false; // Add this variable to track success
  errorMessage = '';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit(): void {
    const { email, mot_de_passe } = this.form;

    this.authService.login(email, mot_de_passe).subscribe({
      next: data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.isSuccessful = true; // Set to true when login is successful
        this.router.navigateByUrl('');
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        this.isSuccessful = false; // Ensure it's false if login fails
      }
    });
  }


}








/*import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/authentification/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  data = { email: '', mot_de_passe: '' };

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    const fakeToken = 'fake-jwt-token';
    const fakeUser = { nom: 'John', prenom: 'Doe' };

    this.authService.login(fakeToken, fakeUser);
    this.router.navigate(['/']);
  }

  onSubmit() {
    const { email, mot_de_passe } = this.data;
    this.login();
  }
}
*/


