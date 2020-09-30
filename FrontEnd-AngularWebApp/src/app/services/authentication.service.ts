import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthenticationService {

  authenticated: boolean;

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  authenticate(username: string, password: string) {
    console.log(username, password);
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
    return this.http.get('http://localhost:8090/login?username=' + username + '&password=' + password, {
       responseType: 'text' as 'json'
    });
  }

  // tslint:disable-next-line:typedef
  Logout() {
    sessionStorage.removeItem('username');
  }
}
