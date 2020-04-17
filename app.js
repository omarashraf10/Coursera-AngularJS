( function () {
'use strict';

angular.module("MyNameCalculator",[])

.controller('MyCalculatorController',function ($scope){

$scope.name="";
$scope.TotalValue=0;
$scope.DisplayNumeric= function (){
  $scope.TotalValue=CalculateValue($scope.name);
}
function CalculateValue(name){
var totalvalue=0;
for(var i=0;i<name.length;i++)
    totalvalue+=name.charCodeAt(i);
return totalvalue ;
}
});

})();
