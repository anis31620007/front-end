import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';  // Composant de connexion
// import { HttpClientModule } from '@angular/common/http'; 
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { CreerDpiComponent } from './pages/creer-dpi/creer-dpi.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreerDpiComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    // HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
],
  providers: [provideHttpClient()],
  // providers: [],


  bootstrap: [AppComponent]
})
export class AppModule { }
