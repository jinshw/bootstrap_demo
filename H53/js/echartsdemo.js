/**
 * Created by JINSHW on 2015-09-01.
 */
define( [
        'echarts',
        'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
    ],
    function (ec) {
        'use strict';
            function barTU(){


            // 基于准备好的dom，初始化echarts图表
            var myChart = ec.init(document.getElementById('bar'));

            var option = {
                tooltip: {
                    show: true
                },
                legend: {
                    data:['销量','产量']
                },
                xAxis : [
                    {
                        type : 'category',
                        data : ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子","手巾"]
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        "name":"销量",
                        "type":"bar",
                        "data":[5, 20, 40, 10, 10, 20]
                    },
                    {
                        "name":"产量",
                        "type":"bar",
                        "data":[5, 20, 40, 10, 10, 20]
                    }
                ]
            };

            // 为echarts对象加载数据
            myChart.setOption(option);
        }

        return barTU;
    }
);