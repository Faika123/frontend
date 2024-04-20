import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css'],
})
export class AjouterComponent {
  categories: any[] = [];
  types: any[] = []; 
  selectedCategorie: any;
  selectedType: any;
  AjouterEvent: any = {
    titre: '',
    description: '',
    prix: '',
    lieu: '',
    places_disponibles: '',
    type_event: '',
    selectedCategorie: '',
    selectedType: '',  
    date_deb: '',
    date_fin: '',
    photo_url: '',
  };

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.listerCategories();
    this.listerTypes();
  }

  listerCategories(): void {
    this.http.get<any[]>('http://localhost:3006/listercategorie').subscribe(data => {
      this.categories = data;
      console.log('categories == '+ this.categories);
    });
  }

  listerTypes(): void {
    this.http.get<any[]>('http://localhost:3010/lister').subscribe(data => {
      this.types = data; 
      console.log('types == '+ this.types);
    });
  }

  onSubmit() {
    const champsObligatoires = [
      'titre',
      'description',
      'prix',
      'lieu',
      'places_disponibles',
     
      'date_deb',
      'date_fin',
      'photo_url',
      'selectedCategorie',
      'selectedType',
    ];
  
    for (const champ of champsObligatoires) {
      if (!this.AjouterEvent[champ]) {
        console.error(`Le champ ${champ} est obligatoire`);
        alert(`Le champ ${champ} est obligatoire`);
        return;
      }
    }
  
    if (!this.AjouterEvent.date_deb) {
      console.error('Le champ date_deb est obligatoire');
      alert('Le champ date_deb est obligatoire');
      return;
    }
  
    const dateDebut = new Date(this.AjouterEvent.date_deb);
  
    this.http.post('http://localhost:3006/ajouter', {
      ...this.AjouterEvent,
      date_deb: dateDebut,
    }).subscribe({
      next: (res: any) => {
        alert('Événement ajouté avec succès');
        this.router.navigateByUrl('/admin/event');
      },
      error: (error) => {
        console.error('event Error:', error);
  
        if (error.error && error.error.errors && error.error.errors.date_deb) {
          const erreursDate = error.error.errors.date_deb;
          let messageErreur = 'Le champ date_deb est invalide : ';
          for (const erreur of erreursDate) {
            messageErreur += `- ${erreur.message} `;
          }
          alert(messageErreur);
        } else {
          alert('Échec de l\'ajout de l\'événement. Veuillez réessayer.');
        }
      }
    });
  }
  
}
