/**
 * Created by MikeTran on 10/19/16.
 */
import {Component, OnInit} from "@angular/core";
import { UserService } from "./../user.service";

@Component({
  selector: 'callback',
  directives: [],
  pipes: [],
  template: `
<div>I'm an OAuth2 Callback</div>
`
})
export class CallbackComponent implements OnInit {
  constructor(private userService: UserService) {
    //check to see if the token is in the hyperlink

    //if it is parse

    //send to the backend



    googleLogin(data){
      this.userService.googleSignIn(data).subscribe(
        data => console.log(data),
        error => console.log(error)
      );
    }

  }

  ngOnInit(){
    console.log("THIS IS INSIDE OF CALLBACK.TS", window.location.href)

  }
}
