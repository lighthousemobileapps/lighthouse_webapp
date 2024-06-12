import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountInfo } from "../models/account-info/account-info";
import { AccountService } from '../services/account.service';
import { MatFormFieldModule, FloatLabelType } from '@angular/material/form-field';
import { ThemeService } from '../services/theme.service';
import { AuthService } from '../services/auth.service';
import { MatButton } from '@angular/material/button';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { FlexModule } from '@angular/flex-layout/flex';


@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss'],
    providers: [AccountService],
    standalone: true,
    imports: [FlexModule, MatSlideToggle, MatButton]
})
export class AccountComponent {

  authService = inject(AuthService);
  accountService = inject(AccountService);
  themeService = inject(ThemeService);
  themeControl = new FormControl(false);
  accountTypeControl = new FormControl('basic' as FloatLabelType);

  settingsForm: FormGroup  = this._formBuilder.group(
    {
      theme: this.themeControl,
      account_type: this.accountTypeControl,
    }
  );

  accountInfo: AccountInfo = {
    name: '',
    darkMode: false,
    account_type: '',
  }


  constructor(private _formBuilder: FormBuilder){}


  public updateSettings() {
    this.accountService.update(this.accountInfo);
    this.accountInfo = {
      name: '',
      darkMode: this.settingsForm.controls['theme'].value,
      account_type: this.settingsForm.controls['accountType'].value,
    }
  }

  toggleDarkMode(){
    this.themeService.toggleDarkMode();
  }

  deleteAccount(){
    this.authService.delete();
  }

}
