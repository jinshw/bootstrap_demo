/**
 * Created by shw on 2015/8/21.
 */
define(['require',
    'angular',
    'angular-route',
    'jquery',
    'app',
    'router'
],function(require,angular){
    'use strict';
    require(['domReady!'],function(document){
        angular.bootstrap(document,['webapp']);
    });
});


