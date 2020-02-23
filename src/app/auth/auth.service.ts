import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../core/api.service';

interface User {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private static readonly key = 'token';
  redirectUrl: string;
  private token: string;

  constructor(private api: ApiService) {
    this.token = sessionStorage.getItem(AuthService.key);
  }

  isLoggedIn() {
    return !!this.token;
  }

  login(email: string, password: string): Observable<boolean> {
    const user: User = {
      email,
      password
    };
    return new Observable<boolean>((observer) => {
      this.api.post('/login', user).subscribe(
        ({token}: { token: string }) => {
          this.token = token;
          sessionStorage.setItem(AuthService.key, token);
          observer.next(true);
        });
    });
  }

  logout() {
    sessionStorage.removeItem(AuthService.key);
    this.token = null;
  }
}
