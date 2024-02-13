import { Component } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from "@angular/fire/auth"
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = "";
  password: string = "";
  errorMessage?: string;

  constructor(public auth: Auth, public router: Router) {}

  signIn(): void {
    signInWithEmailAndPassword(
      this.auth,
      this.email,
      this.password
    ).then((userCredential) => {
      this.router.navigate(["/"]);
    }).catch((error) => {
      this.errorMessage = error;
    });
  }

}
