import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from '../create-account/create-account.component';
import { FeaturesComponent } from '../features/features.component';
import { SupportComponent } from '../support/support.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { VerifyEmailComponent } from '../verify-email/verify-email.component';
import { AccountComponent } from '../account/account.component';
import { AuthGuard } from '../services/guard/auth.guard';
import { LiveComponent } from '../live/live.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'live', component: LiveComponent, canActivate: [AuthGuard] },
  { path: 'features', component: FeaturesComponent },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuard]},
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'login', component: LoginComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
  { path: 'support', component: SupportComponent },
  { path: 'terms-of-use', component: CreateAccountComponent },
  { path: 'privacy-policy', component: SupportComponent }
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
