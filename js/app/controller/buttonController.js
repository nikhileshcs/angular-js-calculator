/**
 * Created by nikhileshch on 9/21/2015.
 */
CalculatorApp.controller('ButtonController', function($scope, Buttons)
{
    $scope.buttons = Buttons;

    $scope.buttonClicked = function(button)
    {

        $scope.calculator.currentButton = button;

    }


});