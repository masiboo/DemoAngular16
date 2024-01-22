import { OnInit, Directive, ElementRef, Input } from "@angular/core";

@Directive({
  selector: '[textHighlightByAttributeInRed]',

})
export class textHighlightByAttributeInRed implements OnInit {
  @Input() color: string = 'red'; // Default color is red

  constructor(private element: ElementRef){}

  ngOnInit(): void {
    (this.element.nativeElement as HTMLElement).style.background = this.color;

  }


}
