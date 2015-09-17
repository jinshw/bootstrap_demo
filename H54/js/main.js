/**
 * Created by JINSHW on 2015-08-25.
 */
require.config({
    paths: {
        jquery:'../../lib/jquery/jquery-1.11.3.min',
        bootstrap:'../../lib/bootstrap/3.3.4/dist/js/bootstrap.min',
        echarts:'../../lib/echarts-2.2.7/build/dist/echarts-all',
        handsontable:'../../lib/handsontable-0.17.0/dist/handsontable.full.min',
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
        'bootstrap':{
            deps:['jquery'],
            exports:'bootstrap'
        }
    },
    priority: [
//        "angular"
    ]
});

require( [
    'jquery',
    'bardemo',
    'bootstrap',
    'handsontable'
], function($,bardemo,handsontable) {//在function（）中echarts不能传递参数，因为echarts不符合AMD规范
    'use strict';

    var bar = document.getElementById('bar');
    var line = document.getElementById('line');
    var pie = document.getElementById('pie');
    var scatter = document.getElementById('scatter');

    bardemo.barTU(bar);
    bardemo.lineTU(line);
    bardemo.pieTU(pie);
    bardemo.scatterTU(scatter);

    var dedit = $(".charts-tools-dedit");
    console.log(dedit[0].tagName);

    dedit[0].addEventListener("click",function(){
       console.log("点击数据编辑.....");
       console.log(dedit[0].getAttribute("data-cpt"));

       $(".edit-main").css("margin-left","660px");
       $(".cpt-chtedt").css({"opacity":"1","z-index":"1010"});
    });


    $("#dtm-close-btn").click(function(){
        $(".edit-main").css("margin-left","0px");
        $(".cpt-chtedt").css({"opacity":"0","z-index":"-1010"});
    });



    //handsontable 区域
    var ar;
    var hot;
    var ecObj = new Object();


    /*handsontable 数据初始化*/
    var container = document.getElementById('data-table');
    var dataArr = [
        ['', 'Kia', 'Nissan', 'Toyota', 'Honda'],
        ['2013', 10, 11, 12, 13],
        ['2014', 20, 11, 14, 13],
        ['2015', 30, 15, 12, 13]
    ];

    hot = new Handsontable(container, {
        data:dataArr,
                        minRows:20,
                        minCols:12,
//                        height: 396,
        width: 660,
        height: 800,

        colHeaders: true,
        rowHeaders: true,
        stretchH: 'all',
        columnSorting: true,
        contextMenu: true
    });

    ar = hot.getData();
    console.log(ar);






});