import { Injectable, NgZone, inject } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from "@angular/fire/auth";
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth: Auth = inject(Auth);
  router: Router = inject(Router)
  private provider = new GoogleAuthProvider();

  userData: any;


  async googleAuth(){
    await signInWithPopup(this.auth, this.provider).then(() => {
      this.router.navigate(['home']);
    });
  }
  // async signUp(userRegistration: UserRegistration) {
  //   return this.firebaseAuth.createUserWithEmailAndPassword(userRegistration.email, userRegistration.password)
  //     .then((result) => {
  //       /* Call the SendVerificaitonMail() function when new user sign
  //       up and returns promise */
  //       this.setUserData(result.user!, userRegistration);
  //       this.router.navigate(['verify-email']);
  //     }).catch((error) => {
  //       window.alert(error.message)
  //     })
  // }


      /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  // setUserData(user: firebase.User, userRegistration: UserRegistration) {

  //   user.updateProfile({
  //     displayName: userRegistration.fullName,
  //   });

  //   const userRef: AngularFirestoreDocument<any> = this.firestoreDB.doc(`users/${user.uid}`);

  //   return userRef.set({
  //     'name' : userRegistration.fullName,
  //     'date_of_birth' : userRegistration.dateOfBirth,
  //     'sex' : userRegistration.sex,
  //     'account_type' : 'Basic',
  //     'vehicle_type' : userRegistration.vehicleType,
  //     'plan_established' : userRegistration.planEstablished,
  //     'plan_expires' : userRegistration.planExpires,
  //     'auto_renew' : userRegistration.autoRenew,
  //     'country' : userRegistration.country,
  //   }, {
  //     merge: true
  //   })
  // }

  logout(){
    this.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    });
  }

  get isLoggedIn(): boolean {
    const token = JSON.parse(localStorage.getItem('user')!);
    const user = JSON.parse(token as string);
    return user == null;
  }
}
