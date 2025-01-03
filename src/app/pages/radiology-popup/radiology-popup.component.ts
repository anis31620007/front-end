import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-radiology-popup',
  standalone: true,
  imports: [CommonModule], // Importez CommonModule pour ngIf
  templateUrl: './radiology-popup.component.html',
  styleUrls: ['./radiology-popup.component.css'],
})
export class RadiologyPopupComponent {
  @Input() isVisible: boolean = false;

  closePopup() {
    this.isVisible = false;
  }
}
