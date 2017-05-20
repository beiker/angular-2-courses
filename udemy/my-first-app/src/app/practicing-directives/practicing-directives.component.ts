import { Component } from '@angular/core';
import {timestamp} from 'rxjs/operator/timestamp';

@Component({
    selector: 'app-practicing-directives',
    templateUrl: './practicing-directives.component.html',
    styles: [`
        .showLog {
            display: block;
        }
        .hideLog {
            display: none;
        }
        .whiteColor {
            color: #FFF;
        }
    `]
})
export class PracticingDirectivesComponent {
    logs = [];
    displayLog = false;

    onCreateLog() {
        this.displayLog = !this.displayLog;
        this.logs.push(new Date);
    }
}