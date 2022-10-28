
let filme = {
    titulo: 'O Jogo da Imitação',
    notaAvaliacao: 8.0,
    duracao: 114,
    anoPublicacao: 2014,
    genero: ['Biografia, Drama, Suspense, Guerra'],
    show: function () {
        console.log(this['titulo']);
        console.log(this['notaAvaliacao']);
        console.log(this['duracao']);
        console.log(this['anoPublicacao']);
        console.table(this['genero']);
    },
    set: function (titulo, notaAvaliacao, duracao, anoPublicacao, genero) {
        this.titulo = 'Estrelas além do tempo';
        this.notaAvaliacao = 7.8;
        this.duracao = 127;
        this.anoPublicacao = 2016
        this.genero = ['Biografia, Drama, História'];
    }
};

    const exibeFilme = (this) {
   
    }
