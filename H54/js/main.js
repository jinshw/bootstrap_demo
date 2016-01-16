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
    'bootstrap',
    'echarts'
], function($,bardemo,handsontable,bootstrap) {//在function（）中echarts不能传递参数，因为echarts不符合AMD规范
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


    //删除图表
    $("div[data-op-type='remove']").click(function(){
//        $(this).parent().parent().parent(".charts-edit-area-main").remove();
        var demo = "<div class='charts-edit-area-main'>" +
            "</div>"
        $(".charts-edit-area").append(demo);

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
//    ar = hot.getData();




    //刷新
    function flashData(hot){
        var cols_11 = getECParameter(hot,"bar").cols_11;
        var row_11 = getECParameter(hot,"bar").row_11;

        var series = new Array();
        series = getECParameter(hot,"bar").series;

        var option = {
            tooltip: {
                show: true
            },
            legend: {
                data:row_11
            },
            xAxis : [
                {
                    type : 'category',
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
        };
        var bar = document.getElementById('bar');
        bardemo.barTU(bar,option);
    };

    /**
     * 获取Echarts参数
     * hot:handsontable 对象
     * dataArr:handsontable 数据
     * reportTpe：类型：bar、必须为字符串
     */
    function getECParameter(hot,reportType){
        var series = new Array();
        var temp;
        var colsTemp;
        var dataArr = hot.getData();
        for(var i=1;i<dataArr[0].length;i++){
            temp = new Object();
            colsTemp = hot.getDataAtCol(i);
            if(colsTemp[0] == null || colsTemp[0] == undefined){
                temp.name = "";
            }else{
                temp.name = colsTemp[0];
            }

//            temp.type="bar";
            temp.type = reportType;
            if(hot.isEmptyCol(i)){//列为空
                temp.data =  null;
            }else{
                temp.data =  colsTemp.slice(1,colsTemp.length);
            }


            if(temp.data != null){
                temp.data = temp.data.map(function(x){
                    if(x == null){
                        return "0";
                    }else{
                        return x;
                    }
                });
                series.push(temp);
            }

        }//end series

        var tempObj = getMaxIndex(hot.getData());
        var maxI = tempObj.maxI;
        var maxJ = tempObj.maxJ;

        var dataCol_1 =hot.getDataAtCol(0);
        var cols_1 = dataCol_1.slice(1,maxI+1);
        var cols_11 = cols_1.map(function(x){
            if(x == null){
                return "-";
            }else{
                return x;
            }
        });

        var dataRow_1 = hot.getDataAtRow(0);
        var row_1 = dataRow_1.slice(1,maxJ+1);
        var row_11 = row_1.map(function(x){
            if(x == null){
                return "-";
            }else{
                return x;
            }
        });

        var returnObj = new Object();
        returnObj.series = series;
        returnObj.row_11 = row_11;
        returnObj.cols_11 = cols_11;

        return returnObj;
    }

    /**
     * 获取二维数组不为null最大I和J值
     */
    function getMaxIndex(dataArr){
        var obj = new Object();
        //获取表格二维数组
//        var dataArr = hot.getData();

        //获取最大下标
        var tempArr;
        obj.maxI = 0;
        obj.maxJ = 0;
        for(var i=0;i<dataArr.length;i++){
            tempArr = dataArr[i];
            for(var j=0;j<tempArr.length;j++){
                if(dataArr[i][j] == null || dataArr[i][j] == ""){

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
        return obj;
    }


});