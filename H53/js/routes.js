/**
 * Created by JINSHW on 2015-08-25.
 */
define(['angular','angularUiRoute', 'app'], function(angular,angularUiRoute, app) {
    'use strict';

    return app.config(['$stateProvider','$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when("", "/tab/FirstPage");
        $stateProvider.state("tab", {
            url: "/tab",
            templateUrl: "tab.html"
        }).state("tab.FirstPage",
            {
                url: "/FirstPage",
                templateUrl: "FirstPage.html"
            }).state("tab.Page2",
            {
                url: "/Page2",
                templateUrl: "Page2.html"
            }).state("tab.angular_example",
            {
                url: "/angular_example",
                templateUrl: "angular_example.html"
            }).state("tab.angular_example.simple",
            {
                url: "/simple",
                templateUrl: "simple.html"
            }).state("tab.angular_example.angular_directive",
            {
                url: "/angular_directive",
                templateUrl: "angular_directive.html"
            }).state("tab.angular_example.angular_service",
            {
                url:"/angular_service",
                templateUrl:"angular_service.html"
            }).state("tab.angular_example.angular_filter",
            {
                url:"/angular_filter",
                templateUrl:"angular_filter.html"
            });
    }]);

});