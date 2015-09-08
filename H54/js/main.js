/**
 * Created by JINSHW on 2015-08-25.
 */
require.config({
    paths: {
        jquery:'../../lib/jquery/jquery-1.11.3.min',
        echarts:'../../lib/echarts-2.2.7/build/dist/echarts-all',
        bardemo:'echartsdemo/bardemo'
    },
    shim: {
     /*   'angular' : {'exports' : 'angular'},
        'angularUiRoute': {
            deps:['angular'],
            'exports':'angularUiRoute'
        },
        'angularRoute': ['angular'],
        'angularMocks': {
            deps:['angular'],
            'exports':'angular.mock'
        }*/
    },
    priority: [
//        "angular"
    ]
});

require( [
    'jquery',
    'bardemo'
], function($,bardemo) {//在function（）中echarts不能传递参数，因为echarts不符合AMD规范
    'use strict';

    var bar = document.getElementById('bar');
    var line = document.getElementById('line');
    var pie = document.getElementById('pie');
    var scatter = document.getElementById('scatter');

    bardemo.barTU(bar);
    bardemo.lineTU(line);
    bardemo.pieTU(pie);
    bardemo.scatterTU(scatter);

});