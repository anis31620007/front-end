import { Component } from '@angular/core';
<<<<<<< HEAD
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
=======
>>>>>>> 6344da3 (initial commit)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
<<<<<<< HEAD
  title = 'projet-angular';
}
>>>>>>> 2b5b9e4fc289c5756d5603a1293d021ef79170a4
=======
  title = 'popup-project';
}
>>>>>>> 6344da3 (initial commit)
