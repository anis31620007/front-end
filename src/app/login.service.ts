import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:3000/users'; // Remplacez par l'URL de votre API backend

  constructor(private http: HttpClient) {}

  // Fonction pour envoyer les données de connexion au backend
  login(username: string, password: string): Observable<any> {
    const loginUrl = `${this.apiUrl}?username=${username}&password=${password}`; // Utilisez GET avec des paramètres de requête
    return this.http.get<any>(loginUrl); // Effectuer la requête GET
  }
}
