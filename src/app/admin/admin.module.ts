import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';


import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SiderbarComponent } from './siderbar/siderbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { EventComponent } from './event/event.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { NotificationComponent } from './notification/notification.component';
import { RestaurerUserComponent } from './restaurer-user/restaurer-user.component';
import { CategorieComponent } from './categorie/categorie.component';


@NgModule({
  declarations: [
    AdminComponent,
    SiderbarComponent,
    NavbarComponent,
    UserComponent,
    EventComponent,
    AcceuilComponent,
    AjouterComponent,
    NotificationComponent,
    RestaurerUserComponent,
    CategorieComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
