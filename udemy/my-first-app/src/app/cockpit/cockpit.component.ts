import {
    Component, ElementRef, EventEmitter, Output,
    ViewChild
} from '@angular/core';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
    @Output() serverCreated = new EventEmitter<{name: string, type: string, content: string}>();
    @Output() blueprintCreated = new EventEmitter<{name: string, type: string, content: string}>();
    // newServerName;
    // newServerContent;
    @ViewChild('serverContentInput') serverContentInput: ElementRef;

    constructor() {}

    onAddServer(serverName: HTMLInputElement) {
        this.serverCreated.emit({
            name: serverName.value,
            type: 'server',
            content: this.serverContentInput.nativeElement.value
        });
    }

    onAddBlueprint(serverName: HTMLInputElement) {
        this.blueprintCreated.emit({
            name: serverName.value,
            type: 'blueprint',
            content: this.serverContentInput.nativeElement.value
        });
    }
}