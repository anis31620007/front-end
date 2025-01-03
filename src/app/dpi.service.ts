import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DpiService {
  private apiUrl = 'http://127.0.0.1:8000/DPI/Create/'; // Replace with your actual endpoint

  constructor(private http: HttpClient) {}

  createDpi(dpi: any): Observable<any> {
    const token = localStorage.getItem('Access'); // Retrieve the token from localStorage
    if (!token) {
      console.error('No authentication token found!');
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`, // Include the token
    });

    console.log('JSON to be sent:', dpi, { headers });
    return this.http.post(this.apiUrl, dpi, { headers });
  }

}
