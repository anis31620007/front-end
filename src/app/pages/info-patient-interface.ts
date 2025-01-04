
export interface userInterface{
    name:string
    age:number
    NSS:number
    dateNaissance:string// ou date
    NumTel:number
    Contact:{
        Nom:string 
        Tel:number
    }
    Adresse:string
    Mutuelle:string 
}

export interface Consultation {
    IdConsultation: number;
    created_at: string;
    updated_at: string;
    resume: string;
    medecin: number;
  }

export  interface PatientInfo {
    dpi: {
      Adress: string;
      ContactNom: string;
      ContactNumero: string;
      DateDeNaissonce: string;
      Mutuelle: string;
      NSS: number;
      Nom: string;
      Numero: string;
      Patient: number;
      Prenom: string;
      created_at: string;
      sexe: string;
      updated_at: string;
    };
    consultations: Array<any>;
    soins: Array<any>;
  }
