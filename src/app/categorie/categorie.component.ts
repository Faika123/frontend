import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  evenements: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    // Afficher tous les événements par défaut lors du chargement de la page
    this.listerEvenements();
  }

  listerEvenements(): void {
    this.http.get<any[]>('http://localhost:3006/lister').subscribe(
      data => {
        this.evenements = data;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération des événements :', error);
      }
    );
  }

  onCategorieSelected(id: number) {
    this.http.get<any[]>(`http://localhost:3006/categorie/${id}/evenement`).subscribe(data => {
      this.evenements = data;
    });
  }
  
  
}
