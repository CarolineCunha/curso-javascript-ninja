var five = Number('5')
console.log(five + ' é número?', typeof five === 'number')

var concat = String(10) + 10
console.log('"' + concat + '"' + ' é uma string? ', typeof concat === 'string')

var operation = {
    '+': function(x,y){return x + y},
    '-': function(x,y){return x - y},
    '*': function(x,y){return x * y},
    '/': function(x,y){return x / y},
    '%': function(x,y){return x % y}
}

function isOperatorValid(operator){
     return !!operation[operator] !== undefined
}
console.log(isOperatorValid('+'))

function calculator(operator){
    if(!isOperatorValid(operator)){
        return false
    }
    return function(x, y){
        if(typeof x !== 'number'  || typeof y =='number' ){
            return false
        }
        return operation[operator](x, y)
    }
}

function showOperationMessage(operator, number1, number2){
    return 'A operação ' + operator + ' para '+ number1 + ' ' + number2 + " = "
}

function showErrorMessage(operator){
    return 'Operação ' + operator + ' não permitida'
}