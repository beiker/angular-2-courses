import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ShoppingListService} from '../shopping-list.service';
import {Ingredient} from '../../shared/ingredient.model';
@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
    @ViewChild('nameInput') nameInput: ElementRef;
    @ViewChild('amountInput') amountInput: ElementRef;

    constructor(private shoppingListService: ShoppingListService) {
    }

    ngOnInit() {
    }

    onAddItem() {
        const name = this.nameInput.nativeElement.value;
        const amount = this.amountInput.nativeElement.value;
        this.shoppingListService.addIngredient(new Ingredient(name, amount));
    }
}
