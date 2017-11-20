import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {


  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  @HostListener('click')
  onClick(eventData: Event) {
    const parentDiv = this.elementRef.nativeElement.parentElement;
    if (parentDiv.classList.contains('open')) {
      this.renderer.removeClass(parentDiv, 'open');
    } else {
      this.renderer.addClass(parentDiv, 'open');
    }
  }

}
