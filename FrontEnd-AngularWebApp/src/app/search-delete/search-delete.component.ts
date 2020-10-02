import {Component, OnInit} from '@angular/core';
import {UserRegistrationService} from '../user-registration.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})

export class SearchDeleteComponent implements OnInit {

  users: any;
  id: number;
  greeting: any;
  userId: any;

  constructor(
    private app: AuthenticationService,
    private service: UserRegistrationService,
    public router: Router,
    public route: ActivatedRoute,
    private http: HttpClient,
  ) {
    http.get('resource').subscribe(data => this.greeting = data);
  }

  // tslint:disable-next-line:typedef
  public deleteUser(id: number) {
    const resp = this.service.DeleteStudent(id);
    resp.subscribe((data) => this.users = data);
  }

  // tslint:disable-next-line:typedef
  public SearchUser() {
    console.log(this.userId);
    this.router.navigate(['home'], {relativeTo: this.route});
    const resp = this.service.findById(this.id);
    resp.subscribe((data) => {
      this.users = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
    const resp = this.service.findAllUsers();
    resp.subscribe((data) => this.users = data);
  }
}
