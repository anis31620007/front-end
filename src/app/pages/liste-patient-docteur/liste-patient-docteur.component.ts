import { Component, OnInit,  ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListService } from '../../list.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TransferService } from '../../transfer.service';
import { GenerateQRCodeComponent } from '../generate-qrcode/generate-qrcode.component';
import { QrcodeDecoder } from 'qrcode-decoder'; // Import qrcode-decoder
@Component({
  selector: 'app-liste-patient-docteur',
  imports: [CommonModule, FormsModule, GenerateQRCodeComponent],
  templateUrl: './liste-patient-docteur.component.html',
  styleUrl: './liste-patient-docteur.component.css'
})
export class ListePatientDocteurComponent implements OnInit {
  @ViewChild('fileInput') fileInput: any;  // Reference to the file input element
    dpis: any[] = [];
    filteredDpis: any[] = [];
    errorMessage: string = '';
    nom: string = '';
    prenom: string = '';
    searchTerm: string = '';
    tempSearchTerm: string = '';  
  
  
    constructor(private listService: ListService, private route: ActivatedRoute, private router: Router, private transferService: TransferService) {}
  

    isQRCodePopupVisible: boolean = false;

    decodedQR: string | null = null;

    showQRCodePopup(): void {
      this.isQRCodePopupVisible = true;
    }
  
    hideQRCodePopup(): void {
      this.isQRCodePopupVisible = false;
    }

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

    
      // Function to handle file input and decode the QR code
  handleFileInput(files: FileList): void {
    const file = files.item(0);
    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const imageData = event.target?.result as string;
        this.decodeQRCode(imageData);
      };

      reader.readAsDataURL(file); // Read the file as Data URL
    }
  }

  // Function to decode QR code using qrcode-decoder
  decodeQRCode(imageData: string): void {
    const qrDecoder = new QrcodeDecoder();
    const img = new Image();
    img.src = imageData;

    img.onload = () => {
      qrDecoder.decodeFromImage(img).then(result => {
        if (result && result.data) {
          console.log('Decoded QR Code:', result.data);
          this.searchDPIByQR(result.data); // Use the decoded data for searching DPI
        } else {
          console.error('No data found in the QR Code');
        }
      }).catch(error => {
        console.error('Error decoding QR Code:', error);
      });
    };
  }

  // Function to search DPI by QR code result
  searchDPIByQR(qrData: string): void {
    console.log('Searching DPI with QR data:', qrData);
    this.searchTerm = qrData;
    this.searchDPI();
  }

  triggerFileInput(): void {
    this.fileInput.nativeElement.click(); // Trigger the file input element programmatically
  }

  // Method to handle the file selection
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      this.handleFileInput(input.files);
    }
  }
  
  
  


}
