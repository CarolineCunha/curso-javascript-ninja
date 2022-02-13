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
})();