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