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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
