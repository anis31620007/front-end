import { Component } from '@angular/core';
<<<<<<< HEAD
import { RadiologyComponent } from './radiology/radiology.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RadiologyComponent],
  template: '<app-radiology></app-radiology>', // Charge RadiologyComponent
})
export class AppComponent {}
=======

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projet-angular';
}
>>>>>>> 2b5b9e4fc289c5756d5603a1293d021ef79170a4
