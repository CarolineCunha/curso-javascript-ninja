(function(){
var person = {
    name: 'Carol',
    lastname: 'Cunha',
    age: 28
}
console.log('Propriedades de person: ', Object.keys(person))

var books = []
books.push({name: 'teste', pages: 250})
books.push({name: 'teste2', pages: 150})
books.push({name: 'teste3', pages:280})
console.log(books)
var lastBook = books.pop()
console.log(lastBook)
books = JSON.stringify(books)
console.log(books)
books = JSON.parse(books)

for(var i = 0; i < books.length; i++){
    for(var prop in books[i]){
        console.log(prop + ' : ' + books[i][prop])
    }
}

var myName = ['C','a','r','o','l']
console.log('Meu nome é: ', myName.join(''))
console.log(myName.reverse().join(''))
console.log(myName.sort())
})()