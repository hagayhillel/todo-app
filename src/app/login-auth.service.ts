import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LoginAuthService {
  constructor() {}

  onSubmit(password: number, username: any) {
    if (password === 12345 && username === "hagay") {
      return true;
    } else {
      return false;
    }
  }
}
