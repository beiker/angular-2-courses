import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

export class CustomValidators {
    static invalidProjectNameValidator(control: FormControl): { [s: string]: boolean } {
        if (control.value === 'Test') {
            return {'isNameInvalid': true};
        }
        return null;
    }

    static invalidProjectNameValidatorAsync(control: FormControl): Promise<any> | Observable<any> {
        const promise = new Promise<any>((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'Testproject') {
                    resolve({'isNameInvalid': true})
                } else {
                    resolve(null);
                }
            }, 1500);
        });
        return promise;
    }
}