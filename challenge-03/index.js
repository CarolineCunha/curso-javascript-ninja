var objetoVazio = {}
var pessoa = {
    nome: 'Carol',
    sobrenome: 'Cunha',
    sexo: 'Feminino',
    idade: 28,
    altura: 1.58,
    peso: 48,
    andando: false,
    caminhouQuantosMetros: 0
}

pessoa.fazerAniversario = function() {
    pessoa.idade++
}

pessoa.andar = function(metros){
    pessoa.caminhouQuantosMetros += metros
    pessoa.andando = true
}

pessoa.parar = function(){
    pessoa.andando = false
}

pessoa.nomeCompleto = function() {
    return 'Olá! Meu nome é ' + pessoa.nome + ' ' + pessoa.sobrenome
}

pessoa.mostrarIdade = function(){
    return 'Olá, eu tenho ' + pessoa.idade + ' anos!'
}