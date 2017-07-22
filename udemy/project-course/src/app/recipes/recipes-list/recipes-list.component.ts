import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {Subscription} from 'rxjs/Subscription';
@Component({
    selector: 'app-recipes-list',
    templateUrl: './recipes-list.component.html',
    styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnDestroy {
    public recipes: Array<Recipe> = [];
    private subscription: Subscription;

    constructor(private recipeService: RecipeService) {
    }

    ngOnInit() {
        this.subscription = this.recipeService.recipesChanged.subscribe(
            (recipes: Recipe[]) => {
                this.recipes = recipes;
            }
        );
        this.recipes = this.recipeService.getRecipes();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
