var arr = [0,1,2,3,4]

function recebeArray(arr){
    return arr
}

var teste = recebeArray[1]

function recebeArrayNum(arr, num){
    return arr[num]
}

function book(bookName) {
    var allBooks = {
        'Segredos do Ninja Javascript': {
            quantidadePaginas: 488,
            autor: 'John Resig & Bear Bibeault',
            editora: 'Novatec'
        },
        'Introdução ao HTML5': {
            quantidadePaginas: 220,
            autor: 'Bruce  Lawson & Remy Sharp',
            editora: 'Alta Books'
        },
        'Smashing CSS': {
            quantidadePaginas: 283,
            autor: 'Erick A. Meyer',
            editora: 'Bookman'

        },
    }

    return !bookName ? allBooks : allBooks[bookName]
}