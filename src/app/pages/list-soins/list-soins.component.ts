import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { userInterface } from '../info-patient-interface';

@Component({
  selector: 'app-list-soins',
  imports: [CommonModule,FormsModule],
  templateUrl: './list-soins.component.html',
  styleUrl: './list-soins.component.css'
})
export class ListSoinsComponent {
  // juste to try, this info should be m la base de donnees
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
 // juste to try, this info should be m la base de donnees
  Soins = [
    { name: 'Soins1', date: '24/10/2024', editing: false }
  ];
  isNameValid= true; 
  // Add a new soins, get the date from todays date and push the name 
  addSoins(): void {
    const today = new Date();
    const formattedDate = today.toLocaleDateString(); // Get today's date
    this.Soins.push({
      name: '',
      date: formattedDate,
      editing: true // Enable editing mode for the new consultation
    });
    this.isNameValid = false; 
  }

  // Edit the name of thhe existing soins, ghadi juste tbedle l'etat de la variable editing 
  editSoins(index: number): void {
    this.Soins[index].editing = !this.Soins[index].editing;
  }

  // Delete a soins, here we need to add how to delet it l back end??
  deleteSoins(index: number): void {
    this.Soins.splice(index, 1);
  }
  /*cette fonction c'est pour valider quand on click sur entre + ne pas valider loukan le nom makanch*/
  saveSoins(index: number): void {
    if (this.Soins[index].name.trim().length > 0) {
      this.Soins[index].editing = false;
      this.isNameValid = true; // Mark as valid when a na&me is entered
    } else {
      this.isNameValid = false; // Keep invalid until a valid name is entered
    }
  }
}
