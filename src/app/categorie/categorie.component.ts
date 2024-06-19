import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  categories: any[] = [];
  evenements: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.listercategories();
    this.listerEvent();

  }

  listercategories(): void {
    this.http.get<any[]>('http://localhost:3006/listercategorie').subscribe(
      data => {
        this.categories = data;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération des catégories :', error);
      }
    );
  }
  listerEvent(): void {
    this.http.get<any[]>('http://localhost:3006/lister').subscribe(
      data => {
        this.evenements = data;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération des catégories :', error);
      }
    );
  }

  getEventsByCategory(categoryId: any) {
    const url = `http://localhost:3006/categorie/${categoryId}/evenement`;

    this.http.get(url).subscribe(
      (res: any) => {
        this.evenements = res;
        console.log('Liste des événements par catégorie :', this.evenements);
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des événements par catégorie :', error);
      }
    );
  }


  
  
}
