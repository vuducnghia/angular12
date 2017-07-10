import * as angular from "angular";

export type Employees = {
    id: number;
    createdAt: Date;
    name: string;
    age: number;
    status: boolean;
}
export class EmployeeService {
    employees: Employees[];
    a: any[];
    Delete;
    all;
    private resourceUrl = 'http://59506542ce332e0011693bb3.mockapi.io/api/employee/';
    constructor($resource) {
        this.employees = $resource(this.resourceUrl).query();

        this.Delete = function (id: number) {
            console.log('deleted' + id);
            $resource(this.resourceUrl + id).delete();
            // this.employees = $resource(this.resourceUrl).query();
            console.log(this.employees);
        }

        this.all = function () {
            this.employees = $resource(this.resourceUrl).query();
        }
    }
}