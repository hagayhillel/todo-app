import { Injectable } from "@angular/core";

interface Person {
  id: number;
  name: string;
  lastName?: string;
  phoneNumber?: number;
  email?: string;
  address?: string;
}

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
  constructor() {}

  addPerson(person: Person) {
    persons.push(person);
    persons.sort((a: any, b: any) => a.id - b.id);
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
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].id === id) {
        persons.splice(i, i + 1);
      } else {
        alert("Person was not found");
      }
    }
  }
  getPersons(): Array<Person> {
    return persons;
  }
}
