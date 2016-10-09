import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
<<<<<<< HEAD
import axios from 'axios';
=======
>>>>>>> ee9004cc361e9020ec574962edd66cb36a271810

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
<<<<<<< HEAD
  };

  onSubmit(form:NgForm){
    axios.post('/api/admin/signup', {
      username: form.value.username,
      email: form.value.email,
      password: form.value.password,
    }).then(resp => {
      if(resp.data.error) console.log("Error in post");
    })
=======
  }

  onSubmit(form:NgForm){
    console.log(form.value);
>>>>>>> ee9004cc361e9020ec574962edd66cb36a271810
  }
}
