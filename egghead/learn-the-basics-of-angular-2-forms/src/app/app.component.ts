import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `
        <h2>Angular 2 Forms</h2>
        <input
            type="text"
            [(ngModel)]="username"
            #usernameRef="ngModel"
            required
            minlength="3"
        >
        <div *ngIf="usernameRef.errors?.required">Este campo es requerido</div>
        <div *ngIf="usernameRef.errors?.minlength">Este campo debe contener mas de {{usernameRef.errors?.minlength.requiredLength}} caracteres, tu has tipeado {{usernameRef.errors?.minlength.antualLength}} caracteres</div>
        <hr>
        {{usernameRef.errors | json}}
    `
})
export class AppComponent{
    username = 'Ivan';
}
