import { Injectable, NgZone } from '@angular/core';
// import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { AccountInfo } from '../models/account-info/account-info';

@Injectable({
  providedIn: 'root'
})
export class AccountService {


  info!: Observable<AccountInfo>;
  private currUser: any;

  constructor(private afs: AngularFirestore) {
    this.currUser = JSON.parse(localStorage.getItem('user')!);
    console.log(this.currUser['uid']);
    
    if(this.currUser != null){
      this.info = this.afs.collection('users').doc(`${this.currUser['uid']}`).valueChanges() as Observable<AccountInfo>;
    }
  }

  public update(info: AccountInfo){
  
      const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${this.currUser.uid}`);
  
      return userRef.update({
        'name' : info.name,
        'date_of_birth' : info.date_of_birth,
        'sex' : info.sex,
        'account_type' : info.account_type,
        'vehicle_type' : info.vehicle_type,
        'plan_established' : info.plan_established,
        'plan_expires' : info.plan_expires,
        'auto_renew' : info.auto_renew,
        'country' : info.country,
      });
    
  }
  
}