/**
 * Created by JINSHW on 2015-06-18.
 */
var myApp = angular.module("myApp", []);

myApp.controller("simpleCtrl",["$compile","$scope",function($compile,$scope){
    $scope.user={
        username:"张三",
        password:"123456"
    };

}]);

