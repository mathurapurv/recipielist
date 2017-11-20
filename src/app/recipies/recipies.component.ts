import { Component, OnInit } from '@angular/core';
import {Recipie} from './recipie.model';
import {RecipieService} from './recipie.service';


@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
  providers: [RecipieService]
})
export class RecipiesComponent implements OnInit {

  selectedRecipie: Recipie;

  constructor() {}

  ngOnInit() {}

  onRecipieClickedRecipieListComponentEvent(recipie: Recipie) {
    console.log(recipie);
    this.selectedRecipie = recipie;
  }
}
