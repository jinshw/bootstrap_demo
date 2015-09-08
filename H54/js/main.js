/**
 * Created by JINSHW on 2015-08-25.
 */
require.config({
    paths: {
        echarts:'../../lib/echarts-2.2.7/build/dist/echarts-all',
        bardemo:'echartsdemo/bardemo'
    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'angularUiRoute': {
            deps:['angular'],
            'exports':'angularUiRoute'
        },
        'angularRoute': ['angular'],
        'angularMocks': {
            deps:['angular'],
            'exports':'angular.mock'
        }
    },
    priority: [
        "angular"
    ]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

require( [
    'angular',
    'app',
    'routes'
], function(angular, app, routes ) {//在function（）中echarts不能传递参数，因为echarts不符合AMD规范
    'use strict';

    var $html = angular.element(document.getElementsByTagName('html')[0]);

//    alert(document.getElementById('bar'));
//    echartsdemo.barTU();

    angular.element().ready(function() {
        angular.resumeBootstrap([app['name']]);
    });


});