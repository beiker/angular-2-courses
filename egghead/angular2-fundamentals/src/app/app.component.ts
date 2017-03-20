import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <div>
      <ul>
        <li *ngFor="let message of mail.messages">{{message.text}}</li>
      </ul>

      <app-simple-form
        *ngFor="let message of mail.messages"
        [messageComponent]="message.text"
        (update)="onUpdate(message.id, $event.text)"
        ></app-simple-form>

      <hr>

      {{api}}
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `Let's get started!`;

  constructor(
    @Inject('mail') private mail,
    @Inject('api') private api
   ){}

  onUpdate(id, text) {
    this.mail.update(id, text);
  }
}
