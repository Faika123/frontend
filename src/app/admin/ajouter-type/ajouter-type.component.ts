import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-type',
  templateUrl: './ajouter-type.component.html',
  styleUrls: ['./ajouter-type.component.css']
})
export class AjouterTypeComponent implements OnInit {
  categories: any[] = [];
  selectedCategorie: any;
  ajouter: any = {
    nom: '',
    description: '',
    selectedCategorie: '',
  };

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.listerCategories();
  }

  listerCategories(): void {
    this.http.get<any[]>('http://localhost:3006/listercategorie').subscribe(data => {
      this.categories = data;
    });
  }

  ajouterTypes(): void {
    if (!this.ajouter.nom || !this.ajouter.description || !this.selectedCategorie) {
      console.log('Tous les champs sont requis.');
      return;
    }

    this.http.post<any>('http://localhost:3010/ajouter', { 
      nom: this.ajouter.nom, 
      description: this.ajouter.description, 
      categorie_id: this.selectedCategorie 
    }).subscribe({
      next: () => {
        console.log('Type ajouté avec succès.');
        this.router.navigateByUrl('/admin/type');
        this.ajouter.nom = '';
        this.ajouter.description = '';
        this.selectedCategorie = null;
      },
      error: (error) => {
        if (error.status === 409) {
          console.log('Le nom de type existe déjà.');
        } else {
          console.error('Erreur interne du serveur : ', error);
        }
      }
    });
  }
}
