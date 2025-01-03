import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://127.0.0.1:8000/DPI/all/'; // Replace with your endpoint

  constructor(private http: HttpClient) {}

  // Function to get all DPIs
  getDPIs(): Observable<any> {
    const token = localStorage.getItem('Access'); // Retrieve the token from localStorage
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`, // Include the token
    });
    return this.http.get(this.apiUrl, { headers });
  }
}
