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
    'handsontable',
    'echarts'
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

       /* afterChange:function(changs,source){
            console.log("changs=="+changs);
            console.log("source=="+source);
//            flashData(hot);
        },*/

        colHeaders: true,
        rowHeaders: true,
        stretchH: 'all',
        columnSorting: true,
        contextMenu: true
    });

    hot.addHook('afterChange',function(changs,source){
        console.log("changs=="+changs);
        console.log("source=="+source);
            flashData(hot);
    })
    ar = hot.getData();
    console.log("aaaaaaaaaaaa");


//刷新按钮
    function flashData(hot){
        console.log("bbbbbbbbbbbbbb");
        //获取表格二维数组
        /* var dataArr = hot.getData();
         console.log(dataArr);

         //获取最大下标
         var tempArr;
         var maxI = 0;
         var maxJ = 0;
         for(var i=0;i<dataArr.length;i++){
         tempArr = dataArr[i];
         for(var j=0;j<tempArr.length;j++){
         if(dataArr[i][j] == null){

         }else{
         if(i > maxI){
         maxI = i;
         }
         if(j > maxJ){
         maxJ = j;
         }
         }
         }

         }

         console.log(hot.getData(maxI,maxJ));*/

        var tempObj = getMaxIndex(hot.getData());
        var maxI = tempObj.maxI;
        var maxJ = tempObj.maxJ;


        var dataCol_1 =hot.getDataAtCol(0);
//                        var cols_1 = dataCol_1.slice(1,dataCol_1.length);
        var cols_1 = dataCol_1.slice(1,maxI+1);
        var cols_11 = cols_1.map(function(x){
            if(x == null){
                return "-";
            }else{
                return x;
            }
        });

        var dataRow_1 = hot.getDataAtRow(0);
//                        var row_1 = dataRow_1.slice(1,dataRow_1.length);
        var row_1 = dataRow_1.slice(1,maxJ+1);
        var row_11 = row_1.map(function(x){
            if(x == null){
                return "-";
            }else{
                return x;
            }
        });

        var series = new Array();
        var temp;
        var colsTemp;
        for(var i=1;i<dataArr[0].length;i++){
            temp = new Object();
            colsTemp = hot.getDataAtCol(i);
            if(colsTemp[0] == null || colsTemp[0] == undefined){
                temp.name = "jinshw";
            }else{
                temp.name = colsTemp[0];
            }

            temp.type="bar";
            if(hot.isEmptyCol(i)){//列为空
                temp.data =  colsTemp.slice(1,colsTemp.length);
            }else{
                temp.data =  colsTemp.slice(1,colsTemp.length);
            }
            temp.data = temp.data.map(function(x){
                if(x == null){
                    return "0";
                }else{
                    return x;
                }
            });

            series.push(temp);
        }
        console.log(row_11);
        console.log(series);

        var option = {
            tooltip: {
                show: true
            },
            legend: {
                data:row_11
//                                data:['销量','产量']
            },
            xAxis : [
                {
                    type : 'category',
//                                    data : ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子","手巾"]
                    data : cols_11
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series :
                series
            /*  [
             {
             "name":"销量",
             "type":"bar",
             "data":[5, 20, 40, 10, 10, 20]
             },
             {
             "name":"产量",
             "type":"bar",
             "data":[5, 20, 40, 10, 10, 2]
             }
             ]*/
        };
        console.log("ec22222==="+echarts);
        console.log("option==="+option.series[0]);
        console.log("bardemo==="+bardemo);
        var bar = document.getElementById('bar');

        bardemo.barTU(bar,option);

//       var myChart = echarts.init(document.getElementById('data-table'));
//        // 为echarts对象加载数据
//        myChart.setOption(option);

    };



    //获取二维数组不为null最大I和J值
    function getMaxIndex(dataArr){
        var obj = new Object();
        //获取表格二维数组
//        var dataArr = hot.getData();
        console.log(dataArr);

        //获取最大下标
        var tempArr;
        obj.maxI = 0;
        obj.maxJ = 0;
        for(var i=0;i<dataArr.length;i++){
            tempArr = dataArr[i];
            for(var j=0;j<tempArr.length;j++){
                if(dataArr[i][j] == null){

                }else{
                    if(i > obj.maxI){
                        obj.maxI = i;
                    }
                    if(j > obj.maxJ){
                        obj.maxJ = j;
                    }
                }
            }

        }
//        console.log(hot.getData(maxI,maxJ));
        return obj;
    }


});