/**
 * Created by JINSHW on 2015-06-19.
 */
var myDM = angular.module("myDM",[]);
myDM.directive("myDirective",function(){
    return {
      restrict:"EACM",
      template:"<div>Click me to go to Baidu</div>",
      replace: true
    };
});


