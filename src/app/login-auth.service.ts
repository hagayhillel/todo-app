import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LoginAuthService {
  constructor() {}

  onSubmit(loginForm: any) {
    let password: string = loginForm.value.password;
    alert(`Username: ${loginForm.value.username} \nPassword: ${password}`);
  }
}
