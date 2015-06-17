/**
 * Created by JINSHW on 2015-06-17.
 */
var myCssModule = angular.module("MyCssModule",[]);
myCssModule.controller("MyCssCtrl",["$scope",function($scope){
    $scope.messageText = "text text text";
    $scope.isError = false;
    $scope.isWarning = false;
    $scope.showError=function(){
        $scope.messageText = "This is a Error";
        $scope.isError = true;
        $scope.isWarning = false;
    };
    $scope.showWarning=function(){
        $scope.messageText = "This is a Warning";
        $scope.isError = false;
        $scope.isWarning = true;
    };
}]);





