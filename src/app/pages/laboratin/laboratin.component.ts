
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { userInterface } from '../info-patient-interface';
interface TableData{
  parametreMesure: string;
  resultats:number ;
  valeursUsuelles: number;
  mesure: 'g/L' | '%';

}
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
    { parametreMesure: 'Weight', resultats: 70.5, valeursUsuelles: 60, mesure: 'g/L'  },
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
  // Generate graph (dummy implementation)

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
  //       data: this.tableData.map((row) => row.valeursUsuelles), // Y-axis data for valeurs usuelles
  //       label: 'Valeurs Usuelles',
  //     },
  //   ];
  // }


}
