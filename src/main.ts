import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app/routing/app-routing.module';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment as environment_1 } from './environments/environment.prod';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideClientHydration, BrowserModule, bootstrapApplication } from '@angular/platform-browser';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule, FlexLayoutModule, AppRoutingModule, FormsModule, ReactiveFormsModule),
        provideClientHydration(),
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
        provideAuth(() => getAuth()),
        provideStorage(() => getStorage()),
        provideAnimations()
    ]
})
  .catch(err => console.error(err));
