import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();
  @Input() isOpened: boolean | undefined;
  
  constructor(
    public authService: AuthService,
    public router: Router, 
  ) {  }

  ngOnInit(): void {
  }
  
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
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