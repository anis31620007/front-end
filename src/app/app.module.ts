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
import { GenerateQRCodeComponent } from './pages/generate-qrcode/generate-qrcode.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreerDpiComponent,
    GenerateQRCodeComponent
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


  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
