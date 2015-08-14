/**
 * Created by shw on 2015/8/13.
 */



require.config({
    baseUrl:"js",
    paths : {
        "jquery" : ["lib/jquery-1.11.3.min"],
        "a" : "a",
        "math":"math"
    }
})

require(["jquery","a"],function($){
    $(function(){
        alert("load finished");
    })
})

require(["math"],function(math){
    alert(math.add(10,3));
})


