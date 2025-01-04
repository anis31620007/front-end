import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { userInterface, Consultation, PatientInfo} from '../info-patient-interface';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { InfoPatientServices } from './info-patient_services';
import { OnInit } from '@angular/core';
import { TransferService } from '../../transfer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ListService } from '../../list.service';


@Component({
  selector: 'app-info-patient',
  standalone: true,
  imports: [FormsModule,CommonModule],//RouterOutlet
  providers:[InfoPatientServices],
  templateUrl: './info-patient.component.html',
  styleUrl: './info-patient.component.css'
})
export class InfoPatientComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private transferService: TransferService, private listService: ListService) {}
  info: any[] = [];
  testzest: JSON= {} as JSON;
  nss: string = '';
  
  patient:userInterface =     {
    // name:this.info[0].nom + ' ' + this.info[0].prenom,
    name: '',
    age:20,
    NSS: 0,
    dateNaissance: '10/20/2004',
    NumTel: 0,
    Adresse: '',
    Contact: {
      Nom: "",
      Tel: 0
    },
    Mutuelle: ''
  }

  consultations = [
    { name: 'Consultation1', date: '24/10/2024', editing: false }
  ];
  


  ngOnInit(): void {
      this.info = this.transferService.getDpiDetails();
      console.log("Test info received from service:", this.info);
      this.route.queryParams.subscribe(params => {
        this.nss = params['nss']; 
      });
      if (this.nss) {
        this.fetchDPI(this.nss);
        console.log('NSS:', this.nss);
      }
  }

  fetchDPI(nss: string): void {
    this.listService.voirDPI(nss).subscribe(
      (data) => {
        console.log('DPI Data:', data);
        this.patient = {
          name: data.dpi.Nom,
          age: 20,
          NSS: data.dpi.NSS,
          dateNaissance: data.dpi.DateDeNaissonce,
          NumTel: data.dpi.Numero,
          Adresse: data.dpi.Adress,
          Contact: {
            Nom: data.dpi.ContactNom,
            Tel: data.dpi.ContactNumero
          },
          Mutuelle: data.dpi.Mutuelle,
        };

        this.consultations = data.consultations.map((consultation: any) => ({
          name: `Consultation ${consultation.IdConsultation}`,
          date: new Date(consultation.created_at).toLocaleDateString(), // Format date
          editing: false, // Initially set editing to false
          resume: consultation.resume // Include the resume or any additional data if needed
        }));

        console.log('Patient:', this.patient);
        console.log('Consultations:', this.consultations);	

        
      },
      (error) => {
        console.error('Error fetching DPI:', error);
        alert('Failed to fetch DPI. Please try again.');
      }
    );
    }
    

    // Array to hold consultations
  
  isNameValid= true; 
  // Add a new consultation

  addConsultation(): void {
    const today = new Date();
    const formattedDate = today.toLocaleDateString(); // Get today's date
    this.consultations.push({
      name: '',
      date: formattedDate,
      editing: true // Enable editing mode for the new consultation
    });
    this.isNameValid = false; 
  }

  // Edit an existing consultation
  editConsultation(index: number): void {
    this.consultations[index].editing = !this.consultations[index].editing;
  }

  // Delete a consultation
  deleteConsultation(index: number): void {
    this.consultations.splice(index, 1);
  }
  /*cette fonction c'est pour valider quand on click sur entre + ne pas valider loukan le nom makanch*/
  saveConsultation(index: number): void {
    if (this.consultations[index].name.trim().length > 0) {
      this.consultations[index].editing = false;
      this.isNameValid = true; // Mark as valid when a name is entered
    } else {
      this.isNameValid = false; // Keep invalid until a valid name is entered
    }
  }

  //////////////////////////////////////////////////////::

  types = [
    { label: 'Maladies chroniques', value: 'chronic', icon: '../../assets/icons/heartbeat.png' },
    { label: 'Maladies familiales', value: 'family', icon: '../../assets/icons/family.png' },
    { label: 'Chirurgies', value: 'surgery', icon: '../../assets/icons/syringe.png' },
    { label: 'Complications associées', value: 'complications', icon: '../../assets/icons/heartbeat.png' },
  ];

  // Selected type from dropdown
  selectedType = this.types[0].value;

  // Medical history items
  medicalHistory: { label: string; icon: string; details: string }[] = [];

  // Add new medical history item
  addMedicalItem() {
    const selected = this.types.find(type => type.value === this.selectedType);
    if (selected) {
      this.medicalHistory.push({
        label: selected.label,
        icon: selected.icon,
        details: ''
      });
    }
  }
  deleteMedicalItem(index: number) {
    // Remove the item at the specified index from the medicalHistory array
    this.medicalHistory.splice(index, 1);
  }
  resizeTextarea(event: any) {
    const textarea = event.target;
    textarea.style.height = 'auto';  // Reset height to auto to shrink it back if text is deleted
    textarea.style.height = `${textarea.scrollHeight}px`;  // Set height to match the content
  }
  onFocus(event: any) {
    event.target.style.border = '1px solid #78B2CA';  // Highlight border when focused
  }
  
  onBlur(event: any) {
    event.target.style.border = 'none';  // Remove border when focus is lost
  }
}