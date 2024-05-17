import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  stars: number[];
  mountains: number[];
  waves: number[];


  constructor() {
    this.stars = Array(60).fill(60, 1).map((x,i)=>i);
    this.mountains = Array(4).fill(4, 1).map((x,i)=>i);
    this.waves = Array(30).fill(30, 1).map((x,i)=>i);
   }

  ngOnInit(): void {
  }


}
