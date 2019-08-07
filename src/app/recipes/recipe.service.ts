import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    public recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A test recipe 1',
            'simple test recipe 1',
            'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
            [
                new Ingredient('Pork', 1),
                new Ingredient('Tomatoes', 2)
            ]),
        new Recipe(
            'A test recipe 2',
            'simple test recipe 2',
            'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
            [
                new Ingredient('Shrimp', 5),
                new Ingredient('Salad', 3)
            ])
    ];

    getRecipes() {
        return [...this.recipes];
    }
}