import { Injectable } from "@angular/core";

import { Person } from "src/app/models/person.model";
import { resolve } from "url";

let persons = [
  { id: 3, name: "jake" },
  { id: 2, name: "john" },
  { id: 5, name: "dean" },
  { id: 10, name: "david" },
  { id: 3, name: "ben" }
];

@Injectable({
  providedIn: "root"
})
export class PersonService {
  public nextId = 1;
  constructor() {}

  addPerson(person: Person) {
    persons.push(person);
    this.nextId++;
  }
  updatePerson(id: number, person: string) {
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].id === id && persons[i].name === person) {
        persons[i].name = "david";
      } else {
        alert("Person was not found");
      }
    }
  }
  deletePerson(id: number) {
    return new Promise(resolve => {
      persons = persons.filter(personr => personr.id !== id);
      resolve(true);
    });
  }
  getPersons(): Array<Person> {
    return persons;
  }
}
