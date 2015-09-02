/**
 * Created by JINSHW on 2015-08-25.
 */
define(['angular', 'services','bardemo'],
    function (angular,services,bardemo) {
    'use strict';

    /* Controllers */

    return angular.module('myApp.controllers', ['myApp.services'])
        // Sample controller where service is being useds
        .controller('MyCtrl1', ['$scope', 'version', function ($scope, version) {
            $scope.scopedAppVersion = version;
        }])
        // More involved example where controller is required from an external file
        .controller('MyCtrl2', ['$scope', '$injector', function($scope, $injector) {
            require(['controllers/myctrl2'], function(myctrl2) {
                // injector method takes an array of modules as the first argument
                // if you want your controller to be able to use components from
                // any of your other modules, make sure you include it together with 'ng'
                // Furthermore we need to pass on the $scope as it's unique to this controller
                $injector.invoke(myctrl2, this, {'$scope': $scope});
            });
        }])
        .controller("simpleCtrl",["$compile","$scope",function($compile,$scope){
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

            $scope.clickme = function() {// clickme 事件
                $scope.userList.push({
                    username:"张三333",
                    password:"123456"
                });

//        var text = ' <input type="text" class="input-sm" ng-model="user.username"/> <p>{{user.username}}</p>';
//        $("#add").append(text);
                var text = ' <input type="text" class="input-sm" ng-model="user.username"/> <p>{{user.username}}</p>';
                $("#add").append(
                    $compile(text)($scope)
                );
//        $compile($("#add").contents())(scope);
            };

        }])
        .controller("MyCtrl",["$scope",function($scope){
            $scope.loadData=function(){
                console.log("加载数据....");
            }
        }])
        .controller("MyCtrl2",["$scope",function($scope){
            $scope.loadData2=function(){
                console.log("加载数据222....");
            }
        }])
        //指令：scope绑定策略
        .controller("MyCtrlScope1",["$scope",function($scope){
            $scope.contrlFlavor = "百事可乐";
         }])
        .controller("MyCtrlScope2",["$scope",function($scope){
            $scope.contrlFlavor = "百事可乐";
        }])
        .controller("MyCtrlScope3",["$scope",function($scope){
            $scope.sayHello= function (name) {
                alert("Hello "+name);
            }
        }])

        .controller("TestFormModule", ["$scope",function ($scope) {
            $scope.user = {
                userName:"jinshw",
                password:""
            };
            $scope.save = function () {
                alert("保存数据");
            }
        }])

    /******************Service Start*********************/
        .controller("LoadDataCtrl",["$scope","$http", function ($scope,$http) {
            $http({
                method:"GET",
                url:"data.json"
            }).success(function (data,status,headers,config) {
                console.log("success...");
                console.log(data);
                $scope.users = data;
            }).error(function (sta,status,headers,config) {
                console.log("error...");
            });
        }])

        .controller("ServiceController",["$scope","$timeout","userListService",
            function ($scope,$timeout,userListService) {
                var timeout;
                $scope.$watch("username", function (newUserName) {
                    if(newUserName){
                        if(timeout){
                            $timeout.cancel(timeout);
                        }
                        timeout = $timeout(function () {
                            userListService.userList(newUserName).success(function (data,status) {
                                $scope.users = data;
                            })
                        },350);
                    }
                })
            }])
        .controller("echartsCtrl",["$compile","$scope",function($compile,$scope){
            var bar = document.getElementById('bar');
            var line = document.getElementById('line');
            var pie = document.getElementById('pie');
            var scatter = document.getElementById('scatter');

            bardemo.barTU(bar);
            bardemo.lineTU(line);
            bardemo.pieTU(pie);
            bardemo.scatterTU(scatter);
        }])
        ;
    /******************Service End*********************/

});