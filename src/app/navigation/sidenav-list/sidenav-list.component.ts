import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

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

  public onCloseSidenav = () => this.sidenavClose.emit();

}
