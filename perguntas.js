//Cada pergunta representa um filme.
//O campo "imagem" aponta para a foto do filme (pasta /img).
//IMPORTANTE: as imagens filme1.jpg a filme8.jpg que vieram no projeto são apenas
//PLACEHOLDERS ilustrativos (não são pôsteres reais, por causa de direitos autorais).
//Troque cada arquivo em /img pela foto real do filme (print, pôster licenciado, etc.)
//mantendo o mesmo nome de arquivo, ou mude o caminho aqui no "imagem".
//
//Em "alternativas", pontos: 1 = opção CORRETA | pontos: 0 = opção ERRADA

const perguntas = [
    {
        imagem: "img/filme1.jpg",
        enunciado: "Qual é o filme?",
        alternativas: [
            { texto: "Toy Story", afirmacao: "Isso mesmo! O filme é Toy Story.", pontos: 1 },
            { texto: "Vingadores: Ultimato", afirmacao: "Não é esse! O filme correto é Toy Story.", pontos: 0 }
        ]
    },
    {
        imagem: "img/filme2.jpg",
        enunciado: "Qual é o filme?",
        alternativas: [
            { texto: "Harry Potter e a Pedra Filosofal", afirmacao: "Não é esse! O filme correto é Shrek.", pontos: 0 },
            { texto: "Shrek", afirmacao: "Isso mesmo! O filme é Shrek.", pontos: 1 }
        ]
    },
    {
        imagem: "img/filme3.jpg",
        enunciado: "Qual é o filme?",
        alternativas: [
            { texto: "Homem Aranha", afirmacao: "Isso mesmo! O filme é Homem Aranha.", pontos: 1 },
            { texto: "O Rei Leão", afirmacao: "Não é esse! O filme correto é Homem Aranha.", pontos: 0 }
        ]
    },
    {
        imagem: "img/filme4.jpg",
        enunciado: "Qual é o filme?",
        alternativas: [
            { texto: "O Rei Leão", afirmacao: "Não é esse! O filme correto é Harry Potter e a Pedra Filosofal.", pontos: 0 },
            { texto: "Harry Potter e a Pedra Filosofal", afirmacao: "Isso mesmo! O filme é Harry Potter e a Pedra Filosofal.", pontos: 1 }
        ]
    },
    {
        imagem: "img/filme5.jpg",
        enunciado: "Qual é o filme?",
        alternativas: [
            { texto: "Viva - A Vida é uma Festa", afirmacao: "Isso mesmo! O filme é Viva - A Vida é uma Festa.", pontos: 1 },
            { texto: "Batman", afirmacao: "Não é esse! O filme correto é Viva - A Vida é uma Festa.", pontos: 0 }
        ]
    },
    {
        imagem: "img/filme6.jpg",
        enunciado: "Qual é o filme?",
        alternativas: [
            { texto: "Divertidamente", afirmacao: "Isso mesmo! O filme é Divertidamente.", pontos: 1 },
            { texto: "Homem de Ferro", afirmacao: "Não é esse! O filme correto é Divertidamente.", pontos: 0 }
        ]
    },
    {
        imagem: "img/filme7.jpg",
        enunciado: "Qual é o filme?",
        alternativas: [
            { texto: "Extraordinário", afirmacao: "Não é esse! O filme correto é Frozen.", pontos: 0 },
            { texto: "Frozen", afirmacao: "Isso mesmo! O filme é A Frozen.", pontos: 1 }
        ]
    },
    {
        imagem: "img/filme8.jpg",
        enunciado: "Qual é o filme?",
        alternativas: [
            { texto: "O Rei Leão", afirmacao: "Isso mesmo! O filme é O Rei Leão.", pontos: 1 },
            { texto: "Blade Runner", afirmacao: "Não é esse! O filme correto é O Rei Leão.", pontos: 0 }
        ]
    }
];
