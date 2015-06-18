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
    }).state("tab.Page3",
    {
        url: "/Page3",
        templateUrl: "Page3.html"
    });
});
