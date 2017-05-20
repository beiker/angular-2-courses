import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    numberValues = [];

    constructor() {}

    onGameStarted(value: number) {
        console.log('Number emitted : ' + value);
        const type = (value % 2 === 0) ? 'even' : 'odd';
        this.numberValues.push({
            value: value,
            type: type
        });
    }

    onGameStopped() {
        console.log('Game Stopped :(');
    }
}
