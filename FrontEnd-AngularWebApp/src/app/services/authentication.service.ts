import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Authenticate} from '../model/authenticate';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {
  }

  static authenticated: boolean;


  authenticated: boolean;

  // tslint:disable-next-line:typedef
  authenticate(credentials: Authenticate, callback) {

    const headers = new HttpHeaders(credentials ? {
      authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.get('user', {headers}).subscribe(response => {
      // 200 and 201
      if (response['Login']) {
        this.authenticated = true;
      } else {
        this.authenticated = false;
      }
      return callback && callback();
    }, err => {
      // 404
    });
  }

  // tslint:disable-next-line:typedef
  Logout() {
    sessionStorage.removeItem('username');
  }

}


// // tslint:disable-next-line:typedef
// authenticate(username, password) {
//   if (username === '' && password === '') {
//     sessionStorage.setItem('username', username);
//     return true;
//   } else {
//     return false;
//   }
// }
//
// // tslint:disable-next-line:typedef
// isUserLoggedin() {
//   const user = sessionStorage.getItem('username');
//   console.log(!(user === null));
//   return !(user === null);
// }
//
// tslint:disable-next-line:typedef
// Logout(){
//   sessionStorage.removeItem('username');
// }

