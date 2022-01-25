const arr = [true, 16, 'carol', function(){}, {curso: 'teste'} ]

function addItem( item ){
    arr.push( item );
    return arr
}

addItem([3, true, 'Ninja'])
console.log("O segundo elemento do segundo array é " + arr[5][1])
console.log("O primeiro array tem " + arr.length + " itens")
console.log("O segundo array tem " + arr[5].length + " itens")

var counter = 10;
while ( counter <= 20) {
    counter % 2 === 0 ? console.log(counter) : ''
    counter ++
}

counter = 0;
while( counter < 20){
    counter % 2 !==0 ? console.log(counter) : ''
    counter ++
}

for(var counter = 100; counter <= 120; counter++){
    counter % 2 === 0 ? console.log(counter) : ''
}

for(var counter = 111; counter <= 125; counter ++){
    counter % 2 !== 0 ? console.log(counter) : ''
}