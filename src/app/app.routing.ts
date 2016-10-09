import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
<<<<<<< HEAD
import {TodoListComponent} from "./todo-list/todo-list.component";
=======
>>>>>>> ee9004cc361e9020ec574962edd66cb36a271810

const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
<<<<<<< HEAD
  { path: '', component: TodoListComponent},
=======
  { path: '', component: AppComponent},
>>>>>>> ee9004cc361e9020ec574962edd66cb36a271810
];

export const routing = RouterModule.forRoot(APP_ROUTES);
