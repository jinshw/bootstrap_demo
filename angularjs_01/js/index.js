/**
 * Created by JINSHW on 2015-06-18.
 */
var myApp = angular.module("myApp", [ "ui.router"]);
myApp.config(function ($stateProvider, $urlRouterProvider) {
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
    });
});


myApp.directive("myDirective",function(){
    return {
        restrict:"EACM",
        template:"<div>Click me to go to Baidu</div>",
        replace: true
    };
});