import * as angular from 'angular';
import {NgModule} from '@angular/core';
import { LoginComponent } from './login.component';

export const LoginModule = angular.module('LoginModule', ['ngRoute']);
LoginModule.component('login', LoginComponent);
LoginModule.config(($routeProvider) => {
    $routeProvider
    .when('/login', {template : '<login></login>'})
})