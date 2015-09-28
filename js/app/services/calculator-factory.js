/**
 * Created by nikhileshch on 9/21/2015.
 */
CalculatorApp.factory('Calculator', function() {
    return {
        type : "Normal",
        currentButton : {},
        data : {
            displayData : undefined,
            firstOperand : undefined,
            operator : undefined,
            secondOperand : undefined,
            total : undefined
        }
    };
});