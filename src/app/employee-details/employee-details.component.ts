import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../Employee';
import { EmployeeObserver } from '../EmployeeObserver';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public employees: IEmployee[] = [];
  public employeeObserver: EmployeeObserver = new EmployeeObserver();

  constructor(private employeeService: EmployeeService ){

  }

  ngOnInit(): void {
      this.employeeService.getEmployees().subscribe( data => this.employees = data);
  }
}
