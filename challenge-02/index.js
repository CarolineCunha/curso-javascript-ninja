function soma(num1, num2){
    return num1+num2
}
var soma = soma(1,3)
console.log(soma)

soma_nova = (num_1,num_2) => {
 return num_1+num_2
}
var soma_nova = soma_nova(5,4)
console.log(soma_nova)

var sem_valor

function add_valor() {
    sem_valor = 10
    return `o valor da variável agora é ${sem_valor}`
}
var add_valor = add_valor()
console.log(add_valor)

function newFunction(a,b,c){
    if(a === undefined || b === undefined || c === undefined) {
        return 'Preencha todos os valores corretamente! :)'
    }
    return (a * b * c) + 2;
}