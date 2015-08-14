/**
 * Created by shw on 2015/8/13.
 */



require.config({
    paths : {
        "jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery"],
        "a" : "a"
    }
})

require(["jquery","a"],function($){
    $(function(){
        alert("load finished");
    })
})



