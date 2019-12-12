import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { PersonService } from "src/app/services/person.component.service";

@Component({
  selector: "app-person",
  templateUrl: "./person.component.html",
  styleUrls: ["./person.component.scss"]
})
export class PersonComponent implements OnInit {
  constructor(public router: Router, private PersonService: PersonService) {}

  ngOnInit() {}

  return() {
    this.router.navigate(["todo"]);
  }

  //--------- CRUD Operations -----------

  addPersonFromService() {
    this.PersonService.addPerson({
      id: this.personList.length + 1,
      name: "hagay"
    });
  }

  updatePersonFromService() {
    this.PersonService.updatePerson(3, "hagay");
  }

  deletePersonFromService() {
    this.PersonService.deletePerson(3);
  }

  getAllPersonsFromService() {
    console.log(this.PersonService.getPersons());
  }

  // ---------------------------------------------------

  personList: Array<object> = this.PersonService.getPersons().sort(
    (a: any, b: any) => a.id - b.id
  );
}
