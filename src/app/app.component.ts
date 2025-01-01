import { Component } from '@angular/core';
import { RadiologyComponent } from './radiology/radiology.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RadiologyComponent],
  template: '<app-radiology></app-radiology>', // Charge RadiologyComponent
})
export class AppComponent {}
