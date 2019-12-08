import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { LoginAuthService } from "src/app/login-auth.service";

@Component({
  selector: "app-authentication",
  templateUrl: "./authentication.component.html",
  providers: [LoginAuthService],
  styleUrls: ["./authentication.component.scss"]
})
export class AuthenticationComponent implements OnInit {
  authonticationFailed: boolean = false;
  constructor(
    private loginAuthService: LoginAuthService,
    public router: Router
  ) {}

  ngOnInit() {}

  onSubmit(loginForm: any) {
    this.loginAuthService
      .login(loginForm.value.username, loginForm.value.password)
      .then(ok => {
        if (ok) {
          this.router.navigate(["todo"]);
          console.log(ok);
        }
      })
      .catch(err => {
        this.authonticationFailed = true;
        console.log(err);
      });
  }
}
