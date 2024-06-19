import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../services/authentification/auth.service';
import { TokenStorageService } from '../services/token-service/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  evenements: any[] = [];
  reservationForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) {
    this.reservationForm = this.fb.group({
      nbr_place: ['', [Validators.required, Validators.min(1)]],
      type_ticket: ['', Validators.required],
      date_reservation: ['', Validators.required],
      evenement_id: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.listeEvenements();
  }
  listeEvenements(): void {
    this.http.get<any[]>('http://localhost:5000/eventService/lister').subscribe(data => {
      this.evenements = data;
    });
  }
  onSubmit() {
    if (this.reservationForm.valid) {
        this.http.post('http://localhost:5000/reservationService/reserver', this.reservationForm.value)
        .subscribe(response => {
          console.log('Réservation réussie', response);
          this.router.navigateByUrl('/paiement'); 
        }, error => {
          console.error('Erreur lors de la réservation', error);


        });
      } else {
        console.error('Token non disponible.');
      }
    }
  }

