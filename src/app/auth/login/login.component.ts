import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string;
  password: string;

  constructor(public authService: AuthService, public router: Router) {
  }

  login() {
    this.authService.login(this.email, this.password).subscribe(() => {
      if (this.authService.isLoggedIn()) {
        // const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '';
        console.log('sucess');
        const redirect = '';
        this.router.navigateByUrl(redirect);
      } else {
        console.log('already logged in');
      }
    });
  }

  reset() {
    this.email = '';
    this.password = '';
  }
}
