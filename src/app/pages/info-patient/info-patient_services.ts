import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { userInterface } from "../info-patient-interface";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
      

export class InfoPatientServices{
    constructor(private http:HttpClient){}
    getPatient(): Observable<userInterface>{
      return this.http.get<userInterface>('http://localhost:3000/patient')
}

}