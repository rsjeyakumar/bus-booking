import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./module/home/home.module').then(home => home.HomeModule)
  },
  {
    path: 'ticketbooking',
    loadChildren: () => import('./module/ticket-booking/ticket-booking.module').then(ticket => ticket.TicketBookingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppModuleRoutingModule { }
