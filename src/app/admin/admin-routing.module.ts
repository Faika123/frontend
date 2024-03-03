import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SiderbarComponent } from './siderbar/siderbar.component';
import { UserComponent } from './user/user.component';
import { EventComponent } from './event/event.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

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
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
