import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  evenements: any[] = [];
  currentSlide: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.listerEvent();
  }

  listerEvent(): void {
    this.http.get<any[]>('http://localhost:5000/eventService/lister').subscribe(
      data => {
        this.evenements = data;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération des événements :', error);
      }
    );
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.evenements.length;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.evenements.length) % this.evenements.length;
  }

  setSlide(index: number): void {
    this.currentSlide = index;
  }
}
