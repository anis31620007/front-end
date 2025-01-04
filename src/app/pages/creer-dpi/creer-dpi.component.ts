import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DpiService } from '../../dpi.service';
import { Router } from '@angular/router';


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

  constructor(private dpiService: DpiService, private router: Router) {}

  saveDpi() {
    this.dpiService.createDpi(this.dpi).subscribe({
      next: (response) => {
        console.log('Reponse creation DPI:', response);
        alert('Oueeeee hh');
        if (this.dpiService.returnRole() == 'medecin') {
          this.router.navigate(['/listepatientdocteur']); //TODO: Redirect according to role
        }
        else if (this.dpiService.returnRole() == 'administratif') {
          this.router.navigate(['/listepatient']);
        }
      },
      error: (error) => {
        console.error('Error creating DPI:', error);
        alert('flop hh');
      },
    });
  }
}
