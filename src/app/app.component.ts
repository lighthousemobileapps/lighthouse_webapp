import { Component, HostListener, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnChanges{

  isSmallScreen: boolean = false;
  title = 'lighthouse-webapp';

  ngOnChanges(changes: SimpleChanges): void {

  }

  @HostListener('window:resize', ['$event'])
  onResize(){
    this.isSmallScreen = window.innerWidth < 959;
  }
}
