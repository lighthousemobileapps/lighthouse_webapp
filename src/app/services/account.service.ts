import { Injectable, NgZone } from '@angular/core';
// import { AngularFireAuth } from "@angular/fire/auth";
import { Firestore, collection, doc, addDoc, setDoc, docData } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { AccountInfo } from '../models/account-info/account-info';
// import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Injectable({
  providedIn: 'root'
})
export class AccountService {


  info!: Observable<AccountInfo>;
  private currUser: any;

  constructor(private firestore: Firestore) {
    this.currUser = JSON.parse(localStorage.getItem('user')!);
    console.log(this.currUser['uid']);

    if(this.currUser != null){
      this.info = docData(doc(this.firestore, `users/${this.currUser['uid']}`)) as Observable<AccountInfo>;
      // this.info = this.firestore.collection('users').doc(`${this.currUser['uid']}`).valueChanges() as Observable<AccountInfo>;
    }
  }

  public update(info: AccountInfo){

      const accountInfo = {
        'name' : info.name,
        'date_of_birth' : info.date_of_birth,
        'sex' : info.sex,
        'account_type' : info.account_type,
        'vehicle_type' : info.vehicle_type,
        'plan_established' : info.plan_established,
        'plan_expires' : info.plan_expires,
        'auto_renew' : info.auto_renew,
        'country' : info.country,
      };

      // const userRef = collection(this.firestore, `users/${this.currUser.uid}`);
      setDoc(doc(this.firestore, `users/${this.currUser.uid}`), {...accountInfo});


  }

}
