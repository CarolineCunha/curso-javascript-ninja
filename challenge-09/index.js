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