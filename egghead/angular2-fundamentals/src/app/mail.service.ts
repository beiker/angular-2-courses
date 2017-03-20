import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    {id: 0, text:`You've got mail!`},
    {id: 1, text:`Message 2`},
    {id: 2, text:`Message 3`},
  ];

  constructor() { }

  update(id, text) {
    this.messages = this.messages.map(m =>
      m.id === id
        ? {id, text}
        : m
    )
  }
}
