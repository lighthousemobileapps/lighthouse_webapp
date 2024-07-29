import { Component, HostListener } from '@angular/core';
import { MatSidenavModule } from "@angular/material/sidenav";
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../navigation/header/header.component';
import { FlexModule } from '@angular/flex-layout/flex';
import { SidenavListComponent } from '../navigation/sidenav-list/sidenav-list.component';


@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    standalone: true,
    imports: [MatSidenavModule, SidenavListComponent, FlexModule, HeaderComponent, RouterOutlet]
})
export class LayoutComponent {

  isSmallScreen: boolean = false;

  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(){
    this.isSmallScreen = window.innerWidth < 959;
  }

}
