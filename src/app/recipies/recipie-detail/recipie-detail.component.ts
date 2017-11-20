import {Component, Input, OnInit} from '@angular/core';
import {Recipie} from '../recipie.model';
import {RecipieService} from '../recipie.service';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.component.html',
  styleUrls: ['./recipie-detail.component.css']
})
export class RecipieDetailComponent implements OnInit {

  @Input()
  selectedRecipie: Recipie;

  constructor(private recipieService: RecipieService ,
              private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.recipieService.recipieClickedRecipieServiceEvent.subscribe(
      (recipieClickedFromList: Recipie) => {
        console.log('RecipieDetailComponent event captured ') ;
        this.selectedRecipie = recipieClickedFromList;
      }
    );
  }


  onAdditionToShoppingList(ingredients: Ingredient[]) {
    console.log('onAdditionToShoppingList' + ingredients.length);
    this.shoppingListService.addMultipleIngredients(ingredients);
  }

}
