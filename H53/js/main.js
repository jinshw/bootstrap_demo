/**
 * Created by JINSHW on 2015-08-25.
 */
require.config({
    paths: {
        angular: '../../lib/angular-1.2.20/angular.min',
        angularUiRoute: '../../lib/angular-1.2.20/angular-ui-router',
        angularRoute: '../../lib/angular-1.2.20/angular-route',
        angularMocks: '../../lib/angular-1.2.20/angular-mocks',
        text: '../../bower_components/requirejs-text/text',
        echarts:'../../lib/echarts-2.2.7/build/dist/echarts',
"echarts/chart/bar":'../../lib/echarts-2.2.7/build/dist/chart/bar'
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
    'routes',
    'echartsdemo'
], function(angular, app, routes) {
    'use strict';
    var $html = angular.element(document.getElementsByTagName('html')[0]);

    angular.element().ready(function() {
        angular.resumeBootstrap([app['name']]);
    });



});