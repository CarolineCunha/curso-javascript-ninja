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
})()