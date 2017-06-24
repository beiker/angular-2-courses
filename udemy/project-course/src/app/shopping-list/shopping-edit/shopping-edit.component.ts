import {
    Component,
    OnDestroy,
    OnInit,
    ViewChild
} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

    subscription: Subscription;
    @ViewChild('f') slForm: NgForm;
    editIngredient: Ingredient;
    editMode = false;
    editedIngredientIndex: number;

    constructor(private shoppingListService: ShoppingListService) {
    }

    ngOnInit() {
        this.subscription = this.shoppingListService.onEditIngredient
        .subscribe(
            (id: number) => {
                this.editMode = true;
                this.editedIngredientIndex = id;
                this.editIngredient = this.shoppingListService.getIngredient(id);
                this.slForm.setValue({
                    name: this.editIngredient.name,
                    amount: this.editIngredient.amount
                });
            }
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onAddItem(f: NgForm) {
        const value = f.value;
        const ingredient = new Ingredient(value.name, value.amount);
        if (this.editMode) {
            this.shoppingListService.updateIngredient(this.editedIngredientIndex, ingredient);
        } else {
            this.shoppingListService.addIngredient(ingredient);
        }
        this.editMode = false;
        this.slForm.reset();
    }

    onClear() {
        this.slForm.reset();
        this.editMode = false;
    }

    onDelete() {
        this.shoppingListService.deleteIngredient(this.editedIngredientIndex);
        this.onClear();
    }
}
