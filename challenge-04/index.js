var isTruthy = function(param) {
    return !!param;
};

isTruthy(false);
isTruthy(null);
isTruthy(undefined);
isTruthy('');
isTruthy(0);
isTruthy(-0)
isTruthy(NaN);

var carro = {
    marca: 'marca',
    modelo: 'modelo',
    placa: 'placa',
    ano: 2022,
    cor: 'preto',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
}

carro.mudarCor = function(cor){
    carro.cor = cor;
};

carro.obterCor = function(){
    return carro.cor;
};

carro.obterModelo = function(){
    return carro.modelo;
};

carro.obterMarca = function(){
    return carro.marca;
};

carro.obterMarcaModelo = function(){
    return 'Esse carro é um ' + carro.obterMarca() + ' ' + obterModelo();
};

carro.adicionarPessoas = function(numeroPessoas){
    var totalPessoas = carro.quantidadePessoas + numeroPessoas
    if(carro.quantidadePessoas === carro.assentos && totalPessoas >= carro.assentos){
        return 'O carro já está lotado';
    }
    if(totalPessoas > carro.assentos){
        var quantasPessoasCabem = carro.assentos - carro.quantidadePessoas;
        var pluralOuSingular = quantasPessoasCabem === 1 ? ' pessoa' : ' pessoas';
        return 'Só cabe mais '+ quantasPessoasCabem + pluralOuSingular + '!';
    }
    carro.quantidadePessoas += numeroPessoas;
    return 'Já temos ' + totalPessoas + ' pessoas no carro!';
}