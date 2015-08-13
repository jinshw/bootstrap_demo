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

function add(){
    var text = ' <input type="text" class="input-sm" ng-model="user.username"/> <p>{{user.username}}</p>';
    $("#add").append(text);
    $compile($("#add").contents())(scope);
}




