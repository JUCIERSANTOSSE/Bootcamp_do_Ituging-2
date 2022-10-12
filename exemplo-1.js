
function queHorasSao() {
    horaAtual = new Date();
    const horaConvertida = horaAtual.toLocaleTimeString('pt-PT', {hour12: true});
    console.log ('Olá, agora são ' + horaConvertida);
}

queHorasSao();