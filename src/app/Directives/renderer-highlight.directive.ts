import { Directive, ElementRef, OnInit, Renderer2, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[rendererHighlight]'
})
export class RendererHighlightDirective implements OnInit {
  @Input() color: string = 'red'; // Default color is red
  @Input() styleType: string = 'background-color'; // Default color is red

  constructor(private element: ElementRef,
              private renderer: Renderer2) {


  }

  ngOnInit(): void {
   this.renderer.setStyle(
    this.element.nativeElement,
    this.styleType,
    this.color);
  }

  @HostListener('mouseenter') onMouseEnter(event: Event){
    this.renderer.setStyle(
    this.element.nativeElement,
    this.styleType,
    'red');
  }

  @HostListener('mouseleave') onMouseLeave(event: Event){
    this.renderer.setStyle(
    this.element.nativeElement,
    this.styleType,
    'blue');
  }

    @HostListener('click') onClick(event: Event){
    this.renderer.setStyle(
    this.element.nativeElement,
    this.styleType,
    'black');
  }

}
