import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = [
    'https://www.marhba.com/images/culture/culture2020/jacreport.jpg',
    'https://www.institutfrancais-tunisie.com/sites/default/files/styles/imagepage_de_base/public/2021-03/FLS-2021.jpg?itok=DJYiigzG',
    'https://www.tekiano.com/wp-content/uploads/2022/06/festival-carthage-2022.jpg',
    'https://voyage-et-vie.com/wp-content/uploads/2020/10/journees-theatrales-de-carthage.jpg'
  ];

  currentIndex = 0;
  interval: any;
  evenements: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.startCarousel();
    this.listerEvent();
  }
  listerEvent(): void {
    this.http.get<any[]>('http://localhost:3006/lister').subscribe(
      data => {
        this.evenements = data.slice(0, 3);
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération des catégories :', error);
      }
    );
  }
  ngOnDestroy(): void {
    this.stopCarousel();
  }

  startCarousel() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }

  stopCarousel() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  getCurrentSlide() {
    return this.images[this.currentIndex];
  }

}
