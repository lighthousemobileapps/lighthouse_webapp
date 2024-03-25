import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserRegistration } from '../models/user-registration/user-registration';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  public signUpForm!: FormGroup;
  public get _signUpForm(): FormGroup {
    return this.signUpForm;
  }

  constructor( private formBuilder : FormBuilder, public authService : AuthService ) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.minLength(6)],
      confirmPassword: ['', Validators.minLength(6)],
      fullName: [''],
      dob: [new Date],
      sex: [''],
      vehicleType: [''],
      country: ['']
    });
  }

  getErrorMessage() {
    if (this._signUpForm.controls.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this._signUpForm.controls.email.hasError('email') ? 'Not a valid email' : '';
  }

  signUp() {
    const userRegistration: UserRegistration = {
      email: this._signUpForm.controls.email.value,
      password: this._signUpForm.controls.password.value,
      confirmPassword: this._signUpForm.controls.confirmPassword.value,
      fullName: this._signUpForm.controls.fullName.value,
      dateOfBirth: new Date(this._signUpForm.controls.dob.value),
      sex: this._signUpForm.controls.sex.value,
      vehicleType: this._signUpForm.controls.vehicleType.value,
      accountType: 'Basic',
      planEstablished: new Date(),
      planExpires: new Date(),
      country: this._signUpForm.controls.country.value,
      autoRenew: false,
      emailVerified: false,
    }
    // this.authService.signUp(userRegistration);
  }
}
