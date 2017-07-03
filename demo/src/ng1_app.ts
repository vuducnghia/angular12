/**
 * This file defines the root module of the Angular 1 of the application.
 */

// import angular1
import * as angular from 'angular';
import 'angular-route'; // cai nay de import ngRouter ben duoi
import 'angular-resource';
import { HomeModule } from './home/home.module';
import { MessageModule } from './message/message.module';
import { LoginModule } from './login/login.module';
import { EmployeeModule } from './employee/employee.module';

// import app modules


export const Ng1AppModule = angular.module('Ng1AppModule', 
[
  'ngRoute', 
  'ngResource',
  HomeModule.name,
  MessageModule.name,
  LoginModule.name,
  EmployeeModule.name
]);

Ng1AppModule.config(($locationProvider) => {
  $locationProvider.html5Mode(true)
});

// const otherwiseConfigBlock = ['$urlRouterProvider', $urlRouterProvider => { $urlRouterProvider.otherwise("/welcome"); }];
// Ng1AppModule.config(otherwiseConfigBlock);