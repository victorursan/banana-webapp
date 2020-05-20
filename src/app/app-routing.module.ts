import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppAuthGuard } from './app.authguard';
import { HomeComponent, AboutComponent, ScanComponent, TicketComponent, TicketsComponent,
   PersonnelComponent, StickiesComponent, LocationsComponent, MyTicketsComponent } from './components';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'my-tickets',
    component: MyTicketsComponent,
    canActivate: [AppAuthGuard],
    data: { roles: ['member'] }
  },
  {
    path: 'tickets',
    component: TicketsComponent,
    canActivate: [AppAuthGuard],
    data: { roles: ['community'] }
  },
  {
    path: 'scan/:stickyLocationId',
    component: ScanComponent,
    canActivate: [AppAuthGuard],
    data: { roles: ['member'] }
  },
  {
    path: 'ticket/:ticketId',
    component: TicketComponent,
    canActivate: [AppAuthGuard],
    data: { roles: ['member'] }
  },
  {
    path: 'stickies',
    component: StickiesComponent,
    canActivate: [AppAuthGuard],
    data: { roles: ['admin'] }
  },
  {
    path: 'personnel',
    component: PersonnelComponent,
    canActivate: [AppAuthGuard],
    data: { roles: ['admin'] }
  },
  {
    path: 'locations',
    component: LocationsComponent,
    canActivate: [AppAuthGuard],
    data: { roles: ['admin'] }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AppAuthGuard]
})
export class AppRoutingModule { }
