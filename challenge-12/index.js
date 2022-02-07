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
})()