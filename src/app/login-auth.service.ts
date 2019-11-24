import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LoginAuthService {
  constructor() {}

  onSubmit(loginForm: any) {
    alert(
      `Username: ${loginForm.value.username} \nPassword: ${loginForm.value.password}`
    );
  }
}
