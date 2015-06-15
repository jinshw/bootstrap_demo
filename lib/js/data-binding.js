/**
 * Created by JINSHW on 2015/6/13.
 */
function MyController($scope,$timeout){
    var updateClock = function(){
        $scope.clock = {
            now : new Date()
        };
        $timeout(function(){
            updateClock();
        },1000);
    }
    updateClock();
};


