import * as angular from 'angular';
import { NgModule } from '@angular/core';
import { MessageComponent } from './message.component';
import { MessageService } from './message.service';
import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';
import { MessageDetailComponent } from './message.detail.component';



export const MessageModule = angular.module('MessageModule', ['ngRoute']);
MessageModule.component('message', MessageComponent);
MessageModule.component('messageid', MessageDetailComponent);

MessageModule.service('messageService', MessageService);

MessageModule.config(($routeProvider) => {
  $routeProvider
    .when('/message', { template: '<message></message>' })
    .when('/message/:id', { template: '<messageid></messageid>' })
});

