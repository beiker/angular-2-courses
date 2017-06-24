import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';
export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];
    onIngredientsChange = new Subject<Array<Ingredient>>();
    onEditIngredient = new Subject<number>();

    public getIngredients(): Array<Ingredient> {
        return this.ingredients.slice();
    }

    public getIngredient(index: number) {
        return this.ingredients[index];
    }

    public addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.onIngredientsChange.next(this.ingredients.slice());
    }

    public addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.onIngredientsChange.next(this.ingredients.slice());
    }

    public updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.onIngredientsChange.next(this.ingredients.slice());
    }

    public deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.onIngredientsChange.next(this.ingredients.slice());
    }
}
