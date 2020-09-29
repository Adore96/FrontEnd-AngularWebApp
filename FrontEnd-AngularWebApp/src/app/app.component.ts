import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthenticationService} from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SpringAngularWebApp';

  constructor(private app: AuthenticationService, private http: HttpClient, private router: Router) {
    this.app.authenticate(undefined, undefined);
  }


  // tslint:disable-next-line:typedef
  //   logout() {
  //   this.http.post('logout', {}).finally(() => {
  //     this.app.authenticated = false;
  //     this.router.navigateByUrl('/login');
  //   }).subscribe();
  // }

}
