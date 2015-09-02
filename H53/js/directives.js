/**
 * Created by JINSHW on 2015-08-25.
 */
define(['angular', 'services'], function(angular, services) {
    'use strict';

    /* Directives */

    angular.module('myApp.directives', ['myApp.services'])
        .directive('appVersion', ['version', function(version) {
            return function(scope, elm, attrs) {
                elm.text(version);
            };
        }])
        .directive("myDirective",function(){
            return {
                restrict:"EACM",
                template:"<div>Click me to go to Baidu</div>",
                replace: true
            };
        })
        .directive("loader",function(){
            return{
                restrict:"AE",
                link: function (scope,element,attrs) {
                    element.bind("mouseenter",function(event){
                        scope.$apply(attrs.howtoload);
                    });
                }
            }
        })
        //superman
        .directive("superman",function(){
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
        })
        .directive("strength",function(){
            return {
                require:"^superman",
                link:function(scope,element,attrs,supermanCtrl){
                    supermanCtrl.addStrength();
                }
            }
        })
        .directive("speed",function(){
            return {
                require:"^superman",
                link:function(scope,element,attrs,supermanCtrl){
                    supermanCtrl.addSpeed();
                }
            }
        })
        .directive("light",function(){
            return {
                require:"^superman",
                link:function(scope,element,attrs,supermanCtrl){
                    supermanCtrl.addLight();
                }
            }
        })
        //指令：独立scope
        .directive("hello",function(){
            return {
                restrict:"AE",
                scope:{},
                template:"<div><input type='text' ng-model='userName' />{{userName}}</div>",
                replace:true
            }
        })
        .directive("drink",function(){
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
        })
        .directive("drink2",function(){
            return {
                restrict:"AE",
                template:"<input type='text' ng-model='flavor' />",
                replace:true,
                scope:{
                    flavor:"="
                }
            }
        })
        .directive("greeting", function () {
            return {
                restrict:"AE",
                scope:{
                    greet:"&"
                },
                template:"<div></div><input type='text' ng-model='userName' />" +
                    "<button class='btn btn-primary' ng-click='greet({name:userName})' >Greeting</button></div>"
            }
        })
        .directive('contenteditable', function() {
            return {
                restrict: 'A', // only activate on element attribute
                require: '?ngModel', // get a hold of NgModelController
                link: function(scope, element, attrs, ngModel) {
                    if (!ngModel) {
                        return;
                    } // do nothing if no ng-model
                    // Specify how UI should be updated
                    ngModel.$render = function() {
                        element.html(ngModel.$viewValue || '');
                    };
                    // Listen for change events to enable binding
                    element.on('blur keyup change', function() {
                        scope.$apply(readViewText);
                    });
                    // No need to initialize, AngularJS will initialize the text based on ng-model attribute
                    // Write data to the model
                    function readViewText() {
                        var html = element.html();
                        // When we clear the content editable the browser leaves a <br> behind
                        // If strip-br attribute is provided then we strip this out
                        if (attrs.stripBr && html === '<br>') {
                            html = '';
                        }
                        ngModel.$setViewValue(html);
                    }
                }
            };
        });
});