import {Component} from '@angular/core';
@Component({
  selector: 'widget-two',
  template: `
    <h2>Above</h2>
    <ng-content></ng-content>
    <h2>Below</h2>
  `,
  styles: [`
    :host {
      display: block;
      border: 5px solid blue;
    }
`]
})
export class WidgetTwo{}
