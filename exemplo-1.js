
function queHorasSao() {
    horaAtual = new Date();
    const horaConvertida = horaAtual.toLocaleTimeString('pt-PT', {hour12: false});
    console.log ('Boa noite, agora são ' + horaConvertida);
}

queHorasSao();