
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { DossierpatientsComponent } from './pages/dossierpatients/dossierpatients.component';
import { CreerDpiComponent } from './pages/creer-dpi/creer-dpi.component';


export const routes: Routes = [
  { path: '', component: DossierpatientsComponent},
  {path: 'patient', component: DossierpatientsComponent},
{path: 'landing', component:  LandingPageComponent},
{path: 'creerdpi', component:  CreerDpiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}