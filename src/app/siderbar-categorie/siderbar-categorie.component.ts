import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-siderbar-categorie',
  templateUrl: './siderbar-categorie.component.html',
  styleUrls: ['./siderbar-categorie.component.css']
})
export class SiderbarCategorieComponent implements OnInit {
  categories: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.listercategories();
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

  @Output() categorieSelected = new EventEmitter<number>(); // Assurez-vous que seul le nombre est émis ici

  onSelectCategorie(id: number) {
    this.categorieSelected.emit(id);
  }
  
}
