/**
 * Created by shw on 2015/8/21.
 */
define(['module','jquery'],function(controllers,$){
    'use strict';
//    controllers.controller('controller1',function($scope){
//        //控制器的具体js代码
//    })

  return  controllers.controller("controller1",["$compile","$scope",function($compile,$scope){
            $scope.user={
                username:"张三",
                password:"123456"
            };
            $scope.userList=[{
                username:"张三11",
                password:"123456"
            },{
                username:"张三22",
                password:"123456"
            }];

        }]);
});
