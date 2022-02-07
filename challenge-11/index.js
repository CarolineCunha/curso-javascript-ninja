(function(){

    var once  = false
    do {
        console.log('Passou aqui')
    } while(once)

    var person = {
        name: 'Carol',
        age:'28',
        weight: 48,
        birthday: '18/06'
    }

    var counter = 0
    for(var prop in person){
        console.log('The ' + prop + ' of person is ' + person[prop])
        counter ++
    }
    console.log('The person has ' + counter + ' properties')

    function moreThan(age){
       return person.age > age
    }

    var numbers =[]
    for(var i = 0; i < 20; i++){
        if(i > 10){
            break;
        }
        numbers.push(i)
    }
    console.log(numbers)

    numbers = []
    for (var i = 0; i <= 20; i++){
        if(i % 2 === 0){
            continue
        }
        numbers.push(i)
    }
    console.log(numbers)
})()