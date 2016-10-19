import {Component} from "@angular/core";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent {
  constructor(private authService: AuthService) {
  }

  get authenticated() {
    return this.authService.isAuthenticated();
  }
  doLogin() {
    this.authService.doLogin();
  }

  doLogout() {
    this.authService.doLogout();
  }
  get userName() {
    return this.authService.getUserName();
  }
}
