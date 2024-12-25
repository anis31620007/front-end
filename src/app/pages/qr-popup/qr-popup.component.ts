import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-qr-popup',
  templateUrl: './qr-popup.component.html',
  styleUrls: ['./qr-popup.component.css'], // ou tailwind intégré
})
export class QrPopupComponent {
  @Input() qrCodeData: string | null = null;
  @Output() closePopup = new EventEmitter<void>();

  close() {
    this.closePopup.emit();
  }
}
