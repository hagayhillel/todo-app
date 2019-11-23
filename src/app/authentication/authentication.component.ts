import { Component, OnInit } from "@angular/core";

import { LoginAuthService } from "src/app/login-auth.service";

@Component({
  selector: "app-authentication",
  templateUrl: "./authentication.component.html",
  providers: [LoginAuthService],
  styleUrls: ["./authentication.component.scss"]
})
export class AuthenticationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onSubmit(loginForm: any) {
    alert(
      `Username: ${loginForm.value.username} \nPassword: ${loginForm.value.password}`
    );
  }
}
