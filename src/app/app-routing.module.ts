import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ReservationComponent } from './reservation/reservation.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { SanteComponent } from './sante/sante.component';
import { SocialComponent } from './social/social.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CategorieComponent } from './categorie/categorie.component';
import { PaymentComponent } from './payment/payment.component';



const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent 
  },
  { 
    path: 'header', 
    component: HeaderComponent 
  },
  { 
    path: 'signin', 
    component: SigninComponent 
  },
  { 
    path: 'signup', 
    component: SignupComponent
  },
  { 
    path: 'reservation', 
    component: ReservationComponent 
  },
  { 
    path: 'footer', 
    component: FooterComponent 
  },
  { 
    path: 'profile', 
    component: ProfileComponent,  
    

  },

  { 
    path: 'sante', 
    component: SanteComponent
  },

  { 
    path: 'social', 
    component: SocialComponent 
  },
  { 
    path: 'contact', 
    component: ContactComponent
  },
  { 
    path: 'about', 
    component: AboutComponent
  },
  { 
    path: 'categorie', 
    component: CategorieComponent
  },
  { 
    path: 'paiement', 
    component: PaymentComponent
  },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
