import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {

    public ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients = [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 10)];

    getIngridients() {
        return [...this.ingredients];
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit([...this.ingredients]);
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit([...this.ingredients]);
    }

}