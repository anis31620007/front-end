import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QrPopupComponent } from '../qr-popup/qr-popup.component';
import { CommonModule } from '@angular/common';
import QRCode from 'qrcode';
import { ChangeDetectorRef } from '@angular/core';
import { RadiologyPopupComponent } from '../radiology-popup/radiology-popup.component';

@Component({
  selector: 'app-dossierpatients',
  imports: [CommonModule,RadiologyPopupComponent], // Ajoutez cette ligne pour résoudre le problème de *ngIf
  templateUrl: './dossierpatients.component.html',
  styleUrl: './dossierpatients.component.css',
})
export class DossierpatientsComponent {
  currentRoute: string = '';

  // constructor(private router: Router) {}

  /* ngOnInit(): void {
    this.currentRoute = this.router.url; // Récupère la route actuelle
  }*/
  //isQrPopupOpen: boolean = false;
  // qrCodeData: string = '';

  qrCodeDataUrl: string | null = null;
  isPopupVisible: boolean = false;

  constructor(private cdr: ChangeDetectorRef) {}

  async generateQRCode() {
    console.log('Bouton cliqué : génération du QR Code');
    try {
      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      console.log('Nombre aléatoire généré :', randomNumber);

      // Générer le QR Code avec ce nombre
      this.qrCodeDataUrl = await QRCode.toDataURL(randomNumber.toString());
      // const qrCodeValue = '2004'; // Valeur à encoder
      //  this.qrCodeDataUrl = await QRCode.toDataURL(qrCodeValue);
      console.log('QR Code généré :', this.qrCodeDataUrl);
      this.isPopupVisible = true;
      this.cdr.detectChanges(); // Force Angular à détecter les changements
    } catch (error) {
      console.error('Erreur lors de la génération du QR Code:', error);
    }
  }

  closePopup() {
    console.log('Popup fermé');
    this.isPopupVisible = false;
    this.cdr.detectChanges(); // Force Angular à détecter les changements
  }
  issPopupVisible: boolean = false;

  showPopup() {
    console.log('Popup button clicked!');
    this.issPopupVisible = true;
  }
}
