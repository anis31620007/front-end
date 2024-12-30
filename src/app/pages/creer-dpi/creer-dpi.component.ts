import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-creer-dpi',
  imports: [CommonModule,FormsModule],
  templateUrl: './creer-dpi.component.html',
  styleUrls: ['./creer-dpi.component.css'],
})
export class CreerDpiComponent { // Variable pour contrôler la visibilité du popup
  patient = {
    nom: 'mesbah',
    prenom: 'nour el houda',
    nss: '123',
    telephone: '09090909',
    dateNaissance: '3/12/2004',
    adresse: 'ALGER',
    email: 'mn_mesbah@esi.dz',
  };

  isPopupVisible = false;

  savePatient() {
    this.isPopupVisible = true;
    console.log('Patient Saved:', this.patient);
  }

  closePopup() {
    this.isPopupVisible = false;
  }

  resetForm() {
    this.patient = {
      nom: '',
      prenom: '',
      nss: '',
      telephone: '',
      dateNaissance: '',
      adresse: '',
      email:'',
    };
  }
}

