import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-popup-soins',
 imports: [CommonModule,FormsModule],
  templateUrl: './popup-soins.component.html',
  styleUrl: './popup-soins.component.css'
})
export class PopupSoinsComponent {
  // Variable pour contrôler la visibilité de la popup
  isVisible: boolean = false;

  // Variable pour la date courante
  currentDate: string = this.getCurrentDate();

  // Méthode pour ouvrir la popup
  openPopup(): void {
    this.isVisible = true;
  }

  // Méthode pour fermer la popup
  closePopup(): void {
    this.isVisible = false;
  }

  // Méthode pour obtenir la date du jour au format JJ/MM/AAAA
  getCurrentDate(): string {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');  // Format jour
    const month = String(today.getMonth() + 1).padStart(2, '0');  // Format mois
    const year = today.getFullYear();  // Année

    return `${day}/${month}/${year}`;
  }
}