import {
  Component,
  Input,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-bilan-popup',
  templateUrl: './bilan-popup.component.html',
  styleUrls: ['./bilan-popup.component.css'],
  standalone: true,
  imports: [CommonModule], // Importation du CommonModule ici
})
export class BilanPopupComponent implements AfterViewInit {
  @Input() bilanData: { parametre: string; resultat: number; valeurUsuelle: number }[] = [];
  @Input() date: string = '';
  @Input() isOpen: boolean = false;

  @ViewChild('chartCanvas') chartCanvas!: ElementRef;

  chartInstance!: Chart;

  ngAfterViewInit() {
    // Ne rien faire ici maintenant
  }

  ngOnChanges() {
    if (this.isOpen) {
      this.createChart();
    }
  }

  // Rendre la méthode publique
  public createChart() {
    // On s'assure que le canvas existe avant de tenter de créer le graphique
    if (this.chartCanvas && this.chartCanvas.nativeElement) {
      if (this.chartInstance) {
        // Si un graphique existe, le détruire avant de créer un nouveau
        this.chartInstance.destroy();
      }

      this.chartInstance = new Chart(this.chartCanvas.nativeElement, {
        type: 'bar',
        data: {
          labels: this.bilanData.map((item) => item.parametre),
          datasets: [
            {
              label: 'Résultats',
              data: this.bilanData.map((item) => item.resultat),
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
            {
              label: 'Valeurs Usuelles',
              data: this.bilanData.map((item) => item.valeurUsuelle),
              backgroundColor: 'rgba(153, 102, 255, 0.6)',
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    } else {
      console.error('Canvas not found!');
    }
  }
}
