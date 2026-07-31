const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const imagemFilme = document.querySelector(".imagem-filme");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";
let pontos = 0;

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];

    //Coloca a foto do filme borrada/com opacidade baixa (reinicia o efeito a cada pergunta)
    imagemFilme.src = perguntaAtual.imagem;
    imagemFilme.classList.remove("revelada");

    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa, botaoAlternativas));
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}

function respostaSelecionada(opcaoSelecionada, botaoSelecionado){
    //Pega todos os botões de alternativas exibidos na tela
    const botoes = caixaAlternativas.querySelectorAll("button");

    //Impede novos cliques enquanto mostra o resultado da alternativa
    botoes.forEach((botao) => botao.disabled = true);

    //Revela a foto do filme (tira o blur e volta a opacidade ao normal)
    imagemFilme.classList.add("revelada");

    if(opcaoSelecionada.pontos > 0){
        //Alternativa correta: fica verde
        botaoSelecionado.classList.add("correta");
    } else {
        //Alternativa errada: fica vermelha
        botaoSelecionado.classList.add("errada");
        //Marca a(s) outra(s) alternativa(s) de verde
        botoes.forEach((botao) => {
            if(botao !== botaoSelecionado){
                botao.classList.add("correta");
            }
        });
    }

    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    pontos += opcaoSelecionada.pontos;
    console.log(pontos);

    //Aguarda um instante para o usuário ver a cor e a foto revelada antes de ir para a próxima pergunta
    setTimeout(mostraPergunta, 1500);
}

function mostraResultado(){
    textoResultado.textContent = historiaFinal;
    caixaPerguntas.textContent = "Resultado";
    caixaAlternativas.textContent = "";
    podiumMedalhas();
}

function podiumMedalhas(){
    //Calcula a porcentagem de acertos com base no total de perguntas
    const porcentagem = (pontos / perguntas.length) * 100;

    if(porcentagem == 100){
        caixaPrincipal.style.backgroundImage = "url('img/ouro.png')";
        caixaPerguntas.textContent = "Resultado da competição: "+pontos+"/"+perguntas.length+" acertos é OURO!";
    } else if(porcentagem >= 75){
        caixaPrincipal.style.backgroundImage = "url('img/prata.png')";
        caixaPerguntas.textContent = "Resultado da competição: "+pontos+"/"+perguntas.length+" acertos é PRATA!";
    } else if(porcentagem >= 50){
        caixaPrincipal.style.backgroundImage = "url('img/bronze.png')";
        caixaPerguntas.textContent = "Resultado da competição: "+pontos+"/"+perguntas.length+" acertos é BRONZE!";
    } else {
        caixaPrincipal.style.backgroundImage = "url('img/perdeu.png')";
        caixaPerguntas.textContent = "Resultado da competição: "+pontos+"/"+perguntas.length+" acertos, PERDEU!";
    }
}

mostraPergunta();
