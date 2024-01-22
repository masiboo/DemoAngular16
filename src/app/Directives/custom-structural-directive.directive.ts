import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customStructuralDirective]'
})
export class CustomStructuralDirectiveDirective implements OnChanges {
  isCustomStDir: boolean = true;
  @Input() customStructuralDirective: boolean = true;

  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) { }

  ngOnChanges() {
      if(this.customStructuralDirective){
        this.vcRef.createEmbeddedView(this.templateRef);
      }else{
        this.vcRef.clear();
      }
  }

}
