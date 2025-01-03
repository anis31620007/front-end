import { Component, OnInit } from '@angular/core';
import { ListService } from '../../list.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-patient',
  imports: [CommonModule],
  templateUrl: './liste-patient.component.html',
  styleUrl: './liste-patient.component.css'
})
export class ListePatientComponent implements OnInit {
  dpis: any[] = [];
  errorMessage: string = '';
  nom: string = '';
  prenom: string = '';


  constructor(private listService: ListService, private route: ActivatedRoute, private router: Router) {}


  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.nom = params['nom']; 
      this.prenom = params['prenom']; 
    });
    this.listService.getDPIs().subscribe({
    next: (data) => {
      this.dpis = data; 
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
