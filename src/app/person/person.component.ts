import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { PersonService } from "src/app/services/person.component.service";

@Component({
  selector: "app-person",
  templateUrl: "./person.component.html",
  styleUrls: ["./person.component.scss"]
})
export class PersonComponent implements OnInit {
  personList: Array<object> = this.personService
    .getPersons()
    .sort((a: any, b: any) => a.id - b.id);
  constructor(public router: Router, private personService: PersonService) {}

  ngOnInit() {}

  navigateBack() {
    this.router.navigate(["todo"]);
  }

  //--------- CRUD Operations -----------

  addPersonFromService() {
    this.personService.addPerson({
      id: this.personService.nextId,
      name: "hagay"
    });
    this.personService.getPersons().sort((a: any, b: any) => a.id - b.id);
  }

  updatePersonFromService() {
    this.personService.updatePerson(3, "hagay");
  }

  deletePersonFromService() {
    this.personService
      .deletePerson(3)
      .then(
        () =>
          (this.personList = this.personService
            .getPersons()
            .sort((a: any, b: any) => a.id - b.id))
      );
  }

  getAllPersonsFromService() {
    this.personService.getPersons();
  }

  // ---------------------------------------------------
}
