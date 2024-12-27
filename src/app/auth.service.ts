import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor() {}

  // Simule l'envoi des données au backend (pas de backend réel pour l'instant)
  login(username: string, password: string): Observable<any> {
    console.log('Données envoyées:', { username, password }); // Vérification console
    // Simuler une réponse du serveur
    if (username === 'user' && password === 'password') {
      return of({ message: 'Connexion réussie', status: 200 }); // Succès
    } else {
      return of({ message: 'Nom d\'utilisateur ou mot de passe incorrect', status: 401 }); // Erreur
    }
  }
}
