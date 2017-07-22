import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../recipe.model';
@Component({
    selector: 'app-recipe-edit',
    templateUrl: './recipe-edit.component.html',
    styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
    id: number;
    editMode = false;
    recipeForm: FormGroup;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private recipeService: RecipeService) {
    }

    ngOnInit() {
        this.route.params.subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.editMode = params['id'] != null;
                this.loadForm();
            }
        );
    }

    onSubmit() {
        const recipe = new Recipe(
            this.recipeForm.value['name'],
            this.recipeForm.value['description'],
            this.recipeForm.value['imagePath'],
            this.recipeForm.value['ingredients'],
        );
        if (this.editMode) {
            this.recipeService.updateRecipe(this.id, recipe);
        } else {
            this.recipeService.addRecipe(recipe);
        }
        this.onCancel();
    }

    onCancel() {
        this.router.navigate(['../'], {'relativeTo': this.route});
    }

    onAddIngredient() {
        (<FormArray>this.recipeForm.get('ingredients')).push(
            new FormGroup({
                'name': new FormControl(),
                'amount': new FormControl()
            })
        );
    }

    private loadForm() {
        let name = '';
        let description = '';
        let imagePath = '';
        let ingredients = new FormArray([]);
        if (this.editMode) {
            const recipe = this.recipeService.getRecipe(this.id);
            name = recipe.name;
            description = recipe.description;
            imagePath = recipe.imagePath;
            if (recipe.ingredients) {
                for (const ingredient of recipe.ingredients) {
                    ingredients.push(
                        new FormGroup({
                            'name': new FormControl(ingredient.name, Validators.required),
                            'amount': new FormControl(ingredient.amount, [
                                Validators.required,
                                Validators.pattern(/^[1-9]+[0-9]*$/)
                            ])
                        })
                    );
                }
            }
        }
        this.recipeForm = new FormGroup({
            'name': new FormControl(name, Validators.required),
            'description': new FormControl(description, Validators.required),
            'imagePath': new FormControl(imagePath, Validators.required),
            'ingredients': ingredients
        });
    }

    onDeleteIngredient(index: number) {
        (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
    }
}
