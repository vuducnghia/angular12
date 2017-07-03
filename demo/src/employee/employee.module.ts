import * as angular from 'angular';
import { NgModule } from '@angular/core';
import { EmployeeComponent } from './employee.component';
import { EmployeeService } from './employee.service';


export const EmployeeModule = angular.module('EmployeeModule', ['ngRoute']);
EmployeeModule.component('employee', EmployeeComponent);
EmployeeModule.service('employeeService', EmployeeService);

EmployeeModule.config(($routeProvider) => {
  $routeProvider
    .when('/employee', { template: '<employee></employee>' })
});

