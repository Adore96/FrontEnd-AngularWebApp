import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  credentials = {username: '', password: ''};

  constructor(
    private app: AuthenticationService,
    private http: HttpClient,
    private router: Router
  ) {
  }

  // tslint:disable-next-line:typedef
  login() {
    console.log('login called');
    console.log(this.credentials);
    // const resp = this.app.doLogin(this.credentials);
    this.app.authenticate(this.credentials, () => {
      this.router.navigateByUrl('/main');
      console.log('App authenticated :', this.app.authenticated);
    });
    return false;
  }
}
