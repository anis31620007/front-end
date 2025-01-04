import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListService } from '../../list.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TransferService } from '../../transfer.service';
@Component({
  selector: 'app-liste-patient-docteur',
  imports: [CommonModule, FormsModule],
  templateUrl: './liste-patient-docteur.component.html',
  styleUrl: './liste-patient-docteur.component.css'
})
export class ListePatientDocteurComponent implements OnInit {
    dpis: any[] = [];
    filteredDpis: any[] = [];
    errorMessage: string = '';
    nom: string = '';
    prenom: string = '';
    searchTerm: string = '';
    tempSearchTerm: string = '';  
  
  
    constructor(private listService: ListService, private route: ActivatedRoute, private router: Router, private transferService: TransferService) {}
  
  
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
        console.log('DPIs loaded:', this.dpis);

        // this.filteredDpis = data;
        },
      error: (error) => {
        this.errorMessage = 'Failed to fetch DPIs.';
        console.error(error);
        }
      });
    }
  
    searchDPI(): void {
      console.log('Searching for DPI:', this.searchTerm);
      if (!this.searchTerm.trim()) {
        this.fetchAllDPIs(); // If no search term, fetch all DPIs
        return;
      }
  
      this.listService.getDPIBySearch(this.searchTerm).subscribe({
        next: (data) => {
          this.dpis = [data]; // Display the single searched DPI
          console.log('Search results:', this.dpis);

        },
        error: (error) => {
          this.errorMessage = 'DPI not found.';
          console.error(error);
        },
      });
    }
  
    allerVersDPI(): void { 
      this.router.navigate(['/creerdpi']);
    }

    consulterDPI(dpi: any): void {
      console.log('Consulting DPI:', dpi);
      this.listService.voirDPI(dpi.NSS).subscribe({
        next: (data) => {
          console.log('DPI details:', JSON.stringify(data));
          this.transferService.setDpiDetails(data);
          // Redirect to the DPI details page
          this.router.navigate(['/info'], { queryParams: { nss: data.dpi.NSS } });
        },
        error: (error) => {
          this.errorMessage = 'DPI not found.';
          console.error(error);
        },
      });   
    }

    removeRow(dpi: any): void {
      // Filter out the selected DPI from the list
      this.dpis = this.dpis.filter(item => item !== dpi);
    }
  
  


}
