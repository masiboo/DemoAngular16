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
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeService } from './employee.service';

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
    EmployeeListComponent,
    EmployeeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
