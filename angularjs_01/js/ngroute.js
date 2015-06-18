/**
 * Created by JINSHW on 2015-06-18.
 */
var mainApp = angular.module("mainapp",["ngRoute"]);
mainApp.config(["$routeProvider",function($routeProvider){
    $routeProvider.when("/",{
        template:"<h1>内容部分</h1>"
    }).when("/index",{
            templateUrl:"filter.html"
    }).otherwise({
        template:"<h2>这个是默认模板</h2>"
    });
}]);

