import { Component, OnInit, Output, EventEmitter, Input, inject } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
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
