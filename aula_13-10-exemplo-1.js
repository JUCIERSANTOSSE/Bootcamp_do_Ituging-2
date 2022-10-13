
function obterAnoAtual() {
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    return anoAtual;
}

const nome = "Pedro";
const anoNascimento = 2005;
const anoAtual = obterAnoAtual();
const idade = anoAtual = anoNascimento;

if (2022 - anoNascimento >= 18) {
    console.log("Seja bem-vindo! " + nome);
} else {
    console.log(nome + ": Não pode acessar!");
}
obterAnoAtual();