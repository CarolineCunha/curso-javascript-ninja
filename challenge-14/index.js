(function(){
    var numberObjects = [];
    for(i = 1; i <= 10; i++ ){
        numberObjects.push({number: i});
    }
    console.log(numberObjects);

    var justNumbers = numberObjects.map((item) => {
        return item.number;
    });
    console.log(justNumbers);

    var justMod2or3 = justNumbers.filter((item) => {
        return item % 2 === 0 || item % 3 === 0;
    });
    console.log(justMod2or3)

    var operation = justMod2or3.reduce((acumulado, atual) => {
        return (acumulado + 1) * atual;
    }, 0);
    console.log(operation);

    var operation2 = justMod2or3.reduceRight((acumulado, atual) => {
        return (acumulado + 1) * atual;
    },0);
    console.log(operation2);

    var name = ['Ca','ro','li','ne']
    var reduceP = name.reduce((acumulado, atual) => {
        return acumulado + 'P' + atual;
    },'');
    console.log(reduceP);

    var inversedName = name.reduceRight((acumulado, atual) => {
        return acumulado + atual;
    });
    console.log(inversedName);

    console.log(numberObjects);
    var obj = numberObjects[1];
    if(numberObjects.indexOf(obj) > -1){
        console.log('Existe obj {number: 2}');
    }
    else {
        console.log('Não existe obj {number: 2}');
    }
    
    if( Array.isArray(justMod2or3)){
        console.log(justMod2or3.toString());
    }
})()