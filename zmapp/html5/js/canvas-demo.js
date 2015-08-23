/**
 * Created by JINSHW on 2015-08-12.
 */

var canvas = document.getElementById("gbcanvas"),
    context = canvas.getContext("2d");
// 直线
context.beginPath();
context.moveTo(150,100);
context.lineTo(300,200);
context.lineWidth=2;
context.strokeStyle="red";
context.stroke();

//弧形
var x=200,y=100,radius=60,startAngle=0.5*Math.PI,endAngle=1.5*Math.PI,
    counterClockWise = false;
context.beginPath();
context.arc(x,y,radius,startAngle,endAngle,counterClockWise);
context.strokeStyle = "#000000";
context.lineWidth = 10;
context.stroke();

//二次曲线
context.beginPath();
context.moveTo(100,200);
context.quadraticCurveTo(150,50,200,200);
context.lineWidth=12;
context.strokeStyle="green";
context.stroke();

//生成贝塞尔曲线
context.beginPath();
context.moveTo(188, 130);
context.bezierCurveTo(140, 10, 388, 10, 388, 170);
context.lineWidth=12;
context.strokeStyle="#111FFF";
context.stroke();
