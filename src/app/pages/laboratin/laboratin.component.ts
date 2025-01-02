import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration,  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Legend,
  Title,
  Tooltip, } from 'chart.js';

// interface pour definir les type de donee de la table 
interface TableData{
  parametreMesure: string;
  resultats:number ;
  valeursUsuelles: number;
  mesure: 'g/L' | '%';

}
// cette parie est juste pour rester conforme au elemnet de chart.js
Chart.register(
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Legend,
  Title,
  Tooltip
);
@Component({
  selector: 'app-laboratin',
  imports: [CommonModule,FormsModule,],
  templateUrl: './laboratin.component.html',
  styleUrl: './laboratin.component.css'
})

export class LaboratinComponent {
  patient = {
    name: 'John Doe',
    age: 30,
    NSS: '123-45-6789',
    dateNaissance: '1994-01-01',
    NumTel: '1234567890',
    Email: 'john.doe@example.com',
    Contact: { Nom: 'Jane Doe', Tel: '9876543210' },
    Mutuelle: 'HealthCare Inc.'
  };
  Bilan = [
    { name: 'Bilan1', date: '24/10/2024', editing: false },
    { name: 'Bilan1', date: '24/10/2024', editing: false },
  ];
  // logiquement la demande will be saved somewhere so le tableau nrmlm n3amreh b les tests demander par le docteur (parametre a mesure=test)nad the only champs that he can write in is resultats 
  tableData: TableData[] = [
    { parametreMesure: 'Weight', resultats: 70.5, valeursUsuelles: 60, mesure: 'g/L'},
    { parametreMesure: 'Weight', resultats: 60.5, valeursUsuelles: 60, mesure: 'g/L'},
    { parametreMesure: 'Weight', resultats: 90.5, valeursUsuelles: 60, mesure: 'g/L'},
    { parametreMesure: 'Weight', resultats: 10.5, valeursUsuelles: 60, mesure: 'g/L'},
  ];// ca c'est juste un exemple pour tester



  // Save row when input loses focus or enter is pressed
  saveRow(index: number): void {
    const row = this.tableData[index];
    // Here, you can call a service or perform additional actions to save the data
    console.log('Row saved:', row);
  }

  // ya pas besoin de bouton add row psq ga3 les tests will be displayed 
  // addRow(): void {
  //   this.tableData.push({
  //     parametreMesure: '',//vas recevoir le test demander et non le vide
  //     resultats: 0,  // Defaulting to a number
  //     valeursUsuelles: 0,  // Defaulting to a number
  //     mesure: 'g/L', // Default mesure, you can change based on your logic
  //   });
  // }


  // barChartData: ChartDataSets[] = [];
  // barChartLabels: Label[] = [];
  // barChartOptions: ChartOptions = {
  //   responsive: true,
  //   scales: {
  //     x: { stacked: true },
  //     y: { stacked: true },
  //   },
  // };
  // barChartType: ChartType = 'bar';
  // barChartLegend = true;
  // barChartPlugins = [];

  // // Method to add a new row to the tableData array
  // // Method to generate the graph based on the data in tableData
  // generateGraph() {
  //   this.barChartLabels = this.tableData.map((row) => row.parametreMesure); // X-axis labels from parametreMesure
  //   this.barChartData = [
  //     {
  //       data: this.tableData.map((row) => row.resultats), // Y-axis data for results
  //       label: 'Results',
  //     },
  //     {
  //       data: this.tableData.map((row) => row.valeursUsuelle), // Y-axis data for valeurs usuelles
  //       label: 'Valeurs Usuelles',
  //     },
  //   ];
  // }
  // Chart.register(
  //   CategoryScale: any,
  //   LinearScale: any,
  //   BarController: any, // Register BarController for bar charts
  //   BarElement: any,
  //   Legend: any,
  //   Title: any,
  //   Tooltip: any
  // );
  @ViewChild('chartCanvas', { static: true }) chartCanvas!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;
 
   createChart(): void {
    
    try {
      if (!this.chartCanvas || !this.chartCanvas.nativeElement) {
        throw new Error('Canvas element not found!');
      }
      console.log('Canvas element found:', this.chartCanvas.nativeElement);
  
      if (!this.tableData || this.tableData.length === 0) {
        throw new Error('Table data is empty or undefined!');
      }
      console.log('Table data:', this.tableData);
  
      const labels = this.tableData.map((row) => row.parametreMesure);
      const resultats = this.tableData.map((row) => row.resultats);
      const valeursUsuelle = this.tableData.map((row) => row.valeursUsuelles);
  
      console.log('Labels:', labels);
      console.log('Resultats:', resultats);
      console.log('Valeurs Usuelles:', valeursUsuelle);
      // si un graphe existe deja we destroy it first 
      if (this.chart) {
        this.chart.destroy();
      }
  
    //configuration et creation du graphe ne mm temps
    this.chart= new Chart(this.chartCanvas.nativeElement, {
      type: 'bar', // Bar chart
      data: {
        labels: labels, // X-axis labels
        datasets: [
          {
            label: 'Parametre mesure',
            data: resultats, // Y-axis data for doses
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
          // on peut les ajouter  si on veut
          // {
          //   label: 'Durée',
          //   data: valeursUsuelle, // Y-axis data for durations
          //   backgroundColor: 'rgba(255, 159, 64, 0.5)',
          //   borderColor: 'rgba(255, 159, 64, 1)',
          //   borderWidth: 1,
          // },
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
        scales: {
          x: {
            title: {
              display: true,
              text: 'Parametre mesure',
            },
          },
          y: {
            title: {
              display: true,
              text: 'g/l',
            },
          },
        },
      },
    });

  } catch (error) {
    console.error('Error in createChart:', error);
  }
  }

  
}