/**
 * Created by nikhileshch on 9/21/2015.
 */
CalculatorApp.controller('CalculatorController', function($scope, Calculator)
{
    $scope.calculator = Calculator;
    $scope.$watch('calculator.currentButton', function (button){
        if(typeof(button.displayValue) !== "undefined")
        {
            $scope.calculator.currentButton = {};
            var eventDetails = getEventDetails(button, $scope.calculator.data);
            if(eventDetails.eventName !== "" && eventDetails.eventName !== "undefined")
            {
                if(eventDetails.eventName === "setFinalAnswer")
                {
                    eventDetails = checkOperatorConditions(button, $scope.calculator.data);
                }
                $scope.$broadcast(eventDetails.eventName, eventDetails.data);
            }
        }
    });
});
var getEventDetails = function(button, calculatorData){
    var buttonType = button.type;
    if (buttonType === "clear") {
        this.clearCalculatorData(calculatorData);
        return {
            eventName : "clearDisplayValue"
        };
    } else {
        if (buttonType === "number" || (buttonType === "special" && button.actualValue === ".")) {
            return {
                eventName : "changeDisplayValue",
                data : button.displayValue
            };
        } else if (buttonType === "special") {
            return this.checkConditions(button, calculatorData);
        }
    }
};
var checkConditions = function(button, calculatorData){
    var operator = button.actualValue;
    var textValue = calculatorData.displayData;

    if(textValue === "" || textValue === null || typeof(textValue) === "undefined"){
        alert("Please enter some value");
    }else if(typeof(calculatorData.firstOperand) === "undefined"){
        calculatorData.firstOperand = parseFloat(textValue);
        calculatorData.operator = operator;
        return {
            eventName : "clearDisplayValue"
        };
    }else if(typeof(calculatorData.firstOperand) !== "undefined" && typeof(calculatorData.operator) !== "undefined"){
        calculatorData.secondOperand = parseFloat(textValue);
        calculatorData.total = calculate(calculatorData.firstOperand, calculatorData.operator, calculatorData.secondOperand);
        return {
            eventName : "setFinalAnswer",
            data : calculatorData.total
        };
    }
};
var checkOperatorConditions = function(button, calculatorData){
    var operator = button.actualValue;
    if(operator === "+" || operator === "-" || operator === "/" || operator === "X"){
        calculatorData.firstOperand = calculatorData.total;
        calculatorData.operator = operator;
        calculatorData.secondOperand = undefined;
        calculatorData.total = undefined;
        calculatorData.displayData = undefined;
        return {
            eventName : "clearDisplayValue"
        };
    }else if(operator === "="){
        var total = calculatorData.total;
        this.clearCalculatorData(calculatorData);
        return {
            eventName : "setFinalAnswer",
            data : total
        };
    }
};
var clearCalculatorData = function(calculatorData){
    calculatorData.displayData = undefined;
    calculatorData.firstOperand = undefined;
    calculatorData.operator = undefined;
    calculatorData.secondOperand = undefined;
    calculatorData.total = undefined;
};
var calculate = function(firstOperand, operator, secondOperand) {
    var total;
    if(operator === "+"){
        total = firstOperand + secondOperand;
    }else if(operator === "-"){
        total = firstOperand - secondOperand;
    }else if(operator === "/"){
        total = firstOperand / secondOperand;
    }else if(operator === "X"){
        total = firstOperand * secondOperand;
    }
    if(typeof total === 'number'){
        return total;
    }
};