// This module is purely written in Angular 1.
import * as angular from 'angular';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';

export const HomeModule = angular.module('HomeModule', ['ngRoute']);
HomeModule.component('home', HomeComponent);
HomeModule.config(($routeProvider) => {
  $routeProvider.when('/', {template : '<home></home>'});
});

// techncially, this is not required, but it is nice to have it for consistency
@NgModule({})
export class HomeNgModule {
}