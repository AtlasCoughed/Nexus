import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./pages/login/login.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { TodoListComponent } from "./pages/todo-list/todo-list.component";

const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: TodoListComponent},
  { path: 'auth/callback', pathMatch: 'full', component: LoginComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
