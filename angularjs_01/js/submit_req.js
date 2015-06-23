/**
 * Created by JINSHW on 2015-06-23.
 */
var appModule = angular.module("TestFormModule",[]);
appModule.controller("TestFormModule", function ($scope) {
    $scope.user={
        userName:"jinshw",
        password:""
    };
    $scope.save = function () {
        alert("保存数据");
    }
});



