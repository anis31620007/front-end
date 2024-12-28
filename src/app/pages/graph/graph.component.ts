import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-graph',
  template: `
    <div class="flex justify-center items-center p-4">
      <canvas #chartCanvas class="w-full max-w-lg"></canvas>
    </div>
  `,
  styles: ['canvas { max-width: 100%; height: auto; }'],
})
export class GraphComponent implements OnInit {
  @ViewChild('chartCanvas', { static: true }) chartCanvas!: ElementRef<HTMLCanvasElement>;
  private chart!: Chart;

  ngOnInit(): void {
    this.createChart();
  }

  private createChart(): void {
    const config: ChartConfiguration = {
      type: 'line', // Type de graphique : 'bar', 'pie', etc.
      data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Sales',
            data: [50, 100, 150, 200, 250],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
          },
        },
      },
    };

    this.chart = new Chart(this.chartCanvas.nativeElement, config);
  }
}
