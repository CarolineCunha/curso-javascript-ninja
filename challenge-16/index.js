(function(){
    'use strict'
    var name = 'Carol';
    for(var i = 0, len = name.length; i < len; i++){
        console.log(name.charAt(i) + ' é a ' + (i + 1) + ' letra do meu nome  ');
    }
    
    var fullName = 'caroline-batista';
    var newFullName = fullName.split('-').map((name)=> {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }).join(' ');
    console.log(newFullName);

    var friends = ['Maria', 'Lucia', 'Ana', 'Camila', 'Carol']
    var phrase = friends.reduce((acumulado, atual, index)=> {
        var separator = friends.length - 1 === index ? ' e ' : ', ';
        return acumulado + separator + atual;
    }).concat(' são meus amigos')
    console.log(phrase)

    console.log('Roberto'.replace('to','ta'));
    console.log('Fernando'.substring(8,3));

    var myName = 'Caroline';
    var myNewName = [];
    for(var i = 0; i < myName.length; i++){
        myNewName.push( i % 2 === 0 ? myName[i].toLowerCase() : myName[i].toUpperCase());
    }
    console.log(myNewName.join(''));
})();