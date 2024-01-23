import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../Employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public employees: Employee[] = [];
  constructor(private employeeService: EmployeeService ){

  }

  ngOnInit(): void {
      this.employees = this.employeeService.getEmployees();
  }
}
