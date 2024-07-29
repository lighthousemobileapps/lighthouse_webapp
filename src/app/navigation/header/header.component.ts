import { Component, Output, EventEmitter, Input, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MatMenuModule } from '@angular/material/menu';
import { ExtendedModule } from '@angular/flex-layout/extended';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { FlexModule } from '@angular/flex-layout/flex';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [MatToolbarModule, FlexModule, NgIf, MatButtonModule, MatIconModule, RouterLink, ExtendedModule, MatMenuModule]
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
