import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LoginAuthService {
  constructor() {}

  login(username: String, password: String) {
    return new Promise(function(resolve, reject) {
      if (!(password === "12345" && username === "hagay")) {
        reject(false);
      } else {
        resolve(true);
      }
    });
  }
}
