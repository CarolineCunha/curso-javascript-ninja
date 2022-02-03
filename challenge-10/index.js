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