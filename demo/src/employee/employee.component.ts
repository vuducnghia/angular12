import { EmployeeService, Employees } from './employee.service';
export class EmployeeController {
    Click;
    Delete;
    employee: Employees[];

    constructor($routeParams, employeeService: EmployeeService) {
        this.employee = employeeService.employees;

        

        this.Delete = function (id:number) {
            employeeService.Delete(id);
            employeeService.all();
            alert("Da xoa");
        }
    }
}
export const EmployeeComponent = {
    templateUrl: './src/employee/employee.component.html',// cái html angular1 bắt buộc phải có ./src/... đi từ nguồn
    controller: EmployeeController,
    controllerAs: 'vm'
};