import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { UserService } from "../../user.service";

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
        username: form.value.userData.username,
        email: form.value.userData.email,
        password: form.value.userData.password,
      };
    this.userService.fetchUserData(data).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  signInCallback(authResult) {
    if (authResult['code']) {
      $('#signinButton').attr('style', 'display: none');
      // Send the code to the server
      $.ajax({
        type: 'POST',
        url: 'http://localhost:4200/api/admin/googleLogin',
        contentType: 'application/octet-stream; charset=utf-8',
        success: function(result) {
          console.log(result, "SUCCESSFUL POST TO BACKEND")
        },
        processData: false,
        data: authResult['code']
      });
    } else {
      console.log("THERE WAS AN ERROR IN SIGNINCALLBACK");
    }
  }
  //
  // signOut() {
  //   var auth2 = gapi.auth2.getAuthInstance();
  //   auth2.signOut().then(function () {
  //     console.log('User signed out.');
  //   });
  // }
}
