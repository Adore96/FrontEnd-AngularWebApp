import {Component} from '@angular/core';
import {UserRegistrationService} from '../user-registration.service';
import {User} from '../user';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent {
  user: User = new User('', '', '', '', 0);
  message: any;
  greeting = {};

  constructor(
    private service: UserRegistrationService,
    private httpClient: HttpClient
  ) {
    // @ts-ignore
    this.httpClient.get('resource').subscribe(data => this.greeting = data);
  }

  // tslint:disable-next-line:typedef
  // authenticated() {
  //   return this.app.authenticated;
  // }

  // tslint:disable-next-line:typedef
  public registerNow() {
    console.log(JSON.stringify(this.user));
    const resp = this.service.doRegistration(this.user);
    resp.subscribe((data) => this.message = data);
  }
}
