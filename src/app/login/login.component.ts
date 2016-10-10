import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { UserService } from "./../user.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styles: [`
    .ng-invalid {
      border: 1px solid red;
    }
  `]
})
export class LoginComponent {
  user = {
    username: 'Max',
    email: 'chris@test.com',
    password: 'test',
  };

  constructor(private userService: UserService) {}

  onSubmit(form:NgForm){
    var data = {
        username: form.value.username,
        email: form.value.email,
        password: form.value.password,
      }

    this.userService.storeUserData(data).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    // axios.post('/api/admin/signup', )
    // if successful
    //   .then(resp => {
    //     if(resp.data.error) console.log("Error in post");
    //   })
    //if not, reload page with error
  }
}
