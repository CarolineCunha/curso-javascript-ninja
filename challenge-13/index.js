(function(){
    console.log('O array em formato de string é: ', [1,2,3,4].toString());

    var sul = ['Paraná','Santa Catarina','Rio Grande do Sul'];
    var sudeste = ['São Paulo', 'Espirito Santo', 'Minas Gerais', 'Rio de Janeiro'];
    var brasil = sul.concat(sudeste);
    console.log(brasil)
    brasil.unshift('Acre','Amapá','Amazonas');
    console.log(brasil);
    console.log(brasil.shift());
    var newSul = brasil.slipe(2,5);
    console.log(newSul)

    var newBrasil = [];
    brasil.forEach((item, index)=> {
        newBrasil.push({
            id: index,
            estado: item
        })
    })

    var every = brasil.every((item) => {
        return item.length > 7;
    });
    console.log(every 
        ? 'Sim, todos os estados tem mais de 7 letras!' 
        : 'Nem todos os estados tem 7 letras!');

    var some = brasil.some((item) => {
        return item === 'Ceará';

    })
    console.log(some ? 'Ceará está incluído' : 'Ceará não está incluído');

    var map = newBrasil.map((item, index) => {
        return {
            id: item.id+1,
            estado: item.estado + ' pertence ao Brasil'
        }
        
    })
    console.log(map)

    var filter = map.filter((item, index) => {
        return item.id % 2 === 0;
    })
    console.log('Estados com ID par: ', filter)
})();