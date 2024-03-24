import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase';
import { UserRegistration } from '../models/user-registration/user-registration';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private firestoreDB: AngularFirestore,   // Inject Firestore service
    public router: Router,  
    public ngZone: NgZone // NgZone service to remove outside scope warning
    ) {
      this.firebaseAuth.authState.subscribe(user => {
        if (user) {
          this.userData = user;
          localStorage.setItem('user', JSON.stringify(this.userData));
          JSON.parse(localStorage.getItem('user')!);
        } else {
          localStorage.setItem('user', 'null');
          JSON.parse(localStorage.getItem('user')!);
        }
      });
    }

  async login(email:string, password:string) {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
    .then((result) => {
      this.ngZone.run(() => {
        this.router.navigate(['account']);
      });
    }).catch((error) => {
      window.alert(error);
    })
  }
  async signUp(userRegistration: UserRegistration) {
    return this.firebaseAuth.createUserWithEmailAndPassword(userRegistration.email, userRegistration.password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign
        up and returns promise */
        this.setUserData(result.user!, userRegistration);
        this.router.navigate(['verify-email']);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

    // Send email verfificaiton when new user sign up
    sendVerificationEmail() {
      this.firebaseAuth.currentUser.then(
        (user) => {
          user?.sendEmailVerification();
        }
      ).catch((error) => {
        window.alert(error.message)
      });
      this.router.navigate(['home']);
    }
  
    // Reset Forggot password
    forgotPassword(passwordResetEmail:  any) {
      return this.firebaseAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error) => {
        window.alert(error)
      })
    }

      /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  setUserData(user: firebase.User, userRegistration: UserRegistration) {
  
    user.updateProfile({
      displayName: userRegistration.fullName,
    });

    const userRef: AngularFirestoreDocument<any> = this.firestoreDB.doc(`users/${user.uid}`);

    return userRef.set({
      'name' : userRegistration.fullName,
      'date_of_birth' : userRegistration.dateOfBirth,
      'sex' : userRegistration.sex,
      'account_type' : 'Basic',
      'vehicle_type' : userRegistration.vehicleType,
      'plan_established' : userRegistration.planEstablished,
      'plan_expires' : userRegistration.planExpires,
      'auto_renew' : userRegistration.autoRenew,
      'country' : userRegistration.country,
    }, {
      merge: true
    })
  }

  logout(){
    this.firebaseAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    });
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    if(user !== null){
      return user.emailVerified;
    }
    return false;
  }
}
