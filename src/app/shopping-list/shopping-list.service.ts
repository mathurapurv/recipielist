import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter, OnInit} from '@angular/core';

export class ShoppingListService implements  OnInit {

  ingredientAddedEventService = new EventEmitter<Ingredient>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5 ),
    new Ingredient('tomato', 3 )
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
  }

  addMultipleIngredients(ingredients: Ingredient[]  ) {
    this.ingredients.push(...ingredients);
  }


  ngOnInit(): void {

  }



}
