import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Assurez-vous d'importer le standalone component

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
