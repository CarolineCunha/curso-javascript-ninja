(function(){
'use strict'
var text = 'Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro.'
console.log(text.replace(/Manuel Marques de Sousa/, 'Carol'))
console.log(' \nTrocando naturalidade:')
console.log(text.replace(/brasileiro/g, 'paulista'))
console.log(' \nTrocando número por traços:')
console.log(text.replace(/\d/g,'-'))
console.log('\nTrocando de "D" a "h" por "0" ')
console.log(text.replace(/[D-Hd-h]/g,0))
console.log('\nTrocando de "A" e "a" por "4":')
console.log(text.replace(/[Aa]/g,4))
console.log('\n"O Centauro de Luvas" em caixa alta:')
console.log(text.replace( /O Centauro de Luvas/g, (phrase)=>{
    return phrase.toUpperCase()
}))
})()