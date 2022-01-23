var championship = 'Campeonato Paulista'
console.log(championship)

var teams = ['São Paulo','Palmeiras','Santos','Corinthians','Ponte Preta']
console.log('Times que estão participando do campeonato: ', teams)

function showTeamPosition(position){
    if(position<1 || position>5 ){
        return 'Não temos a informação do time que está nessa posição'
    }
    return 'O time que está em '+ position + ' lugar é o '+ teams[position -1]
}