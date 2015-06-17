/**
 * Created by JINSHW on 2015-06-17.
 */

var userInfoModule=angular.module('UserInfoModule',[]);
userInfoModule.controller("UserInfoCtrl",["$scope",function($scope){
    $scope.userInfo={
        email:"123456@qq.com",
        password:"123456",
        autoLogin:true
    };
    $scope.getFormData=function(){
        console.log($scope.userInfo);
    }
    $scope.setFormData=function(){
      $scope.userInfo={
          email:"qazsxsw@163.com",
          password:"qazxsw",
          autoLogin:false
      }
    };
    $scope.resetFormData=function(){
        $scope.userInfo={
            email:"123456@qq.com",
            password:"123456",
            autoLogin:true
        };
    };
}]);


