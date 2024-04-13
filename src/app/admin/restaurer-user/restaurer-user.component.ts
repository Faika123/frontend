import { Component } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurer-user',
  templateUrl: './restaurer-user.component.html',
  styleUrls: ['./restaurer-user.component.css']
})
export class RestaurerUserComponent {
 /* utilisateurs: any[] = [];
  
  constructor(private http: HttpClient, private router: Router){}
  ngOnInit(): void {
    this.listerUtilisateursSupprimes();
   
  }
  listerUtilisateursSupprimes(): void {
    this.http.get<any[]>('http://localhost:3005/lister-supprimes').subscribe(data => {
      this.utilisateurs = data;
    });
  }
  restaurerUtilisateur(id: number): void {
    this.http.put(`http://localhost:3005/${id}/restaurer`, null).subscribe(() => {
      this.utilisateurs = this.utilisateurs.filter(u => u.id !== id);
    });
}*/

}
