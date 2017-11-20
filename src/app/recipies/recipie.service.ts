import {Recipie} from './recipie.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipieService {

  private recipies: Recipie[] = [
    new Recipie(
      'Vada Paav',
      'describe a testt recipie',
      'http://www.seriouseats.com/images/2016/06/20160606-oven-barbecue-ribs-vicky-wasik-7.jpg',
      [new Ingredient('meat', 5 ),
        new Ingredient('chicken', 3 )]),

    new Recipie(
      'Dosa',
      'describe a testt recipie2',
      'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg',
      [new Ingredient('peas', 5 ),
        new Ingredient('cheese', 3 )]),
    new Recipie(
      'veg pizza',
      'describe a veg pizza',
      'https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg',
      [new Ingredient('cream', 5 ),
        new Ingredient('orange', 3 )]),
    new Recipie(
      'sea food',
      'describe a fish dish ',
      'http://www.hotelsantiniketandigha.com/wp-content/uploads/2015/12/sea-foods-in-digha.jpg',
      [new Ingredient('bacon', 5 ),
        new Ingredient('flour', 3 )]),
    new Recipie(
      'crispy chicken',
      'describe a crispy chicken dish ',
      'http://i2.cdn.cnn.com/cnnnext/dam/assets/150521165141-02-microbiome-foods-restricted-super-169.jpg',
      [new Ingredient('beans', 5 ),
        new Ingredient('cabbage', 3 )])
  ];


  recipieClickedRecipieServiceEvent = new EventEmitter< Recipie > ( );

  getRecipies(): Recipie[] {
    return this.recipies.slice();
  }
}


