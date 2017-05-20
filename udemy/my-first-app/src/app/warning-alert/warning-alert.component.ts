import { Component } from '@angular/core';

@Component({
    selector: '[app-warning-alert]',
    template: `
        <div class="alert alert-warning"><p>{{ message }}</p></div>
    `,
    styles: [`
        p {
            color: red;
            font-size: 12px;
            font-family: Helvetica;
        }
    `]
})
export class WarningAlertComponent {
    message = 'Warning Alert!';
}