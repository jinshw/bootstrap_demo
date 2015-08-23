/**
 * Created by shw on 2015/8/21.
 */
define(["angular",
        'controller/mainController'
//        'mainDirective'
    ],function(angular){
        return angular.module("webapp",['ui.router','ngStorage','ngSanitize','webapp.controllers','webapp.directive']);
    });
