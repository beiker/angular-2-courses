import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      {{messageComponent}}
      <input
        #myInput
        type="text"
        [(ngModel)]="messageComponent"
        [ngClass]="{mousedown: isMousedown}"
        (mousedown)="isMousedown = true"
        (mouseup)="isMousedown = false"
        (mouseleave)="isMousedown = false"
        >
      <button (click)="update.emit({text:messageComponent})">Click!</button>
      <button (mouseover)="onMouseover($event, myInput.value)">Over!</button>
    </div>
  `,
  styles: [`
    .mousedown {
      border: 2px solid red;
    }
  `]
})
export class SimpleFormComponent implements OnInit {

  isMousedown;

  @Input() messageComponent;

  @Output() update = new EventEmitter();

  constructor() {
    // setInterval(() => this.messageComponent = Math.random().toString(), 1000);
  }

  ngOnInit() {
  }

  onClick(value) {
    console.log(value);
  }

  onMouseover(event, value) {
    console.log(event);
    console.log(value);
  }

}
