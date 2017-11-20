import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput')
  nameInput: ElementRef;

  @ViewChild('amountInput')
  amountInput: ElementRef;

  @Output()
  ingredientAddedEvent = new  EventEmitter<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }


  onIngredientAdd() {
    console.log('name : ' + this.nameInput.nativeElement.value);
    console.log('amount : ' + this.amountInput.nativeElement.value) ;


    // uncommnet this to send event via component chains
    //  this.ingredientAddedEvent.emit(
    //       new Ingredient(this.nameInput.nativeElement.value ,
    //               this.amountInput.nativeElement.value ));

    // use service for event propogation
    this.shoppingListService.ingredientAddedEventService.emit(
      new Ingredient(this.nameInput.nativeElement.value ,
                   this.amountInput.nativeElement.value ));

  }

}
