/**
 * Created by shw on 2015/7/14.
 */

$(document).ready(function(){
    $("#p-qr-code").qrcode(window.location.href);

    var dragObj = $("#left-point2");
    var moveObj = $("#left-line-v");
//    drag(dragObj,moveObj);



});

function drag(dragObj,moveObj){
    //拖拽
    dragObj.mousedown=fnDown(dragObj,moveObj);

}

function fnDown(event,dragObj,moveObj){
    event = event || window.event;

   // var dragArea = $("#phone"),
        // 光标按下时光标和面板之间的距离
        disX=event.clientX-dragObj.offsetLeft,
        disY=event.clientY-dragObj.offsetTop;

    // 移动
/*    document.onmousemove=function(event){
        event = event || window.event;
        fnMove(event,disX,disY);
    }*/

    // 释放鼠标
   /* document.onmouseup=function(){
        document.onmousemove=null;
        document.onmouseup=null;
    }*/
}
var ml,mt;
var leftP2 = g("left-point2");
var leftV = g("left-line-v");
function drag(){


    leftP2.addEventListener('mousedown',function(event){

        var event = event || window.event;
        ml = event.pageX - leftV.offsetLeft ;
        mt = event.pageY - leftV.offsetTop ;

        console.log("ml="+ml);
        console.log("mt="+mt);
    });
}

function fnMove(e){
//    var instace = dialogInstace;
//    if (instace) {
          /*  var dragArea = g("dialogDrag2");
            var phone = g("phone");
            var oDrag = document.getElementById('left-line-v'),
    //        l=e.clientX-posX,
    //        t=e.clientY-posY,
            l= mousePos.x-phone.offsetLeft,
            t=dragArea.offsetTop,
    //        l= mousePos.x,
    //        t=mousePos.y,
    //        winW=document.documentElement.clientWidth || document.body.clientWidth,
    //        winH=document.documentElement.clientHeight || document.body.clientHeight,

//                winW = dragArea.clientWidth ,
//                winH = dragArea.clientHeight,
//                maxW = winW - oDrag.offsetWidth,
//                maxH = winH - oDrag.offsetHeight;

                winW = phone.offsetLeft ,
                winH = phone.offsetTop,
                maxW = winW - oDrag.offsetWidth,
                maxH = winH - oDrag.offsetHeight;

            console.log("dragArea.offsetLeft=="+dragArea.offsetLeft);
            console.log("dragArea.offsetTop=="+dragArea.offsetTop);

            console.log("winW=="+winW);
            console.log("maxW=="+maxW);

            console.log("oDrag.offsetWidth=="+oDrag.offsetWidth);
            console.log("oDrag.offsetHeight=="+oDrag.offsetHeight);

            console.log("maxH=="+maxH);
            console.log("winH=="+winH);
            console.log("l==="+l);
            console.log("t==="+t);
            if (l < 0) {
                l = 0;
            } else if (l > maxW) {
                l = maxW;
            }*/
            /*if (t < 0) {
                t = 0;
            } else if (t > maxH) {
                t = maxH;
            }*/
    //    oDrag.style.left=l+'px';
    //    oDrag.style.top=t+'px';

//            oDrag.style.left = l + 'px';
//            oDrag.style.top =  0+ 'px';

//        instace.moveElement.style.left = l + "px";
//        instace.moveElement.style.top  = 0 + "px";





        var dragArea = g("dialogMove");
        var maxXP = dragArea.clientWidth -  leftV.offsetWidth;
        var maxYP = dragArea.clientHeight - leftV.offsetHeight ;

//        console.log(" maxXP=="+ maxXP);
//        console.log("mousePos.x=="+ mousePos.x);
//        console.log(" ml=="+ ml);


        leftV.style.left = Math.min( Math.max( ( e.x - ml) , 0 ) , maxXP) + "px";
        leftV.style.top  = 0 + "px";
//    }
}
