import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Authenticate } from '../model/authenticate';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  credentials = new Authenticate('', '');

  constructor(
    private app: AuthenticationService,
    private http: HttpClient,
    private router: Router
  ) {}

  // tslint:disable-next-line:typedef
  login() {
    console.log('login called');
    this.app.authenticate(this.credentials, () => {
      this.router.navigateByUrl('/login');
    });
    return false;
  }
}
