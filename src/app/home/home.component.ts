import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatButton, MatAnchor } from '@angular/material/button';
import { FlexModule } from '@angular/flex-layout/flex';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [NgFor, FlexModule, MatButton, RouterLink, MatAnchor, MatIcon]
})
export class HomeComponent  {

  stars: number[];
  mountains: number[];
  waves: number[];


  constructor() {
    this.stars = Array(60).fill(60, 1).map((x,i)=>i);
    this.mountains = Array(4).fill(4, 1).map((x,i)=>i);
    this.waves = Array(30).fill(30, 1).map((x,i)=>i);
   }


}
