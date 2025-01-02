
import { Component } from '@angular/core';
import { LoginService } from '../login.service'; // Importer le service
import { Router } from '@angular/router'; // Pour rediriger après connexion
import { CommonModule } from '@angular/common'; // Importation de CommonModule
import { FormsModule } from '@angular/forms'; // Importation de FormsModule
import { provideHttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 

import { AuthService } from '../auth.service';
declare const google: any; // Déclarez Google pour accéder à son SDK


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  // providers: [provideHttpClient()],
  imports: [CommonModule, FormsModule] // ces imports pour résoudre l'erreur
})
export class LoginComponent {
  email: string = ''; // Stocker le nom d'utilisateur
  password: string = ''; // Stocker le mot de passe
  errorMessage: string = ''; // Message d'erreur si la connexion échoue
  rememberMe: boolean = false; // Nouvelle variable pour "Se rappeler de moi"
  

  constructor(private loginService: LoginService, private router: Router) {
    // Vérifier si les informations sont stockées dans localStorage
    const storedemail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    const storedRememberMe = localStorage.getItem('rememberMe') === 'true'; // "true" est une chaîne dans localStorage

    if (storedemail && storedPassword && storedRememberMe) {
      this.email = storedemail;
      this.password = storedPassword;
      this.rememberMe = storedRememberMe;
    }
  }
  ngOnInit(): void {
    // Définir la méthode de gestion de la réponse Google
    console.log('LoginComponent loaded!');
    window.handleCredentialResponse = (response: any) => {
      this.handleGoogleResponse(response);
    };
  
    // Initialiser Google Identity Services
    google.accounts.id.initialize({
      client_id: '1063283462150-6ts5f6dnuq9gl1hilq71sru1rd69bt4m.apps.googleusercontent.com',
      callback: window.handleCredentialResponse,
    });
  
    // Afficher le bouton Google
    google.accounts.id.renderButton(
      document.getElementById('googleSignInButton')!,
      { theme: 'outline', size: 'large' } // Options du bouton
    );
  }
  
  handleGoogleResponse(response: any): void {
    console.log('Google Response:', response);
    // Traitez la réponse ici, par exemple, envoyez-la au backend pour validation
  }
  
  

  onSubmit() {
    console.log('Email:', this.email);
    console.log('Mot de passe:', this.password);

    // Appel au service pour vérifier les identifiants
    this.loginService.login(this.email, this.password).subscribe(
      (response) => {
        console.log('Réponse du backend:', response);
        // Vérifiez si un utilisateur a été trouvé 
        if (response && response.access) {
          localStorage.setItem('Access', response.access);
          console.log('Access:', localStorage.getItem('Access'));
          localStorage.setItem('Refresh', response.refresh); 
          this.errorMessage='';
                    // Redirect based on role
                    const userRole = response.user.role;

                    if (userRole === 'administratif') {
                      this.router.navigate(['/listepatient'], {
                        queryParams: { nom: response.user.nom, prenom: response.user.prenom }
                      });
                    } else if (userRole === 'medecin') {
                      this.router.navigate(['/medecin-dashboard']);
                    } else if (userRole === 'infermier') {
                      this.router.navigate(['/infermier-dashboard']);
                    } else {
                      // Default or unknown role
                      this.router.navigate(['/default-dashboard']);
                    }
          if (this.rememberMe) {
            localStorage.setItem('email', this.email);
            localStorage.setItem('rememberMe', 'true');
          }
          else {
            localStorage.removeItem('email');
            localStorage.removeItem('rememberMe');            
          }

        } else {
          // L'utilisateur n'existe pas ou les informations sont incorrectes
          this.errorMessage = 'Email ou mot de passe incorrect';
        }
      },
      (error) => {
        console.error('Erreur lors de la connexion:', error);
        this.errorMessage = 'Une erreur est survenue. Veuillez réessayer plus tard.';
      }
    );
  }
}
