import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-recipe-edit',
    templateUrl: './recipe-edit.component.html',
    styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

    id: number;
    editMode = false;
    @ViewChild('recipeForm') recipeForm: NgForm;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.editMode = params['id'] !== null;
            }
        );
    }

    onSubmit() {
        console.log(this.recipeForm);
    }

}
