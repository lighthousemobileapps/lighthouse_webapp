import { Component, HostListener, OnInit } from '@angular/core';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from "@angular/material/sidenav";
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../navigation/header/header.component';
import { FlexModule } from '@angular/flex-layout/flex';
import { SidenavListComponent } from '../navigation/sidenav-list/sidenav-list.component';


@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    standalone: true,
    imports: [MatSidenavContainer, MatSidenav, SidenavListComponent, MatSidenavContent, FlexModule, HeaderComponent, RouterOutlet]
})
export class LayoutComponent implements OnInit {

  isSmallScreen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize(){
    this.isSmallScreen = window.innerWidth < 959;
  }

}
