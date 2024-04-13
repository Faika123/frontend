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
        path: 'categorie',
        component: CategorieComponent,
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
