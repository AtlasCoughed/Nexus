import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import axios from 'axios';

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
  user = {
    firstName: "Max",
    lastName: "Payne",
    cohort: 5,
    username: 'Max',
    email: 'chris@test.com',
    password: 'test',
    profilePic: '',
    bio: 'Born in the mountains, but grew up in the concrete jungle'
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

    axios.post('/api/admin/signup', data ).then(resp => {
      if(resp.data.error) console.log("Error in post");
      else { console.log(resp)}
    })
  }
}
