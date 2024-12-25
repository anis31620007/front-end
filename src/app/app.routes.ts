
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { QRCodeModule } from 'angularx-qrcode';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { DossierpatientsComponent } from './pages/dossierpatients/dossierpatients.component';
import { FormsModule } from '@angular/forms';
// Ajoutez FormsModule dans l'importation de vos modules Angular.
import { QrPopupComponent } from './pages/qr-popup/qr-popup.component';  // Composant du popup
import { AppComponent } from './app.component';  // Composant principal
import { InfermierComponent } from './pages/infermier/infermier.component';
import{ GenerateQRCodeComponent}from './pages/generate-qrcode/generate-qrcode.component'

export const routes: Routes = [
 { path: '', component: LandingPageComponent},
  {path: 'patient', component: DossierpatientsComponent},
{path: 'landing', component:  LandingPageComponent},
{path: 'infermier', component:  InfermierComponent},
{ path: 'qr', component: GenerateQRCodeComponent},  // Route pour le composant principal
//{ path: 'popup', component: QrPopupComponent },  // Route pour afficher le popup QR
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}