import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dossierpatients',
  imports: [],
  templateUrl: './dossierpatients.component.html',
  styleUrl: './dossierpatients.component.css'
})
export class DossierpatientsComponent {

  currentRoute: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.currentRoute = this.router.url; // Récupère la route actuelle
  }

}
