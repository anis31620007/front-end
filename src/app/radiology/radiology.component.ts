
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InfoPatientComponent } from "../info-patient/info-patient.component";
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-radiology',
  standalone: true,
  imports: [CommonModule, FormsModule, InfoPatientComponent,HttpClientModule],
  templateUrl: './radiology.component.html',
  styleUrls: ['./radiology.component.css'],
})
export class RadiologyComponent implements OnInit {
  patient: any = {};
  bilans: Array<{ id: number; type: string; date: string; text: string; photo: string | null }> = [];
  bilanText: string = '';
  photo: string | null = null;
  editIndex: number | null = null;

  constructor(private readonly http:HttpClient) {}

  ngOnInit(): void {
    
    this.loadBilans();
  }

  // Charger les bilans depuis le backend
  async loadBilans(): Promise<void> {
    try {
      const response = await fetch('http://localhost:3000/bilans');
      this.bilans = await response.json();
    } catch (error) {
      console.error('Erreur lors du chargement des bilans:', error);
    }
  }

  // Sauvegarder ou mettre à jour un bilan
  async saveBilan(): Promise<void> {
    if (this.bilanText.trim()) {
      const bilan = {
        id: this.editIndex !== null ? this.bilans[this.editIndex].id : Date.now(),
        type: 'Bilan Radiologie',
        date: new Date().toLocaleDateString(),
        text: this.bilanText,
        photo: this.photo,
      };

      if (this.editIndex !== null) {
        // Mise à jour d'un bilan existant
        try {
          const response = await fetch(`http://localhost:3000/bilans/${bilan.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bilan),
          });

          if (!response.ok) {
            throw new Error('Erreur lors de la mise à jour');
          }

          this.bilans[this.editIndex] = { ...bilan }; // Mettre à jour localement
        } catch (error) {
          console.error('Erreur lors de la mise à jour du bilan:', error);
        }

        this.editIndex = null; // Quitter le mode édition
      } else {
        // Ajouter un nouveau bilan
        try {
          const response = await fetch('http://localhost:3000/bilans', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bilan),
          });

          if (response.ok) {
            const newBilan = await response.json();
            this.bilans.push(newBilan); // Ajouter localement
          } else {
            throw new Error('Erreur lors de l’ajout du bilan');
          }
        } catch (error) {
          console.error('Erreur lors de l’ajout du bilan:', error);
        }
      }

      this.resetForm();
    }
  }

  // Réinitialiser le formulaire
  resetForm(): void {
    this.bilanText = '';
    this.photo = null;
    this.editIndex = null;
  }

  // Modifier un bilan
  editBilan(index: number): void {
    this.editIndex = index;
    this.bilanText = this.bilans[index].text;
    this.photo = this.bilans[index].photo || null;
  }

  // Supprimer un bilan
  async deleteBilan(index: number): Promise<void> {
    const bilan = this.bilans[index];

    this.http.delete(`http://localhost:3000/bilans/${bilan.id}`).subscribe(
      (r)=>{ 
        this.bilans.splice(index, 1); // Supprimer localement
      }
    );

      return;

    try {

      

      return;
      const response = await fetch(`http://localhost:3000/bilans/${bilan.id}`, {
        method: 'DELETE',
      });
 

      this.bilans.splice(index, 1); // Supprimer localement
      if (response.ok) {
        this.bilans.splice(index, 1); // Supprimer localement
      } else {
        throw new Error('Erreur lors de la suppression');
      }
    } catch (error) {
      console.error('Erreur lors de la suppression du bilan:', error);
    }
    
  }

  // Ajouter une photo (convertie en base64)
  onPhotoSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => (this.photo = reader.result as string);
      reader.readAsDataURL(file);
    }
  }

  // Déclencher l'input pour ajouter une photo
  onAddPhoto(): void {
    const input = document.querySelector('input[type="file"]') as HTMLElement;
    input.click();
  }
}
