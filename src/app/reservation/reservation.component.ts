import { Component } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  evenements: any[] = [];

  reservation = {
    nbr_place: null,
    type_ticket: '',
    date_reservation: '',
    evenement_id: ''
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.listeEvenements();
  }

  listeEvenements(): void {
    this.http.get<any[]>('http://localhost:3006/lister').subscribe(data => {
      this.evenements = data;
    });
  }
  
  submitReservation() {
    const token = 'your-authentication-token'; // Replace with your actual token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.post('http://localhost:3007/reserver', this.reservation)
      .subscribe(
        response => {
          console.log('Réservation réussie !', response);
        },
        error => {
          console.error('Erreur lors de la réservation :', error);
        }
      );
  }
}
