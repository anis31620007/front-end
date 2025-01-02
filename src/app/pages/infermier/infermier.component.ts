import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Pour la liaison ngModel
@Component({
  selector: 'app-infermier',
  imports: [
  
  ],
  templateUrl: './infermier.component.html',
  styleUrl: './infermier.component.css'
})
export class InfermierComponent {
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

  dateMedication: string = '';
  medicationDescription: string = '';
  dateNursingCare: string = '';
  nursingCareDescription: string = '';
  dateObservation: string = '';
  observationDescription: string = '';
  dateOther: string = '';
  otherDescription: string = '';
  

}
