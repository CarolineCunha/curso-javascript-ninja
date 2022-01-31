var sum = function calculeteSum(x,y){
    return x + y;
}

var value1 = 10
var value2 = 20
console.log(`A soma de ${value1} e ${value2} é igual a `+ sum(value1,value2))
console.log('O nome da função que faz a soma é '+ sum.name)

function showName(){
    return 'Carol'
}

var varShowName = showName;
console.log('A função '+ varShowName.name + ' retorna ' + varShowName())

function calculator(operator){
    var result
    var number1
    var number2
    switch (operator) {
        case '+':
            result = number1 + number2
            break;
        case '-':
            result = number1 - number2
            break;
        case '*':
            result = number1 * number2
            break;
        case '/':
            result = number1 / number2
            break;
        case '%':
            result = number1 % number2
            break;
        default:
            return 'Operação inválida'
    }
    return function(number1, number2){
        return 'Resultado da operação: '+ number1 + ' ' + operator + ' ' + number2 + ' = ' + result
    }
}

var sum  = calculator('+');
var multiplication = calculator('*');
var division = calculator('/');
var subtraction = calculator('-');
var mod = calculator('%');