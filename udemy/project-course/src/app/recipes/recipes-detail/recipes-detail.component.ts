import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
@Component({
    selector: 'app-recipes-detail',
    templateUrl: './recipes-detail.component.html',
    styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
    recipe: Recipe;
    id: number;

    constructor(private recipeService: RecipeService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        // const id = +this.route.snapshot.params['id'];
        // this.recipe = this.recipeService.getRecipe(id);
        this.route.params.subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.recipe = this.recipeService.getRecipe(this.id);
            }
        );
    }

    onAddToShoppingList() {
        this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    }

    onDelete() {
        this.recipeService.deleteRecipe(this.id);
        this.router.navigate(['..'], {'relativeTo': this.route});
    }
}
