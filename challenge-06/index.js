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

function convertHex(color){
    var hexa;
    switch(color){
        case 'red':
            hexa = '#FF000'
            break
        case 'blue':
            hexa = '#0000FF'
            break
        case 'green':
            hexa = '#00FF00'
            break
        case 'black':
            hexa = '#000000'
            break
        case 'white':
            hexa = '#FFFFFF'
            break
        default:
            return 'Não temos o equivalente hexadecimal para a cor ' + color
    }
    return 'O hexadecimal para a cor '+ color + ' é ' + hexa
}