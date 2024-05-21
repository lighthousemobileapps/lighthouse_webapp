import { Component, HostListener, OnInit, inject } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit{
 isDarkMode: boolean= false;
  ngOnInit(): void {
    this.loadData();
  }

  authService = inject(ThemeService);

  isSmallScreen: boolean = false;
  title = 'lighthouse-webapp';


  loadData(){
    this.isDarkMode = this.authService.isDarkMode();

  }

  @HostListener('window:resize', ['$event'])
  onResize(){
    this.isSmallScreen = window.innerWidth < 959;
  }
}
