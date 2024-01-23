import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { IEmployee } from './Employee';

@Injectable()
export class EmployeeService {

  private url: string = "/assets/data/employees.json";

  constructor(private http: HttpClient) {

  }


  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this.url)
            .pipe(catchError(this.errorHandler));

  }

  errorHandler(error: HttpErrorResponse){
    return throwError(() => new Error(error.message || "Server Error"));
  }

}
