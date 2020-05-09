import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BananaHttpService } from './banana-http/banana-http.service';



@NgModule({
  declarations: [BananaHttpService],
  imports: [
    CommonModule
  ]
})
export class ServicesModule { }
