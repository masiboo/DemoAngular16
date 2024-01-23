import { IEmployee } from "./Employee";

export class EmployeeObserver {
  public employees: IEmployee[] = [];
  public errorMsg: string = "";

  next(data: IEmployee[]) {
    this.employees = data;
  }

  error(error: any) {
    this.errorMsg = error;
  }

  complete() {}
}
