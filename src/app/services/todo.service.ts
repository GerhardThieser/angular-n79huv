import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  constructor() { }

  getTodos() {
    return [
      { id: 1, title: "Brot einkaufen", completed: false },
      { id: 2, title: "Mails checken", completed: false },
      { id: 3, title: "Apfel essen", completed: true }
    ];
  }

}