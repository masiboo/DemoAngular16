import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuiltInDirectiveComponent } from './built-in-directive/built-in-directive.component';
import { textHighlightInRed} from './Directives/SelectorDirective';
import { textHighlightByAttributeInRed } from './Directives/AttributeDirective';
import { RendererHighlightDirective } from './Directives/renderer-highlight.directive';
import { HostBindingDirectiveDirective } from './Directives/host-binding-directive.directive';
import { CustomStructuralDirectiveDirective } from './Directives/custom-structural-directive.directive';
import { ChildComponentComponent } from './child-component/child-component.component';

@NgModule({
  declarations: [
    AppComponent,
    BuiltInDirectiveComponent,
    textHighlightInRed,
    textHighlightByAttributeInRed,
    RendererHighlightDirective,
    HostBindingDirectiveDirective,
    CustomStructuralDirectiveDirective,
    ChildComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
