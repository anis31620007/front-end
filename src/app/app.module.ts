<<<<<<< HEAD
<<<<<<< HEAD
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [BrowserModule],
  bootstrap: [],
  declarations: [
  
    
  ] // Aucun composant autonome ici
})
export class AppModule {}
=======
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';  // Composant de connexion
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms'; // Formulaire pour login


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    LoginComponent
],
=======
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
>>>>>>> 6344da3 (initial commit)
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
<<<<<<< HEAD
>>>>>>> 2b5b9e4fc289c5756d5603a1293d021ef79170a4
=======
>>>>>>> 6344da3 (initial commit)
