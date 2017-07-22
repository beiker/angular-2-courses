import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs/Subject';
@Injectable()
export class RecipeService {
    private recipes: Array<Recipe> = [
        new Recipe(
            'Test Recipe 1',
            'Description Recipe 1',
            'http://media3.sailusfood.com/wp-content/uploads/2016/02/cheese-corn-balls.jpg',
            [
                new Ingredient('Jitomate', 4),
                new Ingredient('Cebolla', 6)
            ]
        ),
        new Recipe(
            'Test Recipe 2',
            'Description Recipe 2',
            'http://images.media-allrecipes.com/userphotos/250x250/949777.jpg',
            [
                new Ingredient('Pepino', 2),
                new Ingredient('Sandia', 8)
            ]
        ),
    ];
    recipesChanged = new Subject<Recipe[]>();

    constructor(private shoppingListService: ShoppingListService) {
    }

    public getRecipes(): Recipe[] {
        return this.recipes.slice();
    }

    public getRecipe(index: number): Recipe {
        return this.recipes[index];
    }

    public addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    public updateRecipe(index: number, recipe: Recipe): void {
        this.recipes[index] = recipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    public addRecipe(recipe: Recipe): void {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    public deleteRecipe(index: number): void {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}