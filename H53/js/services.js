/**
 * Created by JINSHW on 2015-08-25.
 */
define(['angular'], function (angular) {
    'use strict';

    /* Services */

    // Demonstrate how to register services
    // In this case it is a simple value service.
    angular.module('myApp.services', [])
        .value('version', '0.1')
        //http服务
        .factory("userListService",["$http", function ($http) {
            var doRequest = function (username,path) {
                return $http({
                    method:"GET",
                    url:"users.json"
                });
            }
            return {
                userList:function (username) {
                    return doRequest(username,"userList");
                }
            };
        }]);
});