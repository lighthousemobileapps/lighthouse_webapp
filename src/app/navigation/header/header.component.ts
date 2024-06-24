import { Component, OnInit, Output, EventEmitter, Input, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MatMenuTrigger, MatMenu, MatMenuItem } from '@angular/material/menu';
import { ExtendedModule } from '@angular/flex-layout/extended';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { FlexModule } from '@angular/flex-layout/flex';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [MatToolbar, FlexModule, NgIf, MatIconButton, MatIcon, RouterLink, ExtendedModule, MatMenuTrigger, MatMenu, MatMenuItem]
})
export class HeaderComponent {

  @Output() public sidenavOpen = new EventEmitter();
  @Input()
  public isOpened: boolean = true;


  authService = inject(AuthService);
  router = inject(Router);



  public onOpenSidenav = () => {
    this.sidenavOpen.emit();
  }

  public login() {
    if(!this.authService.isLoggedIn){
      this.authService.signInWithGoogle();
    }
  }
  public logout(){
    if(this.authService.isLoggedIn){
      this.authService.logout();
    }

  }

}
