import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TestCategories } from './bilan-categorie';
import { userInterface } from '../info-patient-interface';


interface Data {
  medicament: string;
  dose: string; 
  duree: number;
  mesureDate:'mois'|'jours';
}

@Component({
  selector: 'app-consultation',
  imports: [CommonModule,FormsModule],
  templateUrl: './consultation.component.html',
  styleUrl: './consultation.component.css'
})
export class ConsultationComponent {
[x: string]: any;
  patient:userInterface =     {
    name:'Sraich imene',
    age: 20,
    NSS: 12345678901,
    dateNaissance: '10/20/2004',
    NumTel: 658080305,
    Email: 'li_sraich@esi.dz',
    Contact: {
      Nom: "Imene",
      Tel: 932810938
    },
    Mutuelle: 'info sur la mutuelle'
  }
  //////////Bilan + Ordonnance///////////////////////
  selectedTestCategory: string = '';
  selectedSubCategories: string[] = [];  // Array to hold selected subcategories
  selectedTests: any = {};  // Store selected tests for all subcategories
  customTests: any = {};  // Store custom tests added by the user for each subcategory
  categories = Object.keys(TestCategories);  // Get main categories
  subcategories: string[] = [];  // Holds subcategories based on selected category
  
  selectedSubCategory: string = '';
  /////////////////////
  showPopupBilan = false; // to show the popup
  showPopupBilan1 = false; // to show the popup
  Bilan = [
    { name: 'Bilan1', date: '24/10/2024', editing: false },
    { name: 'Bilan1', date: '24/10/2024', editing: false },
  ];
  // ici devrai etre la liste des soins njibouha m le back
  Soins=[
    {name: 'Soin1', date: '24/10/2024',},
    {name: 'Soin2', date: '24/10/2024',},
    {name: 'Soin1', date: '24/10/2024',},
    {name: 'Soin1', date: '24/10/2024',},
    {name: 'Soin1', date: '24/10/2024',},
    {name: 'Soin1', date: '24/10/2024',},

  ]
  isNameValid= true; 
  // Add a new bilan
  addBilan(): void {
    const today = new Date();
    const formattedDate = today.toLocaleDateString(); // Get today's date
    this.Bilan.push({
      name: '',
      date: formattedDate,
      editing: true // Enable editing mode for the new bilan
    });
    this.isNameValid = false; 
  }
  // Edit an existing bilan
  editBilan(index: number): void {
    this.Bilan[index].editing = !this.Bilan[index].editing;
  }
  deleteBilan(index: number): void {
    this.Bilan.splice(index, 1);
  }
  /*cette fonction c'est pour valider quand on click sur entre + ne pas valider loukan le nom makanch*/
  saveBilan(index: number): void {
    console.log("hello"); 
    if (this.Bilan[index].name.trim().length > 0) {
      this.Bilan[index].editing = false;
      this.isNameValid = true; // Mark as valid when a name is entered
      this.popupInit(); 
    } else {
      this.isNameValid = false; // Keep invalid until a valid name is entered
    }
  }
  popupInit(){
     this.showPopupBilan1=true;
     this.selectedTestCategory= '';
      this.testsForSelectedSubCategory=[];
      this.selectedSubCategories=[];
      this.selectedTests = {};
      this.subcategories=[]; 
  }
///////////////////////////////////////////////////


Ordonnance = [
  { name: 'Ordonnance1', date: '24/10/2024', editing: false }
];
showPopup=false; 
// Add a new bilan
addOrdonnance(): void {
  const today = new Date();
  const formattedDate = today.toLocaleDateString(); // Get today's date
  this.Ordonnance.push({
    name: '',
    date: formattedDate,
    editing: true // Enable editing mode for the new bilan
  });
  this.isNameValid = false; 
}

// Edit an existing bilan
//le contenu la fonction addOrdonnance needs to change to somthing where they click they get the info of that ordonnance and not redo from the start -->

editOrdonnance(): void {
  this.showPopup = true;
}
deleteOrdonnance(index: number): void {
  this.Ordonnance.splice(index, 1);
}
todayDate: string = '';
/*cette fonction c'est pour valider quand on click sur entre + ne pas valider loukan le nom makanch*/
saveOrdonnance(index: number): void {
  if (this.Ordonnance[index].name.trim().length > 0) {
    this.Ordonnance[index].editing = false;
    this.isNameValid = true; // Mark as valid when a name is entered
    this.showPopup = true;
    const today = new Date();
  this.todayDate = today.toLocaleDateString();
  } else {
    this.isNameValid = false; // Keep invalid until a valid name is entered
  }
}
mesureDate:"mois"|"jours"= "jours";

TableData:Data[]=[
  {
    medicament: 'Ibuprofen',
    dose: '2 fois par jours',
    duree: 5,
    mesureDate:'mois',
  }
];
addRow(): void{
  this.TableData.push({
  medicament: '',
  dose:'',
  duree: 0,
  mesureDate:'mois',
  
});
}
saveRow(index: number): void {
  const row = this.TableData[index];
  // Here, you can call a service or perform additional actions to save the data
  console.log('Row saved:', row);
}
deleteRow(index: number): void {
  // Remove the row at the specified index
  this.TableData.splice(index, 1);
}
closePopup(): void {
  this.showPopup = false; // Hide the pop-up when the close button is clicked
}
///////////////////////////////////:::::


// Function to handle category selection
onCategoryChange() {
  if (this.selectedTestCategory) {
    this.subcategories = Object.keys(TestCategories[this.selectedTestCategory] || {});
  } else {
    this.subcategories = [];
  }
}
testsForSelectedSubCategory: string[]=[];
getObjectKeys(obj: any): string[] {
  return obj ? Object.keys(obj) : [];
}

// Add new subcategory to selected list
// Add a new subcategory and its tests
addSubCategory() {
  if (this.selectedTestCategory && this.selectedSubCategory) {
    // Ensure the subcategory isn't already added
    if (!this.selectedSubCategories.includes(this.selectedSubCategory)) {
      this.selectedSubCategories.push(this.selectedSubCategory);

      // Initialize the tests for this subcategory
      const subcategoryTests = TestCategories[this.selectedTestCategory]?.[this.selectedSubCategory];
      if (subcategoryTests) {
        this.selectedTests[this.selectedSubCategory] = subcategoryTests.reduce((acc: { [key: string]: boolean }, test: string) => {
          acc[test] = true; // Default to selected
          return acc;
        }, {});
      } else {
        this.selectedTests[this.selectedSubCategory] = {}; // No tests available
      }
    } else {
      console.warn('Subcategory already added.');
    }
  } else {
    console.warn('Please select a valid test category and subcategory.');
  }
}

// Function to handle test selection
onTestChange(subcategory: string, testName: string, event: any) {
  if (!this.selectedTests[subcategory]) {
    this.selectedTests[subcategory] = {};
  }
  this.selectedTests[subcategory][testName] = event.target.checked;
}

// Function to close the popup
closePopupBilan() {
  this.showPopupBilan = false;
   this.showPopupBilan1=false; 
}

// Save selected data
saveBilanPopup() {
  console.log('Selected Category:', this.selectedTestCategory);
  console.log('Selected Sub-Categories:', this.selectedSubCategories);
  console.log("Selected Tests: ", this.selectedTests);
  this.closePopupBilan();
}
openPopup(){
 
  this.showPopupBilan=true; 
}
}


