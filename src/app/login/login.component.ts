import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
// implements OnInit {

  authService = inject(AuthService);
  isLoading: boolean = false;
  public loginForm!: FormGroup;
  public get _loginform(): FormGroup {
    return this.loginForm;
  }


  // constructor( private formBuilder : FormBuilder, public authService : AuthService ) { }

  // ngOnInit() {
  //   this.loginForm = this.formBuilder.group({
  //     email: ['', Validators.email],
  //     password: ['']
  //   });
  // }

  login() {
    // this.isLoading = true;
    this.authService.signInWithGoogle();
    // this.isLoading = false;
  }

}
