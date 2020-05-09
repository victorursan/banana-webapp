import { Component, OnInit } from '@angular/core';
import { BananaHttpService } from 'src/app/services';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location, Role } from '../../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // locations$: Observable<Location[]>;
  // roles$: Observable<Role[]>;

  constructor(private route: ActivatedRoute, private bananaHttpService: BananaHttpService) {
    // this.listLocations();
    // this.listRoles();
  }

  ngOnInit(): void {

  }

  // listLocations(): void {
  //   this.locations$ = this.bananaHttpService.locations();
  //   this.locations$.subscribe(i => {
  //     console.log("", i)
  //   });
  // }

  // listRoles(): void {
  //   this.roles$ = this.bananaHttpService.roles();
  //   this.roles$.subscribe(i => {
  //     console.log("", i)
  //   });
  // }

}
