import { Component, OnInit, Output, EventEmitter, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() public sidenavToggle = new EventEmitter();
  @Input() isOpened: boolean | undefined = true;

  authService = inject(AuthService);
  router = inject(Router);


  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
    this.isOpened = !this.isOpened;
  }


  public onToggleLogin() {
    if(this.authService.isLoggedIn){
      this.authService.logout();
    }
    else {
      this.router.navigate(['login']);
    }
  }
}
