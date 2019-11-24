import { Component, OnInit } from "@angular/core";

import { LoginAuthService } from "src/app/login-auth.service";

@Component({
  selector: "app-authentication",
  templateUrl: "./authentication.component.html",
  providers: [LoginAuthService],
  styleUrls: ["./authentication.component.scss"]
})
export class AuthenticationComponent implements OnInit {
  constructor(private loginAuthService: LoginAuthService) {
    this.loginAuthService = loginAuthService;
  }

  ngOnInit() {}

  onSubmit(loginForm: any) {
    this.loginAuthService.onSubmit(loginForm);
  }
}
