import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FlexLayoutServerModule} from '@angular/flex-layout/server';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routes';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
      importProvidersFrom(BrowserModule, AppRoutingModule, FlexLayoutModule, FlexLayoutServerModule, AppRoutingModule, FormsModule, ReactiveFormsModule),
      provideClientHydration(),
      provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideFirestore(() => getFirestore()),
      provideAuth(() => getAuth()),
      provideStorage(() => getStorage()),
      provideAnimations(),
      provideRouter(routes)
  ]
};
