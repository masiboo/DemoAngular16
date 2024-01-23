import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  @Input() childComponentName: string = "Child default name";
  @Output() parentFunction: EventEmitter<any>= new EventEmitter();

  ngOnInit(): void {

  }

  sendData(){
    let data = {
      name: 'Mahi Islam',
      age: 6,
      email: 'test@gmail.com'
    }
    this.parentFunction.emit(data);
  }

}
