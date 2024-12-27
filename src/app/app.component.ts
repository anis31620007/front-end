import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RadiologyPopupComponent } from './pages/radiology-popup/radiology-popup.component'; // Import correct

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, RadiologyPopupComponent], // Ajoutez RadiologyPopupComponent ici
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'projet-igl';
  isPopupVisible: boolean = false;

  showPopup() {
    console.log('Popup button clicked!');
    this.isPopupVisible = true;
  }

  //qrValue: string = '';

  // @ViewChild('qrPopup') qrPopup!: QrPopupComponent;

  /*
  async generateQRCode() {
    const canvas = document.getElementById('qrcodeCanvas') as HTMLCanvasElement;

    // Si aucune valeur n'est entrée, effacez le canvas
    if (!this.qrValue) {
      const context = canvas.getContext('2d');
      context?.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    try {
      await QRCode.toCanvas(canvas, this.qrValue.toString());
    } catch (err) {
      console.error('Erreur lors de la génération du QR Code:', err);
    }
  }*/
}
