import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers = [2, 4];
  evenNumbers = [1, 3, 5];
  showOddNumbers = false;
  value = 119238123;
}
