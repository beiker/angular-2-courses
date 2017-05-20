import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-even',
    templateUrl: './even.component.html',
    styles: [`
        span {
            font-weight: bolder;
            color: darkviolet;
            font-size: 14px;
        }
    `]
})
export class EvenComponent {
    @Input('number') valueNumber: number;
}