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
  username: string;
  password: string;
  message: any;

  constructor(
    private authenticationService: AuthenticationService,
    private httpClient: HttpClient,
    private router: Router
  ) {
  }

  // tslint:disable-next-line:typedef
  login() {
    const response = this.authenticationService.authenticate(this.username, this.password);
    response.subscribe(data => {
      console.log(data);
    });
  }
}
