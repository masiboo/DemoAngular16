import { Directive, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[hostBindingDirective]'
})
export class HostBindingDirectiveDirective {
  @Input() defaultColor : string = 'red';
  @Input() highlightColor : string = 'yellow';
  @Input() clickColor : string = 'blue';
  @HostBinding('style.backgroundColor') color : string = this.defaultColor;

  constructor() { }

  @HostListener('mouseenter') onMouseEnter(event: Event){
      this.color = this.defaultColor;
  }

  @HostListener('mouseleave') onMouseLeave(event: Event){
    this.color = this.highlightColor;
  }

    @HostListener('click') onClick(event: Event){
      this.color = this.clickColor;
  }

}
