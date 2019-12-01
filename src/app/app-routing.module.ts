import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthenticationComponent } from "src/app/authentication/authentication.component";
import { TodoComponent } from "src/app/todo/todo.component";

const routes: Routes = [
  { path: ":status", component: TodoComponent },
  { path: "**", redirectTo: "/all" },
  { path: "todo", component: TodoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
