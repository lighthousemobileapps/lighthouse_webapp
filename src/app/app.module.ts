import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './routing/app-routing.module';
import { provideFirebaseApp, initializeApp } from "@angular/fire/app";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { provideAuth, getAuth,  } from '@angular/fire/auth';
import { provideStorage, getStorage  } from '@angular/fire/storage';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { OfferingsComponent } from "./offerings/offerings.component";
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { environment } from '../environments/environment.prod';
import { LiveComponent } from './live/live.component';
import { PrivacyPolicyComponent } from './privacy/privacy-policy.component';
import { TermsAndConditionsComponent } from './terms/terms.component';
import { RecordingsComponent } from './recordings/list/recordings.component';
import { ViewRecordingComponent } from './recordings/view/view-recording.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    OfferingsComponent,
    HeaderComponent,
    SidenavListComponent,
    LoginComponent,
    AccountComponent,
    LiveComponent,
    PrivacyPolicyComponent,
    TermsAndConditionsComponent,
    RecordingsComponent,
    ViewRecordingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,

    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
