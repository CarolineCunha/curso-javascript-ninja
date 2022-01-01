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

function solution(N) {
    let binaryValue = (N >>> 0).toString(2);
    console.log(binaryValue)
    console.log("numero "+ N)
    let lengthArr = [];
    let length = 1;
  
    for(let i = 0; i < binaryValue.length; i++){
        console.log("tamanho "+ length)
      if(binaryValue[i] == 0){
        if(binaryValue[i + 1] == 1){
          console.log(lengthArr)
          lengthArr.push(length);
          console.log(length)
          length = 0;
        }
  
        length++;
      }
    }
    console.log("lengthArr " + lengthArr)
    return lengthArr.length ? Math.max(...lengthArr) : 0;
  
  }

  var teste = solution(1041)
  console.log(teste)