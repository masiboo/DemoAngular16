import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoAngular16';
  isAvailable: boolean = true;
  value : number = 10;

/*   @HostListener('click') onClick(event: Event){
    this.isAvailable = !this.isAvailable;
  } */
}
