(function(){
    'use strict';
    var carol = {
        name: 'Carol',
        lastName: 'Batista'
    };

    function getFullName(){
        return this.name + ' ' + this.lastName;
    };
    console.log(getFullName.call(carol));

    function sum(){
        console.log(arguments);
        return Array.prototype.reduce.call(arguments, (lastItem, actualItem) => {
            return lastItem + actualItem;
        });
    };
    console.log(sum(1,2,3));
    console.log(sum(2,8,9,7,5));
})();