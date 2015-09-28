/**
 * Created by nikhileshch on 9/21/2015.
 */
CalculatorApp.factory('Buttons', function() {

    return [
        {
            type : "clear",
            actualValue : 'clear',
            displayValue : "Clear"
        },
        {
            type : "number",
            actualValue : 7,
            displayValue : "7"
        }, {
            type : "number",
            actualValue : 8,
            displayValue : "8"
        }, {
            type : "number",
            actualValue : 9,
            displayValue : "9"
        }, {
            type : "number",
            actualValue : 4,
            displayValue : "4"
        }, {
            type : "number",
            actualValue : 5,
            displayValue : "5"
        }, {
            type : "number",
            actualValue : 6,
            displayValue : "6"
        },  {
            type : "number",
            actualValue : 1,
            displayValue : "1"
        }, {
            type : "number",
            actualValue : 2,
            displayValue : "2"
        }, {
            type : "number",
            actualValue : 3,
            displayValue : "3"
        },{
            type : "number",
            actualValue : 0,
            displayValue : "0"
        },{
            type : "special",
            actualValue : "/",
            displayValue : "/"
        }, {
            type : "special",
            actualValue : "X",
            displayValue : "X"
        }, {
            type : "special",
            actualValue : "-",
            displayValue : "-"
        }, {
            type : "special",
            actualValue : ".",
            displayValue : "."
        },  {
            type : "special",
            actualValue : "+",
            displayValue : "+"
        }, {
            type : "special",
            actualValue : "=",
            displayValue : "="
        }];
});