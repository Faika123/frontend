import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  User = { id: 0, nom: '', prenom: '', email: '', mot_de_passe: '', photo_url: '' }; 

  private baseUrl = 'http://localhost:3005'; 

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {} 

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.getUserById(id);
    });
  }

  getUserById(id: number): void {
    const url = `${this.baseUrl}/${id}/listerbyid`;
    this.http.get<any>(url)
      .subscribe(
        response => {
          this.User = response;
        },
        error => {
          console.error(error); 
        }
      );
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
}
