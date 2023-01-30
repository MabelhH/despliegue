import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { Environment } from 'src/environments/environment';
import { PagesModule } from './pages/pages.module';

 var config = {   
   apiKey: Environment.firebase.apiKey,
   authDomain: Environment.firebase.authDomain,
   projectId: Environment.firebase.projectId,
    storageBucket: Environment.firebase.storageBucket,
    messagingSenderId: Environment.firebase.messagingSenderId,
 }

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(Environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
