import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BananaHttpService } from 'src/app/services';

@Component({
  selector: 'app-stickies',
  templateUrl: './stickies.component.html',
  styleUrls: ['./stickies.component.scss']
})
export class StickiesComponent implements OnInit {

  constructor(private route: ActivatedRoute, private bananaHttpService: BananaHttpService) { }

  ngOnInit(): void {
  }

}
