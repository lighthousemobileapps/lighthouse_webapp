import { NgModule, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OfferingsComponent } from '../offerings/offerings.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { AccountComponent } from '../account/account.component';
import { AuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import { LiveComponent } from '../live/live.component';
import { AuthService } from '../services/auth.service';
import { PrivacyPolicyComponent } from '../privacy/privacy-policy.component';
import { TermsAndConditionsComponent } from '../terms/terms.component';
import { RecordingsComponent } from '../recordings/list/recordings.component';
import { ViewRecordingComponent } from '../recordings/view/view-recording.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'live', component: LiveComponent, canActivate: [AuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  { path: 'recordings', component: RecordingsComponent, canActivate: [AuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  { path: 'view-recording', component: ViewRecordingComponent, canActivate: [AuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  { path: 'offerings', component: OfferingsComponent },
  { path: 'account', component: AccountComponent, canActivate: [() => inject(AuthService).isLoggedIn]},
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard], data: {authGuardPipe: redirectLoggedInToHome} },
  { path: 'terms', component: TermsAndConditionsComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
