/**
 * Created by shw on 2015/8/10.
 */

$(function(){
//    $("#clickMe").click(function(){
        var text = "";

        $.getJSON("data.json",function(data){
            $.each(data,function(index,info){
                console.log(info["id"] +" || " + info["pname"]  +" || " + info["remark"]  +" || " + info["create_time"] +" || " + info["create_user"]);

                //遍历json数据 赋值到前端
                text = "<div class='cd-timeline-block'>									"+
                    "	<div class='cd-timeline-img cd-picture'>                        "+
                    "		<img src='img/cd-icon-picture.svg' alt='Picture'>           "+
                    "	</div>                                                          "+
                    "                                                                   "+
                    "	<div class='cd-timeline-content'>                               "+
                    "		<h2> "+
                    info['pname'] +
                    "</h2>"+
                    "<p> "+
                    info["remark"]+
                    "</p>"+
                    "		<a href='#' class='cd-read-more' target='_blank'>预览</a>   "+
                    "		<a href='#' class='cd-read-more' target='_blank'>使用</a>   "+
                    "		<span class='cd-date'>" +
                    info["create_time"] +
                    "</span> "+
                    "	</div> "+
                    "</div> ";

                $("#cd-timeline").append(text);
            });
        });
//    });
});


