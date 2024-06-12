import { Injectable, NgZone, inject } from '@angular/core';
// import { AngularFireAuth } from "@angular/fire/auth";
import { Firestore, collection, doc, addDoc, setDoc, docData } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { AccountInfo } from '../models/account-info/account-info';
import { AuthService } from './auth.service';
// import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Injectable({
  providedIn: 'root'
})
export class AccountService {


  authService = inject(AuthService);
  info!: Observable<AccountInfo>;
  private currUser: any;

  constructor(private firestore: Firestore) {


    if(this.currUser != null){
      this.info = docData(doc(this.firestore, `users/${this.authService.uid}`)) as Observable<AccountInfo>;
      // this.info = this.firestore.collection('users').doc(`${this.currUser['uid']}`).valueChanges() as Observable<AccountInfo>;
    }
  }

  public update(info: AccountInfo){

      const accountInfo = {
        'name' : info.name,
        'dark_mode' : info.darkMode,
        'account_type' : info.account_type,
      };

      // const userRef = collection(this.firestore, `users/${this.currUser.uid}`);
      setDoc(doc(this.firestore, `users/${this.currUser.uid}`), {...accountInfo});

  }

  public delete(){
    this.authService.delete()
  }

}
