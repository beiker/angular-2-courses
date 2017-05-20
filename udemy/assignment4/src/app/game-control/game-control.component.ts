import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-game-control',
    templateUrl: './game-control.component.html',
    styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {

    value: number = 0;
    intervalRef;
    @Output() gameStarted = new EventEmitter<number>();
    @Output() gameStopped = new EventEmitter();

    constructor() {}

    onStartGame() {
        this.intervalRef = setInterval(() => {
            this.gameStarted.emit(this.value++);
        }, 1000);
    }

    onStopGame() {
        clearInterval(this.intervalRef);
        this.gameStopped.emit();
    }
}