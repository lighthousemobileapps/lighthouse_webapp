import { Component, Output, EventEmitter, OnDestroy, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FlexModule } from '@angular/flex-layout/flex';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
    selector: 'app-sidenav-list',
    templateUrl: './sidenav-list.component.html',
    styleUrls: ['./sidenav-list.component.scss'],
    standalone: true,
    imports: [MatListModule, MatIconModule, FlexModule, RouterLink]
})

export class SidenavListComponent {

  @Output() sidenavClose = new EventEmitter();

  isSidenavOpen = true;

  constructor(){}

  isSmallScreen: boolean = false;


  public onCloseClicked = () => this.sidenavClose.emit();

  public onMenuItemClicked = () => this.isSmallScreen ? this.sidenavClose.emit() : {};


  @HostListener('window:resize', ['$event'])
  onResize(){
    this.isSmallScreen = window.innerWidth < 959;
  }
}
