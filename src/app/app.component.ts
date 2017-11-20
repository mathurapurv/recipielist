import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showRecipiesFlag: Boolean = true;

  displayMainSections(showRecipiesEvent: {showRecipiesFlag: Boolean}) {
    console.log('displayMainSections : ' + showRecipiesEvent.showRecipiesFlag);
    this.showRecipiesFlag = showRecipiesEvent.showRecipiesFlag;
  }
}
