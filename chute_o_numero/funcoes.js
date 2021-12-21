//gera numero aleatorios,deixar essa constante sem mexer
const numeroaleatorio=(num) => Math.floor(Math.random() * num)
//mostra o numero aleatorio e gera numero de 1 a 10 aleatoriamente
console.log(numeroaleatorio(11))//o js comeca contar a partir do zero entao pra dar 10 certinho precisa ser 11
let chute=document.getElementById("input1")

//os codigos abixo estao errados e imcopletos
//quero que quando eu aperta o botao envio la na pag o programa verifique se chute e igual a numero aleatorio

 //quando botao envio for apertado faca ccodigo abaixo
function envio(){
    
    //se chute for igual a numero aleatorio vc acertou o chute
    if(chute === numeroaleatorio){
        alert("vc acertou");
        
    }

}
   envio()
