import * as angular from 'angular';
import { NgModule } from '@angular/core';
import { EmployeeComponent } from './employee.component';
import { EmployeeService } from './employee.service';
import { MessageTextCmp } from './employee_cmp.component';
import { downgradeComponent } from '@angular/upgrade/static';


export const EmployeeModule = angular.module('EmployeeModule', ['ngRoute']);
EmployeeModule.component('employee', EmployeeComponent);
EmployeeModule.service('employeeService', EmployeeService);

EmployeeModule.config(($routeProvider) => {
  $routeProvider
    .when('/employee', { template: '<employee></employee>' })
});

@NgModule({
  // components migrated to Angular 2 should be registered here
  declarations: [MessageTextCmp],
  entryComponents: [MessageTextCmp],

  providers: [
  ]
})
export class MessageNgModule {}

// components migrated to angular 2 should be downgraded here
EmployeeModule.directive('messageText', <any>downgradeComponent({
  component: MessageTextCmp,
  inputs: ['text']
}));