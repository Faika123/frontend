import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  selectedEventType: number = 0;

  onEventTypeChange() {
    // Vous pouvez effectuer des actions en fonction de la sélection ici
    console.log('Selected event type:', this.selectedEventType);
  }


}
