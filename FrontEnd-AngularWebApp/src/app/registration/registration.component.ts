import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {UserRegistrationService} from '../user-registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: User = new User('kkkk', 'kkk', 'kkkkk', 'kkk', 2525);
  message: any;

  constructor(private service: UserRegistrationService) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public registerNow() {
    console.log(JSON.stringify(this.user));
    const resp = this.service.doRegistration(this.user);
    resp.subscribe((data) => this.message = data);
  }

}
