import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { UserService } from "./../user.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [`
    .ng-invalid {
      border: 1px solid red;
    }
  `]
})
export class SignupComponent {
  constructor(private userService: UserService) {}

  user = {
    firstName: "Max",
    lastName: "Payne",
    cohort: 5,
    username: 'Max',
    email: 'chris@test.com',
    password: 'test',
    profilePic: '',
    bio: 'Born in the mountains; Raised in the concrete jungle'
  };

  onSubmit(form:NgForm){
    var data = {
      username: form.value.username,
      email: form.value.email,
      password: form.value.password,
      firstName:form.value.firstName,
      lastName:form.value.lastName,
      cohort: form.value.cohort,
      profilePic: form.value.profilePic,
      bio: form.value.bio
    };

    this.userService.storeUserData(data).subscribe(
      data => console.log(data),
      error => console.log(error)
    );

    //.then()
    //redirect to "/" page
  }
}
