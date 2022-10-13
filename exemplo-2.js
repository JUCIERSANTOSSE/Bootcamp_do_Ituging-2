
function numeroAleatorio(){
    
    const min = 1;
    const max = 10;
    const numero = Math.random()*(max - min) + min;
        
    return parseInt(numero);

}

console.log(numeroAleatorio());