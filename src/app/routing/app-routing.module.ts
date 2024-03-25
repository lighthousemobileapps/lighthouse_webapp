import { NgModule, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { CreateAccountComponent } from '../create-account/create-account.component';
import { FeaturesComponent } from '../features/features.component';
import { SupportComponent } from '../support/support.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
// import { VerifyEmailComponent } from '../verify-email/verify-email.component';
import { AccountComponent } from '../account/account.component';
import { AuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import { LiveComponent } from '../live/live.component';
import { AuthService } from '../services/auth.service';
import { PrivacyPolicyComponent } from '../privacy/privacy-policy.component';
import { TermsAndConditionsComponent } from '../terms/terms.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'live', component: LiveComponent, canActivate: [AuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  { path: 'features', component: FeaturesComponent },
  { path: 'account', component: AccountComponent, canActivate: [() => inject(AuthService).isLoggedIn]},
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard], data: {authGuardPipe: redirectLoggedInToHome} },
  // { path: 'verify-email', component: VerifyEmailComponent },
  { path: 'support', component: SupportComponent },
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
