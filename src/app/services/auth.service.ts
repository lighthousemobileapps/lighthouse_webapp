import { Injectable, NgZone, OnDestroy, inject } from '@angular/core';
import { Auth, onAuthStateChanged , GoogleAuthProvider, signInWithPopup, user, deleteUser, reauthenticateWithCredential, User } from "@angular/fire/auth";
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
// import { User, getAuth, onAuthStateChanged } from 'firebase/auth';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth: Auth = inject(Auth);
  // user = user(this.auth);
  router: Router = inject(Router)

  private provider = new GoogleAuthProvider();

  public isLoggedIn: boolean = false;
  uid: string | undefined;
  token: string | undefined;
  user: User | undefined;


  // userData: any;

  constructor(){
    onAuthStateChanged(this.auth, async (user) => {
      if (user) {
        this.user = user;
        this.isLoggedIn = true;
        this.uid = user.uid;
        this.token = await user.getIdToken(true);
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        // ...
      } else {
        this.isLoggedIn = false;
        this.user = undefined;
        // User is signed out
        // ...
      }
    });
  }




  async signInWithGoogle(){
    await signInWithPopup(this.auth, this.provider).then((result) => {
      // const  credential = GoogleAuthProvider.credentialFromResult(result);
      // localStorage.setItem('user', JSON.stringify(result.user));
      // JSON.parse(localStorage.getItem('user')!);
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

  async delete(){
    if(this.user != undefined){
      await deleteUser(this.user!).then(() =>{
        this.router.navigate(['home']);
      }).catch((error) =>{
        error
      })
    }

  }

  // get isLoggedIn(): boolean {
  //   const user = JSON.parse(localStorage.getItem('user')!);
  //   // this.user = JSON.parse(token as string);
  //   return user == null;
  // }
}
