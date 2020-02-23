import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-frontend';

  constructor(public authService: AuthService, public router: Router) {
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('');
  }
}
