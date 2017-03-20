import {Component, Input} from '@angular/core';
@Component({
  selector: 'widget-one',
  template: `
    <h2>Widget One message:</h2>
    <h3>{{message}}</h3>
  `,
  styles: [`
    :host {
      display: block;
      border: 1px red dashed;
    }
    * {
      font-family: "Time New Roman";
      font-size: 13px;
    }
`]
})
export class WidgetOne{
  @Input() message;
}
