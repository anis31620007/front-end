import { Component, Output, EventEmitter } from '@angular/core';
import QRCode from 'qrcode';
import { ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-generate-qrcode',
  templateUrl: './generate-qrcode.component.html',
  styleUrls: ['./generate-qrcode.component.css'],
  standalone: true,
  imports: [CommonModule], // Ajoutez cette ligne pour résoudre le problème de *ngIf
})
export class GenerateQRCodeComponent {
  qrCodeDataUrl: string | null = null;
  isPopupVisible: boolean = false;

  // @Output() closePopup = new EventEmitter<void>();
  @Output() popupClosed: EventEmitter<void> = new EventEmitter<void>();

  constructor(private cdr: ChangeDetectorRef) {}

  async generateQRCode() {
    console.log('Bouton cliqué : génération du QR Code');
    try {
      const qrCodeValue = '2004'; // Valeur à encoder
      this.qrCodeDataUrl = await QRCode.toDataURL(qrCodeValue);
      console.log('QR Code généré :', this.qrCodeDataUrl);
      this.isPopupVisible = true;
      this.cdr.detectChanges(); // Force Angular à détecter les changements
    } catch (error) {
      console.error('Erreur lors de la génération du QR Code:', error);
    }
  }

  closePopup() {
    console.log('Popup closed');
    this.isPopupVisible = false; // Hide the popup
    this.popupClosed.emit(); // Emit an event to notify the parent
    this.cdr.detectChanges(); // Ensure Angular detects changes
  }



}
