import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  evenement: any[] = [];
  Params: any = {};

  constructor(private http: HttpClient, private router: Router){}
  
  ngOnInit(): void {
    
  }

  rechercherevenement(): void {
    let queryParams: any = {};
    if (this.Params.titre) {
      queryParams.titre = this.Params.titre;
    }
  
    console.log('queryParams:', queryParams);

    // Construire l'URL avec les paramètres de requête
    let url = 'http://localhost:3006/rechercher?';
    Object.keys(queryParams).forEach(key => {
        url += `${key}=${queryParams[key]}&`;
    });
    url = url.slice(0, -1); // Supprimer le dernier '&'

    console.log('URL:', url);

    // Effectuer la requête HTTP
    this.http.get<any[]>(url).subscribe(data => {
      // Filtrer les evenement en fonction des critères de recherche
      this.evenement = data.filter(user => {
        return (!this.Params.titre || user.titre.toLowerCase().includes(this.Params.titre.toLowerCase()));
      });

      // Rediriger vers la page de liste-evenements avec les paramètres de requête
      this.router.navigate(['/categorie'], { queryParams });
    });
  }
}
