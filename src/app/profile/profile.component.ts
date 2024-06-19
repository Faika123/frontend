import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-service/token-storage.service';
import { AuthService } from '../services/authentification/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  isOpen = false;
  currentUser: any;


  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.tokenStorage.getUser();
  }
}
