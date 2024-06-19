import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-service/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  email?: string;
  profileImage?: string;
  isDropdownOpen = false;  // Add this line to define the property

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.email = user.email;
      this.profileImage = user.profile_image;
    }
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;  // Add this method to toggle the dropdown state
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
