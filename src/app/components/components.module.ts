import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ScanComponent } from './scan/scan.component';
import { TicketComponent } from './ticket/ticket.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [HomeComponent, ScanComponent, TicketComponent, AboutComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
