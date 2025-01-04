import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://127.0.0.1:8000/DPI/all/'; 


  constructor(private http: HttpClient) {}

  //for all DPIs
  getDPIs(): Observable<any> {
    const token = localStorage.getItem('Access'); // Retrieve the token from localStorage
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`, // Include the token
    });
    return this.http.get(this.apiUrl, { headers });
  }

  getDPIBySearch(nss: string): Observable<any> {
    const rech_url = `http://127.0.0.1:8000/DPI/${nss}/`;
    const token = localStorage.getItem('Access'); // Retrieve the token from localStorage
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`, // Include the token
    });
    return this.http.get(rech_url, { headers });
  }

  voirDPI(nss: string): Observable<any> {
    const consult_url = `http://127.0.0.1:8000/DPI/consulterdpi/${nss}`;
    const token = localStorage.getItem('Access'); // Retrieve the token from localStorage
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`, // Include the token
    });
    console.log('requesting endpoint:', consult_url);
    return this.http.get(consult_url, { headers });
  }
}
