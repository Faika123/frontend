import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SiderbarComponent } from './siderbar/siderbar.component';
import { UserComponent } from './user/user.component';
import { EventComponent } from './event/event.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { NotificationComponent } from './notification/notification.component';
import { RestaurerUserComponent } from './restaurer-user/restaurer-user.component';
import { CategorieComponent } from '../categorie/categorie.component';
import { AjouterCategorieComponent } from './ajouter-categorie/ajouter-categorie.component';
import { CategoriesComponent } from './categories/categories.component';
import { ModifierCategorieComponent } from './modifier-categorie/modifier-categorie.component';
import { AjouterTypeComponent } from './ajouter-type/ajouter-type.component';
import { TypeComponent } from './type/type.component';
import { ModifierTypeComponent } from './modifier-type/modifier-type.component';

const routes: Routes = [
  { path: '', 
    component: AdminComponent ,
    children: [
      {
        path: '',
        component: AcceuilComponent,
      },
      {
        path: 'navbar',
        component: NavbarComponent,
      },
      {
        path: 'siderbar',
        component: SiderbarComponent,
      },
      {
        path: 'user',
        component: UserComponent,
      },
      {
        path: 'event',
        component: EventComponent,
      },
      {
        path: 'ajouter',
        component: AjouterComponent,
      },
      {
        path: 'notification',
        component: NotificationComponent,
      },
      {
        path: 'restaurer-user',
        component: RestaurerUserComponent,
      },
      {
        path: 'ajouter-categorie',
        component: AjouterCategorieComponent,
      },
      {
        path: 'Categories',
        component: CategoriesComponent,
      },
      {
        path: 'modifier-categorie/:id',
        component: ModifierCategorieComponent,
      },
      {
        path: 'ajouter-type',
        component: AjouterTypeComponent,
      },
      {
        path: 'type',
        component: TypeComponent,
      },
      {
        path: 'modifier-type/:id',
        component: ModifierTypeComponent,
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
