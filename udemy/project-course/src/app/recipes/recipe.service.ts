import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService {
    public onSelectRecipe = new EventEmitter<Recipe>();
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

    constructor(private shoppingListService: ShoppingListService) {}

    public getRecipes(): Recipe[] {
        return this.recipes.slice();
    }

    public addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}