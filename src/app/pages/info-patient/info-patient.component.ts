import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { userInterface } from '../info-patient-interface';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { InfoPatientServices } from './info-patient_services';


@Component({
  selector: 'app-info-patient',
  standalone: true,
  imports: [FormsModule,CommonModule],//RouterOutlet
  providers:[InfoPatientServices],
  templateUrl: './info-patient.component.html',
  styleUrl: './info-patient.component.css'
})
export class InfoPatientComponent {
  // isSidebarCollapsed=input.required<boolean>();
  // screenWidth=input.required<number>();
  // sizeClass = computed(() => {
  //   const isLeftSidebarCollapsed = this.isSidebarCollapsed();
  //   if (isLeftSidebarCollapsed) {
  //     return '';
  //   }
  //   return this.screenWidth() > 768 ? 'body-trimmed' : 'body-md-screen';
  // });
  patient:userInterface =     {
    name:'sraich imene',
    age:20,
    NSS: 12345678901,
    dateNaissance: '10/20/2004',
    NumTel: 658080305,
    Email: 'li_sraich@esi.dz',
    Contact: {
      Nom: "Imene",
      Tel: 932810938
    },
    Mutuelle: 'info sur la mutuelle'
  }
 // ce code est to get les info a partir du link obtenue de django , somthing is not working in it and i don't know what
  // constructor(private http:HttpClient, private patientService:InfoPatientServices){}
  // ngOnInit():void{
  //  this.patientService.getPatient().subscribe((patient: userInterface) => {
  //   console.log('afficher les info patient');
  //   this.patient=patient; 
  //  })
  // }
 
    // Array to hold consultations
  consultations = [
    { name: 'Consultation1', date: '24/10/2024', editing: false }
  ];
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

  addMedicalItem() {
    const selected = this.types.find(type => type.value === this.selectedType);
  
    // Check if the type is already in the medicalHistory array
    if (selected && !this.medicalHistory.some(item => item.label === selected.label)) {
      this.medicalHistory.push({
        label: selected.label,
        icon: selected.icon,
        details: ''
      });
    } else {
      // Optionally, display an alert or message to the user
      alert('Ce type a déjà été ajouté.');
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