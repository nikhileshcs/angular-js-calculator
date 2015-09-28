/**
 * Created by nikhileshch on 9/21/2015.
 */
CalculatorApp.controller('DisplayController', function($scope, Display)
{

    $scope.display = Display;


    $scope.$on('changeDisplayValue', function (scopeDetails, value)
    {
        if(value === "." && $scope.display.currentDisplayValue.indexOf(".") != -1)
        {
            //do nothing
        }else
        {
            if(flag==0){
                $scope.display.currentDisplayValue = "";
                flag=1;
            }
            $scope.display.currentDisplayValue += value;

        }
        $scope.calculator.data.displayData = $scope.display.currentDisplayValue;
    });

//This is for clearing the display value
    $scope.$on('clearDisplayValue', function ()
    {
        if(flag==1){
            $scope.display.currentDisplayValue = "0";
            flag=0;
        }else{$scope.display.currentDisplayValue = "";}

        $scope.calculator.data.displayData = $scope.display.currentDisplayValue;
    });


//After Performing the calculations this function will be invoked.
    $scope.$on('setFinalAnswer', function (scopeDetails, value)
    {
        $scope.display.currentDisplayValue = value;
        $scope.calculator.data.displayData = $scope.display.currentDisplayValue;
    });


});
var flag=0;