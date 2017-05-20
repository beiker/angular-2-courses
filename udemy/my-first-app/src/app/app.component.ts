import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    serverElements = [
        {name: 'TestServer', type: 'server', content: 'Server Content'},
    ];

    onServerAdded(serverData: {name: string, type: string, content: string}) {
        this.serverElements.push({
            type: 'server',
            name: serverData.name,
            content: serverData.content
        });
    }

    onBlueprintAdded(blueprintData: {name: string, type: string, content: string}) {
        this.serverElements.push({
            type: 'blueprint',
            name: blueprintData.name,
            content: blueprintData.content
        })
    }
}