<<<<<<< HEAD
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Assurez-vous d'importer le standalone component

bootstrapApplication(AppComponent)
=======
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
>>>>>>> 2b5b9e4fc289c5756d5603a1293d021ef79170a4
  .catch(err => console.error(err));
