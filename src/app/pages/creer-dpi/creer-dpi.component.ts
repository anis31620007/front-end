import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DpiService } from '../../dpi.service';

//import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-creer-dpi',
  templateUrl: './creer-dpi.component.html',
  styleUrls: ['./creer-dpi.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class CreerDpiComponent {
  dpi = {
    NSS: '',
    Nom: '',
    Prenom: '',
    Numero: '',
    DateDeNaissonce: '',
    sexe: 'M',
    Adress: '',
    Mutuelle: '',
    email: '',
    ContactNom: '',
    ContactNumero: ''
  };

  constructor(private dpiService: DpiService) {}

  saveDpi() {
    this.dpiService.createDpi(this.dpi).subscribe({
      next: (response) => {
        console.log('Reponse creation DPI:', response);
        alert('Oueeeee hh');
      },
      error: (error) => {
        console.error('Error creating DPI:', error);
        alert('flop hh');
      },
    });
  }
}
