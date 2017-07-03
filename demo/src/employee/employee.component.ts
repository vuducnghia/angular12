import { EmployeeService, Employees } from './employee.service';
export class EmployeeController {
    Click;
    employee: Employees[];

    constructor($routeParams, employeeService: EmployeeService) {
        this.employee = employeeService.employees;

        this.Click = function () {
            employeeService.getAll();
        }

        this.Delete = function (id) {
            employeeService.Delete(id);
        }
    }
    Delete;
}
export const EmployeeComponent = {
    templateUrl: './src/employee/employee.component.html',// cái html angular1 bắt buộc phải có ./src/... đi từ nguồn
    controller: EmployeeController,
    controllerAs: 'vm'
};