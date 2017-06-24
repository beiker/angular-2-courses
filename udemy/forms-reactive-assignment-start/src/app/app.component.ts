import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {CustomValidators} from './custom-validators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    projectStatus = ['Stable', 'Critical', 'Finished'];
    projectForm: FormGroup;

    ngOnInit() {
        this.projectForm = new FormGroup({
            'name': new FormControl(
                null,
                [Validators.required, CustomValidators.invalidProjectNameValidator],
                CustomValidators.invalidProjectNameValidatorAsync.bind(this)
            ),
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'status': new FormControl('Stable')
        });
    }

    onSubmit() {
        console.log(this.projectForm.value  );
    }
}
