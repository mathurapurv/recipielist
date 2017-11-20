import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipie} from '../recipie.model';
import {RecipieService} from '../recipie.service';


@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']

})
export class RecipieListComponent implements OnInit {

  @Output()
  recipieClickedRecipieListComponentEvent = new EventEmitter< Recipie > ( );

  recipies: Recipie[];


  onRecipieClickedFromListEvent(recipieClickedFromList: Recipie) {
    console.log(recipieClickedFromList);

    this.recipieClickedRecipieListComponentEvent.emit(recipieClickedFromList);


  }

  constructor(private recipieService: RecipieService) { }

  ngOnInit() {
    this.recipies= this.recipieService.getRecipies();
  }

}
