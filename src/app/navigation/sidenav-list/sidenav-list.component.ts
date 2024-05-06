import { Component, OnInit, Output, EventEmitter, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})

export class SidenavListComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();

  // mediaSubscription: Subscription;
  isSidenavOpen = true;
  // isDesktop = true;
  // sidenavMode = 'side';
  // private activeMediaQuery = '';

  constructor(){}

  ngOnInit(): void {  }
  isSmallScreen: boolean = false;


  public onCloseClicked = () => this.sidenavClose.emit();

  public onMenuItemClicked = () => this.isSmallScreen ? this.sidenavClose.emit() : {};


  @HostListener('window:resize', ['$event'])
  onResize(){
    this.isSmallScreen = window.innerWidth < 959;
  }
}
