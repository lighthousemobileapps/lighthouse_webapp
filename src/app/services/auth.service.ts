import { Injectable, inject } from '@angular/core';
import { Auth, onAuthStateChanged , GoogleAuthProvider, signInWithPopup, signOut, deleteUser, User } from "@angular/fire/auth";
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


  async logout(){
    if(this.user != undefined){
      await signOut(this.auth).then(() =>{
        this.router.navigate(['home']);
      }).catch((error) =>{
        error
      })
    };
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
}
