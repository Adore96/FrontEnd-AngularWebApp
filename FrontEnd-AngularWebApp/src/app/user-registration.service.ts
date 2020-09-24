import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  public doRegistration(user: User) {
    console.log(JSON.stringify(user));
    return this.http.post('http://localhost:8080/signup', user);
  }
}
