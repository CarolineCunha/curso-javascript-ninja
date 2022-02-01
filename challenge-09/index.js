(function(){
    var number1 = 10
    var number2 = 20
    return console.log(number1 + number2)
})()


function hoisting(){
    let num1 = 1
    let num2 = 2
    return sum()
    function sum(){
        return num1 + num2
    }
}
console.log(hoisting())

function calculator(num1, num2){
    return function(callback){
        return callback(num1, num2)
    }
}

var sum = calculator(10,2)
console.log(sum(function(number1, number2){
    return number1 + number2
}))

var substraction = calculator(5,2)
var multiplication = calculator(3,3)
var division = calculator(100,12)
var mod = calculator(50,32)

console.log(substraction(function(number1, number2){
    return number1 - number2
}))

console.log(multiplication(function(number1,number2){
    return number1 + number2
}))

 console.log(division(function(number1, number2){
     return number1 / number2
 }))

 console.log(mod(function(number1, number2){
     return number1 % number2
 }))