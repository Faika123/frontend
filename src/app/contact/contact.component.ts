import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact: any = {
    email: '',
    message:''

  };

  constructor(private http: HttpClient, private router: Router) { }

  onSubmit() {
    this.http.post('http://localhost:3008/ajouter', this.contact).subscribe({
      next: (res: any) => {
        console.log('contact Success');
        this.router.navigateByUrl('');
      },
      error: (error) => {
        console.error('contact Error:', error);
        console.log('contact Failed. Please try again.');
      }
    });
  }
}
