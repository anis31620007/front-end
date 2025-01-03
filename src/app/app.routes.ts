
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { DossierpatientsComponent } from './pages/dossierpatients/dossierpatients.component';
import { CreerDpiComponent } from './pages/creer-dpi/creer-dpi.component';
import { ListePatientComponent } from './pages/liste-patient/liste-patient.component';
import { ListePatientDocteurComponent } from './pages/liste-patient-docteur/liste-patient-docteur.component';
import { DemandesBilanComponent } from './pages/demandes-bilan/demandes-bilan.component';
import { ListePatientInfermierComponent } from './pages/liste-patient-infermier/liste-patient-infermier.component';
import { LoginComponent } from './login/login.component';
import { InfermierComponent } from './pages/infermier/infermier.component';
import { GenerateQRCodeComponent } from './pages/generate-qrcode/generate-qrcode.component';
import { ConsultationComponent } from './pages/consultation/consultation.component';
import { LaboratinComponent } from './pages/laboratin/laboratin.component';
import { ListSoinsComponent } from './pages/list-soins/list-soins.component';
import { InfoPatientComponent } from './pages/info-patient/info-patient.component';
import { PopupOrdonnanceComponent } from './pages/popup-ordonnance/popup-ordonnance.component';



export const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'login', component: LoginComponent },
  {path: 'patient', component: DossierpatientsComponent},
  {path: 'landing', component:  LandingPageComponent},
  {path: 'creerdpi', component:  CreerDpiComponent},
  {path: 'listepatient', component:  ListePatientComponent},
  {path: 'listepatientdocteur', component:  ListePatientDocteurComponent},
  {path: 'listepatientinfermier', component:  ListePatientInfermierComponent},
  {path: 'demandesbilan', component:  DemandesBilanComponent},
  { path: 'infermier', component: InfermierComponent },
  { path: 'qr', component: GenerateQRCodeComponent }, // Route pour le composant principal
  { path: 'consultation', component: ConsultationComponent }, // Route pour le composant principal
  { path: 'laboratin', component: LaboratinComponent }, // Route pour le composant principal
  { path: 'soins', component: ListSoinsComponent }, // Route pour le composant principal
  { path: 'info', component: InfoPatientComponent }, // Route pour le composant principal
  { path: 'ordonnance', component: PopupOrdonnanceComponent }, // Route pour le composant principal
//{ path: 'popup', component: QrPopupComponent },  // Route pour afficher le popup QR




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
