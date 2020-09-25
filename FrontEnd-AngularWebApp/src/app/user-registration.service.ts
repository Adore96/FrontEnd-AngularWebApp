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
    return this.http.post('http://localhost:8090/signup', user);
  }

  // tslint:disable-next-line:typedef
  public findAllUsers() {
    // console.log(JSON.stringify());
    return this.http.get('http://localhost:8090/findAllUsers');
  }

  // tslint:disable-next-line:typedef
  public findById(id) {
    console.log(JSON.stringify(id));
    return this.http.get('http://localhost:8090/findById/' + id);
  }

  // tslint:disable-next-line:typedef
  public DeleteStudent(id) {
    console.log(JSON.stringify(id));
    return this.http.delete('http://localhost:8090/DeleteStudent/' + id);
  }
}
