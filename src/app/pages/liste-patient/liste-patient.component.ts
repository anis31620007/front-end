import { Component, OnInit } from '@angular/core';
import { ListService } from '../../list.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-liste-patient',
  imports: [CommonModule, FormsModule],
  templateUrl: './liste-patient.component.html',
  styleUrl: './liste-patient.component.css'
})
export class ListePatientComponent implements OnInit {
  dpis: any[] = [];
  filteredDpis: any[] = [];
  errorMessage: string = '';
  nom: string = '';
  prenom: string = '';
  searchTerm: string = '';


  constructor(private listService: ListService, private route: ActivatedRoute, private router: Router) {}


  ngOnInit() {
     this.fetchAllDPIs();
  }

  fetchAllDPIs(): void {
    this.route.queryParams.subscribe(params => {
      this.nom = params['nom']; 
      this.prenom = params['prenom']; 
    });
    this.listService.getDPIs().subscribe({
    next: (data) => {
      this.dpis = data; 
      this.filteredDpis = data;
      },
    error: (error) => {
      this.errorMessage = 'Failed to fetch DPIs.';
      console.error(error);
      }
    });
  }


  allerVersDPI(): void { 
    this.router.navigate(['/creerdpi']);
  }


}
