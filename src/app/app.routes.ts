
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { DossierpatientsComponent } from './pages/dossierpatients/dossierpatients.component';
import { CreerDpiComponent } from './pages/creer-dpi/creer-dpi.component';
import { ListePatientComponent } from './pages/liste-patient/liste-patient.component';
import { ListePatientDocteurComponent } from './pages/liste-patient-docteur/liste-patient-docteur.component';
import { DemandesBilanComponent } from './pages/demandes-bilan/demandes-bilan.component';
import { ListePatientInfermierComponent } from './pages/liste-patient-infermier/liste-patient-infermier.component';
import { PopupSoinsComponent } from './pages/popup-soins/popup-soins.component';
export const routes: Routes = [
  { path: '', component: LandingPageComponent},
  {path: 'patient', component: DossierpatientsComponent},
{path: 'landing', component:  LandingPageComponent},
{path: 'creerdpi', component:  CreerDpiComponent},
{path: 'listepatient', component:  ListePatientComponent},
{path: 'listepatientdocteur', component:  ListePatientDocteurComponent},
{path: 'listepatientinfermier', component:  ListePatientInfermierComponent},
{path: 'demandesbilan', component:  DemandesBilanComponent},
{ path: 'popupsoins', component: PopupSoinsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}