
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { DossierpatientsComponent } from './pages/dossierpatients/dossierpatients.component';
import { ConsultationComponent } from './pages/consultation/consultation.component';
import { InfoPatientComponent } from './pages/info-patient/info-patient.component';
import { LaboratinComponent } from './pages/laboratin/laboratin.component';
import { ListSoinsComponent } from './pages/list-soins/list-soins.component';

export const routes: Routes = [
  { path: '', component: ListSoinsComponent},
  {path: 'Doctor', component: InfoPatientComponent},
{path: 'Consulatation', component:  ConsultationComponent},
{path: 'Laboratin', component:  LaboratinComponent},
{path: 'Liste-soins', component:  ListSoinsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}