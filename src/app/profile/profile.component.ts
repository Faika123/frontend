// ProfileComponent
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/authentification/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      const token = this.authService.getToken();
      if (token) {
        this.authService.getUserFromToken(token).subscribe({
          next: (user: any) => {
            this.currentUser = user;
          },
          error: (error: any) => {
            console.error('Error fetching user data:', error);
          }
        });
      } else {
        console.error('Token is null.');
      }
    }
  }
}



  /*onSubmit(): void {
    const url = `${this.baseUrl}/${this.User.id}/modifier`;
    this.http.put(url, this.User)
      .subscribe(
        response => {
          console.log('utilisateur modifiée avec succès.'); 
          this.router.navigateByUrl('/profile');

        },
        error => {
          console.error(error); 
        }
      );
  }*/

