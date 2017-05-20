import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <form #formRef="ngForm" (ngSubmit)="onSubmit(formRef.value)">
          <fieldset ngModelGroup="login">
              <input type="text"
                     name="username"
                     [(ngModel)]="username"
                     required
                     minlength="3"
                     #usernameRef="ngModel"
              />
              <div>Username: {{usernameRef.errors | json}}</div>

              <input type="password" ngModel name="password" />

              <hr>

              <div *ngIf="usernameRef.errors?.required">Este campo es requerido</div>
              <div *ngIf="usernameRef.errors?.minlength">Este campo necesita por lo menos {{usernameRef.errors.minlength.requiredLength}} caracteres. Tu has tipeado {{usernameRef.errors.minlength.actualLength}} caracteres</div>

              <button type="submit" *ngIf="formRef.valid">Submit</button>
          </fieldset>
      </form>
      <hr>
      {{formRef.value | json}}
      {{formRef.valid | json}}
  `,
    styles: [`
        .ng-invalid {
            border: 1px solid red;
        }
        
        .ng-valid {
            border: 1px solid green;
        }
    `]
})
export class AppComponent  {
  username = 'Angular';

  onSubmit(formValue) {
      console.log(formValue)
  }
}
