import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserInterceptor } from './services/Interceptor/user.interceptor';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';
import { CultureComponent } from './culture/culture.component';
import { SocialComponent } from './social/social.component';
import { SanteComponent } from './sante/sante.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CategorieComponent } from './categorie/categorie.component';
import { PaymentComponent } from './payment/payment.component';
import { SiderbarCategorieComponent } from './siderbar-categorie/siderbar-categorie.component';
import { AuthService } from './services/authentification/auth.service';
import { AuthGuard } from './services/authguard/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
    ReservationComponent,
    ProfileComponent,
    FooterComponent,
    CultureComponent,
    SocialComponent,
    SanteComponent,
    ContactComponent,
    AboutComponent,
    CategorieComponent,
    PaymentComponent,
    SiderbarCategorieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
