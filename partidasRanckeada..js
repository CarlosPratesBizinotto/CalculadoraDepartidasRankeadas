rankVitoria(1011,1)
exibiRank()

function exibiRank(){
    console.log("O Herói tem de saldo de " + v + " vitoria e está no nível de " + n)
}


function rankVitoria(vitoria, derrotas){

    v = (vitoria - derrotas)
 
    if(v <= 10){
        n = ("Ferro")
    }else if(v >=11 && v <= 20){
        n = ("Bronze")
    }else if(v >=21 && v <= 50){
        n = ("Prata")
    }else if(v >=51 && v <= 80){
        n = ("Ouro")
    }else if(v >=81 && v <= 90){
        n =( "Diamante")
    }else if(v >=91 && v <= 100){
        n = ("Lendário")
    }else{
        n = ("Imortal")
    }

}
