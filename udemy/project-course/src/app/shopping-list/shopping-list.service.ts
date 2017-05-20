import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];
    onIngredientsChange = new EventEmitter<Array<Ingredient>>();

    public getIngredients(): Array<Ingredient> {
        return this.ingredients.slice();
    }

    public addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.onIngredientsChange.emit(this.ingredients.slice());
    }

    public addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.onIngredientsChange.emit(this.ingredients.slice());
    }
}
