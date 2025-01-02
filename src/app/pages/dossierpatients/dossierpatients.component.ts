import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QrPopupComponent } from '../qr-popup/qr-popup.component';
import { CommonModule } from '@angular/common';
import QRCode from 'qrcode';
import { ChangeDetectorRef } from '@angular/core';
import { RadiologyPopupComponent } from '../radiology-popup/radiology-popup.component';
import { BilanPopupComponent } from '../bilan-popup/bilan-popup.component';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dossierpatients',
  standalone: true,
  imports: [    FormsModule,
    CommonModule,RadiologyPopupComponent, BilanPopupComponent], // Ajoutez cette ligne pour résoudre le problème de *ngIf
  templateUrl: './dossierpatients.component.html',
  styleUrl: './dossierpatients.component.css',
})
export class DossierpatientsComponent  {
  currentRoute: string = '';
  bilans: any[] = []; // Tableau pour stocker les données récupérées
 
  patient = {
    name: 'John Doe',
    age: 30,
    NSS: '123-45-6789',
    dateNaissance: '1994-01-01',
    NumTel: '1234567890',
    Email: 'john.doe@example.com',
    Contact: { Nom: 'Jane Doe', Tel: '9876543210' },
    Mutuelle: 'HealthCare Inc.'
  };
  antecedents = [
    {
      icon: 'assets/images/maladie.png',
      backgroundColor: 'bg-blue-100',
      title: 'Maladies chroniques',
      description: 'test tes ',
      isImage: true, // Indique si l'icône est une image
    },
    {
      icon: 'bx bx-droplet text-red-500',
      backgroundColor: 'bg-red-100',
      title: 'Urgences liées au diabète',
      description: 'Description...',
      isImage: false, // Indique si l'icône est une classe
    },
    {
      icon: 'assets/images/chir.png',
      backgroundColor: 'bg-green-100',
      title: 'Chirurgie',
      description: 'Description...',
      isImage: true,
    },
    {
      icon: 'bx bx-group text-yellow-500',
      backgroundColor: 'bg-yellow-100',
      title: 'Maladies familiales',
      description: 'Description...',
      isImage: false,
    },
    {
      icon: 'bx bx-band-aid text-purple-500',
      backgroundColor: 'bg-purple-100',
      title: 'Complications associées',
      description: 'Description...',
      isImage: false,
    }
  ];

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
     // const randomNumber = Math.floor(1000 + Math.random() * 9000);
     // console.log('Nombre aléatoire généré :', randomNumber);

      // Générer le QR Code avec ce nombre
      this.qrCodeDataUrl = await QRCode.toDataURL(this.patient.NSS);
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
  sshowPopup = false;


  bilanData = [
    { parametre: 'Glycémie', resultat: 1.1, valeurUsuelle: 1.1 },
    { parametre: 'Cholestérol', resultat: 2.3, valeurUsuelle: 2.3 },
  ];


  date = '28/12/2024';
  //constructor(private bilanService: BilanService) {}


  togglePopup() {
    this.sshowPopup = !this.sshowPopup;
  }

}
