import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector : 'app-header',
  templateUrl : './header.component.html'
})
export class HeaderComponent {

  showRecipiesFlag: Boolean = true;

  @Output()
  showRecipiesEvent  = new EventEmitter<{
    showRecipiesFlag: Boolean
  }>();


  showReciepies(incomingShowRecipiesFlag: Boolean) {
    this.showRecipiesFlag = incomingShowRecipiesFlag;
    this.showRecipiesEvent.emit({showRecipiesFlag:  incomingShowRecipiesFlag});
    console.log('toggle : ' + this.showRecipiesFlag);
  }







}
