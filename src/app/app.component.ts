
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RadiologyPopupComponent } from './pages/radiology-popup/radiology-popup.component'; // Import correct
import { BilanPopupComponent } from './pages/bilan-popup/bilan-popup.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,     FormsModule,
    RadiologyPopupComponent /* BloodTestPopupComponent*/,
    BilanPopupComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projet-angular';
  showPopup = false;

  bilanData = [
    { parametre: 'Glycémie', resultat: 1.1, valeurUsuelle: 1.1 },
    { parametre: 'Cholestérol', resultat: 2.3, valeurUsuelle: 2.3 },
  ];

  date = '28/12/2024';

  togglePopup() {
    this.showPopup = !this.showPopup;
  }

}
