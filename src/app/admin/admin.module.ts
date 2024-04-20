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
import { AjouterCategorieComponent } from './ajouter-categorie/ajouter-categorie.component';
import { CategoriesComponent } from './categories/categories.component';
import { ModifierCategorieComponent } from './modifier-categorie/modifier-categorie.component';
import { TypeComponent } from './type/type.component';
import { ModifierTypeComponent } from './modifier-type/modifier-type.component';
import { AjouterTypeComponent } from './ajouter-type/ajouter-type.component';



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
    AjouterCategorieComponent,
    CategoriesComponent,
    ModifierCategorieComponent,
    TypeComponent,
    ModifierTypeComponent,
    AjouterTypeComponent,
   
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
