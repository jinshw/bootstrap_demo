/**
 * Created by JINSHW on 2015-06-18.
 */
var myApp = angular.module("myApp", [ "ui.router"]);
myApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "/tab/FirstPage");
    $stateProvider.state("tab", {
        url: "/tab",
        templateUrl: "tab.html"
    }).state("tab.FirstPage",
    {
        url: "/FirstPage",
        templateUrl: "FirstPage.html"
    }).state("tab.Page2",
    {
        url: "/Page2",
        templateUrl: "Page2.html"
    }).state("tab.angular_example",
    {
        url: "/angular_example",
        templateUrl: "angular_example.html"
    }).state("tab.angular_example.simple",
    {
        url: "/simple",
        templateUrl: "simple.html"
    }).state("tab.angular_example.angular_directive",
    {
        url: "/angular_directive",
        templateUrl: "angular_directive.html"
    });
});


myApp.directive("myDirective",function(){
    return {
        restrict:"EACM",
        template:"<div>Click me to go to Baidu</div>",
        replace: true
    };
});

myApp.controller("simpleCtrl",["$scope",function($scope){
    $scope.user={
        username:"jinshw",
        password:"123456"
    }
}]);

myApp.controller("MyCtrl",["$scope",function($scope){
    $scope.loadData=function(){
        console.log("加载数据....");
    }
}]);
myApp.controller("MyCtrl2",["$scope",function($scope){
    $scope.loadData2=function(){
        console.log("加载数据222....");
    }
}]);

myApp.directive("loader",function(){
    return{
        restrict:"AE",
        link: function (scope,element,attrs) {
            element.bind("mouseenter",function(event){
                scope.$apply(attrs.howtoload);
            });
        }
    }
});

//superman
myApp.directive("superman",function(){
    return {
        scope:{},
        restrict:"AE",
        controller:function($scope){
            $scope.abilities=[];
            this.addStrength = function () {
                $scope.abilities.push("strength");
            };
            this.addSpeed = function () {
                $scope.abilities.push("speed");
            };
            this.addLight = function(){
                $scope.abilities.push("ligth");
            };
        },
        link:function(scope,element,attrs){
            element.addClass("btn btn-primary");
            element.bind("mouseenter",function(event){
                console.log(scope.abilities);
            })
        }
    }
});

myApp.directive("strength",function(){
    return {
        require:"^superman",
        link:function(scope,element,attrs,supermanCtrl){
            supermanCtrl.addStrength();
        }
    }
});

myApp.directive("speed",function(){
    return {
        require:"^superman",
        link:function(scope,element,attrs,supermanCtrl){
            supermanCtrl.addSpeed();
        }
    }
});

myApp.directive("light",function(){
    return {
        require:"^superman",
        link:function(scope,element,attrs,supermanCtrl){
            supermanCtrl.addLight();
        }
    }
});

//指令：独立scope
myApp.directive("hello",function(){
    return {
        restrict:"AE",
        scope:{},
        template:"<div><input type='text' ng-model='userName' />{{userName}}</div>",
        replace:true
    }
});

//指令：scope绑定策略
myApp.controller("MyCtrlScope1",["$scope",function($scope){
    $scope.contrlFlavor = "百事可乐";
}]);

myApp.directive("drink",function(){
    return {
        restrict:"AE",
        template:"<div>{{flavor}}</div>",
        replace:true,
        scope:{
            flavor:"@"
        }
       /* link:function(scope,element,attrs){
            scope.flavor = attrs.flavor;
        }*/
    }
});
myApp.controller("MyCtrlScope2",["$scope",function($scope){
    $scope.contrlFlavor = "百事可乐";
}]);

myApp.directive("drink2",function(){
    return {
        restrict:"AE",
        template:"<input type='text' ng-model='flavor' />",
        replace:true,
        scope:{
            flavor:"="
        }
    }
});

myApp.controller("MyCtrlScope3",["$scope",function($scope){
    $scope.sayHello= function (name) {
        alert("Hello "+name);
    }
}]);

myApp.directive("greeting", function () {
   return {
       restrict:"AE",
       scope:{
           greet:"&"
       },
       template:"<div></div><input type='text' ng-model='userName' />" +
           "<button class='btn btn-primary' ng-click='greet({name:userName})' >Greeting</button></div>"
   }
});
