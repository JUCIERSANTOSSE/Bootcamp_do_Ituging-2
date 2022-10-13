
function calculaDesconto(valor, desconto){
    let descontoDecimal = desconto/100;
    const valorFinal = valor*(1 - desconto/100);
    return valorFinal.toFixed(2);
    
}

const valorComDesconto = calculaDesconto(1000, 95);

console.log('Valor total: R$ ' + valorComDesconto);