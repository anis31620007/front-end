
import { Component } from '@angular/core';
import { LoginService } from '../login.service'; // Importer le service
import { Router } from '@angular/router'; // Pour rediriger après connexion
import { CommonModule } from '@angular/common'; // Importation de CommonModule
import { FormsModule } from '@angular/forms'; // Importation de FormsModule
declare const google: any; // Déclarez Google pour accéder à son SDK


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule] // ces imports pour résoudre l'erreur
})
export class LoginComponent {
  username: string = ''; // Stocker le nom d'utilisateur
  password: string = ''; // Stocker le mot de passe
  errorMessage: string = ''; // Message d'erreur si la connexion échoue
  rememberMe: boolean = false; // Nouvelle variable pour "Se rappeler de moi"
  

  constructor(private loginService: LoginService, private router: Router) {
    // Vérifier si les informations sont stockées dans localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    const storedRememberMe = localStorage.getItem('rememberMe') === 'true'; // "true" est une chaîne dans localStorage

    if (storedUsername && storedPassword && storedRememberMe) {
      this.username = storedUsername;
      this.password = storedPassword;
      this.rememberMe = storedRememberMe;
    }
  }
  ngOnInit(): void {
    // Définir la méthode de gestion de la réponse Google
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
    console.log('Nom d\'utilisateur:', this.username);
    console.log('Mot de passe:', this.password);

    // Appel au service pour vérifier les identifiants
    this.loginService.login(this.username, this.password).subscribe(
      (response) => {
        console.log('Réponse du backend:', response);
        // Vérifiez si un utilisateur a été trouvé 
        if (response && response.length > 0) {
          // L'utilisateur existe
          this.errorMessage = ''; // Réinitialiser le message d'erreur
          this.router.navigate(['/dashboard']); // Rediriger vers le dashboard

          // Si "Se rappeler de moi" est coché, mémoriser les informations dans localStorage
          if (this.rememberMe) {
            localStorage.setItem('username', this.username);
            localStorage.setItem('password', this.password);
            localStorage.setItem('rememberMe', 'true');
          } else {
            localStorage.removeItem('username');
            localStorage.removeItem('password');
            localStorage.removeItem('rememberMe');
          }

        } else {
          // L'utilisateur n'existe pas ou les informations sont incorrectes
          this.errorMessage = 'Nom d\'utilisateur ou mot de passe incorrect';
        }
      },
      (error) => {
        console.error('Erreur lors de la connexion:', error);
        this.errorMessage = 'Une erreur est survenue. Veuillez réessayer plus tard.';
      }
    );
  }
}
