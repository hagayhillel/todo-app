import { Component, OnInit } from "@angular/core";

import { LoginAuthService } from "src/app/login-auth.service";

@Component({
  selector: "app-authentication",
  templateUrl: "./authentication.component.html",
  providers: [LoginAuthService],
  styleUrls: ["./authentication.component.scss"]
})
export class AuthenticationComponent implements OnInit {
  constructor(private loginAuth: LoginAuthService) {}
  user: any;
  ngOnInit() {
    this.user = this.loginAuth.onSubmit(12345, "hagay");
  }
}
