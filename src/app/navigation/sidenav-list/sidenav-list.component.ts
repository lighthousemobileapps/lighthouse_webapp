import { Component, Output, EventEmitter, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
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
