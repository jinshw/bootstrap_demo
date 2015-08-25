/**
 * Created by JINSHW on 2015-08-25.
 */
require.config({
    paths: {
        angular: '../../lib/angular-1.2.20/angular.min',
        angularRoute: '../../lib/angular-1.2.20/angular-route',
        angularMocks: '../../lib/angular-1.2.20/angular-mocks',
        text: '../../bower_components/requirejs-text/text'
    },
    shim: {
        'angular' : {'exports' : 'angular'},
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
], function(angular, app, routes) {
    'use strict';
    var $html = angular.element(document.getElementsByTagName('html')[0]);

    angular.element().ready(function() {
        angular.resumeBootstrap([app['name']]);
    });
});