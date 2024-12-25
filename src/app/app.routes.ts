
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { DossierpatientsComponent } from './pages/dossierpatients/dossierpatients.component';
import { ConsultationComponent } from './pages/consultation/consultation.component';
import { InfoPatientComponent } from './pages/info-patient/info-patient.component';

export const routes: Routes = [
  { path: '', component: ConsultationComponent},
  {path: 'patient', component: InfoPatientComponent},
{path: 'landing', component:  ConsultationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}