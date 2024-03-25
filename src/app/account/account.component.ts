import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountInfo } from "../models/account-info/account-info";
// import { DisplayInfo } from "../models/display-info/display-info";
import { AccountService } from '../services/account.service';


interface AutoRenew {
  value: boolean,
  viewValue: string
}

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  // Dropdown options
  sexes: String[] = ['Male', 'Female'];
  accountTypes: String[] = ['1 month', '3 month', '6 month', '12 month'];
  vehicles: String[] = ['Motorcycle', 'Car', 'Truck', 'Van'];
  countries: String[] = ['Republic of Ireland', 'UK', 'France', 'USA'];
  autoRenew: AutoRenew[] = [{value: true, viewValue: 'Yes'}, {value: false, viewValue: 'No'}]


  // initialise info with empties
  info: AccountInfo = {
    name: '',
    country: '',
    date_of_birth: new Date(),
    sex: 'test',
    vehicle_type: 'test',
    account_type: '',
    plan_established: new Date(),
    plan_expires: new Date(),
    auto_renew: true,
  }
  public updateAccountForm!: FormGroup;
  public get getUpdateAccountForm(): FormGroup {
    return this.updateAccountForm;
  }
  constructor( private formBuilder : FormBuilder, private accountService : AccountService ) {}


  ngOnInit(): void {

    this.accountService.info?.subscribe( data => {
      this.info = {
        name: data?.name,
        country: data?.country,
        date_of_birth: new Date(+(data.date_of_birth?.toString().split(',')[0].split('=')[1])*1000),
        sex: data?.sex,
        vehicle_type: data.vehicle_type,
        account_type: data.account_type,
        plan_established: new Date(+(data?.plan_established.toString().split(',')[0].split('=')[1])*1000),
        plan_expires: new Date(+(data?.plan_expires.toString().split(',')[0].split('=')[1])*1000),
        auto_renew: data?.auto_renew,
      }

      this.updateAccountForm = this.formBuilder.group({
        name: [this.info.name, Validators.minLength(3)],
        dob: [this.info.date_of_birth],
        sex: [this.info.sex],
        vehicleType: [this.info.vehicle_type],
        accountType: [this.info.account_type],
        country: [this.info.country],
        auto_renew: [this.info.auto_renew]
      });
      this.updateAccountForm;

    });
  }

  public updateAccountInfo() {
    this.info = {
      name: this.getUpdateAccountForm.controls.name.value,
      country: this.getUpdateAccountForm.controls.country.value,
      date_of_birth: new Date(this.getUpdateAccountForm.controls.dob.value),
      sex: this.getUpdateAccountForm.controls.sex.value,
      vehicle_type: this.getUpdateAccountForm.controls.vehicleType.value,
      account_type: this.getUpdateAccountForm.controls.accountType.value,
      plan_established: new Date(),
      plan_expires: new Date(),
      auto_renew: this.getUpdateAccountForm.controls.autoRenew.value,
    }
    this.accountService.update(this.info);
  }

}
