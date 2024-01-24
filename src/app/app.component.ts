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
  nameFromChild = "";

  pipeToday = new Date();
  pipeUsers = [
    { name: 'Dennis', age: 21 },
    { name: 'Matt', age: 33 },
    { name: 'Adam', age: 21 }
  ];
  pipeSentence: string = 'I love Angular';

parentFunction(data: any) {
  console.warn(data);
  this.nameFromChild = data.name;
}



onClickAdd() {
    this.pipeUsers = [...this.pipeUsers, { name: 'Ben', age: 26 }];
  }

/*   @HostListener('click') onClick(event: Event){
    this.isAvailable = !this.isAvailable;
  } */
}
