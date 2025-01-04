import { DossierpatientsComponent } from './../dossierpatients/dossierpatients.component';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { userInterface } from '../info-patient-interface';
import { CommonModule } from '@angular/common';
interface Data {
  medicament: string;
  dose: string; 
  duree: string;
 
}
@Component({
  selector: 'app-popup-ordonnance',
  imports: [CommonModule,FormsModule],
  templateUrl: './popup-ordonnance.component.html',
  styleUrl: './popup-ordonnance.component.css'
})
export class PopupOrdonnanceComponent {
  Ordonnance = 
    { name: 'Ordonnance1', date: '24/10/2024', editing: false }
  ;
  doctor=
  {
    name:'something',
    address:'xxxxxxxxxx',
    phone:'0979320734',
  }
  TableData:Data[]=[
    {
      medicament: 'Ibuprofen',
      dose: '2 fois par jours',
      duree: '5jours',
      
    },
  
  ];
   patient:userInterface =     {
      name:'Sraich imene',
      age: 20,
      NSS: 12345678901,
      dateNaissance: '10/20/2004',
      NumTel: 658080305,
      Adresse: 'li_sraich@esi.dz',
      Contact: {
        Nom: "Imene",
        Tel: 932810938
      },
      Mutuelle: 'info sur la mutuelle'
    }
    showPopup=false;
    openPopup() {
      this.showPopup = true;
      document.body.style.overflow = 'hidden'; // Disables page scroll when popup is open
    }
  
    closePopup() {
      this.showPopup = false;
      document.body.style.overflow = 'auto'; // Re-enables page scroll when popup is closed
    }
}