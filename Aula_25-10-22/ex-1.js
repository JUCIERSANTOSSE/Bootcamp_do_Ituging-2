
let lista = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];

let termoDeBusca = "Th";

let listaFiltrada = lista.filter(function(item) {
    return item.includes(termoDeBusca);

});

console.table(listaFiltrada);