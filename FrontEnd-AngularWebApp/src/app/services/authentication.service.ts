import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Authenticate} from '../model/authenticate';

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  authenticated: boolean;

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  authenticate(credentials: Authenticate, callback) {
    const headers = new HttpHeaders(
      credentials
        ? {
          authorization: 'Basic ' +
            btoa(credentials.username + ':' + credentials.password),
        }
        : {}
    );

    this.http.post('http://localhost:8090/login', credentials).subscribe(
      (response) => {
        // 200 and 201
        // tslint:disable-next-line:triple-equals
        if (response == 'Login') {
          console.log('response successfull');
          this.authenticated = true;
          // tslint:disable-next-line:triple-equals
        } else if (response == 'index') {
          console.log('response successfull');
          this.authenticated = false;
        }
        return callback && callback();
      },
      (err) => {
        // 404
      }
    );
  }

  // tslint:disable-next-line:typedef
  Logout() {
    sessionStorage.removeItem('username');
  }
}
