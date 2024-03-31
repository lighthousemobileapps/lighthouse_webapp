import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountInfo } from "../models/account-info/account-info";
import { AccountService } from '../services/account.service';
import { MatFormFieldModule, FloatLabelType } from '@angular/material/form-field';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  providers: [AccountService]
})
export class AccountComponent {

  accountService = inject(AccountService);
  newsletterControl = new FormControl(false);
  accountTypeControl = new FormControl('basic' as FloatLabelType);

  settingsForm: FormGroup  = this._formBuilder.group(
    {
      newsletter: this.newsletterControl,
      account_type: this.accountTypeControl,
    }
  );

  accountInfo: AccountInfo = {
    name: '',
    newsletter: false,
    account_type: '',
  }

  constructor(private _formBuilder: FormBuilder){}


  public updateSettings() {
    this.accountService.update(this.accountInfo);
    this.accountInfo = {
      name: '',
      // name: this.settingsForm.controls.name.value,
      newsletter: this.settingsForm.controls.newsletter.value,
      account_type: this.settingsForm.controls.accountType.value,
    }
  }

}
