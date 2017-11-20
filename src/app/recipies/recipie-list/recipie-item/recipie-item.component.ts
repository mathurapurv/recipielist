import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipie} from '../../recipie.model';
import {RecipieService} from '../../recipie.service';


@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.css']
})
export class RecipieItemComponent implements OnInit {

  @Input()
  recipieItem: Recipie;

  @Output()
  recipieClickedFromListEvent = new EventEmitter< void > ( );




  constructor(private recipieService: RecipieService) { }

  recipieItemClicked(recipieClicked: Recipie) {
    console.log(recipieClicked);
    // uncomment this to use event propogated via components
    // this.recipieClickedFromListEvent.emit();
    // capture this event and propogate via services
    this.recipieService.recipieClickedRecipieServiceEvent.emit(recipieClicked);
  }

  ngOnInit() {
  }

}
