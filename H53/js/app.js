/**
 * Created by JINSHW on 2015-08-25.
 */
define([
    'angular',
    'filters',
    'services',
    'directives',
    'controllers',
    'angularRoute'
], function (angular, filters, services, directives, controllers) {
    'use strict';

    // Declare app level module which depends on filters, and services

    return angular.module('myApp', [
        'ngRoute',
        "ui.router",
        'myApp.controllers',
        'myApp.filters',
        'myApp.services',
        'myApp.directives'
    ]);
});