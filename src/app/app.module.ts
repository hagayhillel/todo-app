import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { TodoComponent } from "./todo/todo.component";
import { AuthenticationComponent } from "./authentication/authentication.component";
import { PersonComponent } from "./person/person.component";

const routes: Routes = [
  { path: "", component: AuthenticationComponent },
  { path: "person", component: PersonComponent },
  { path: ":status", component: TodoComponent },
  { path: "**", redirectTo: "/all" },
  { path: "todo", component: TodoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AuthenticationComponent,
    PersonComponent
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [AuthenticationComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
