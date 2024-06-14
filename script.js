const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const perguntas = [
   {
       enunciado: "Qual a melhor bebida?",
       alternativas: [
           {
               texto: "Cerveja",
               afirmacao: "Ótima escolha. "
           },
           {
               texto: "Cachaça",
               afirmacao: "Ideal ."
           }
       ]
   },
   {
       enunciado: "Qual e melhor?",
       alternativas: [
           {
               texto: "Vinho Tinto",
               afirmacao: " Perfeito para compartilhar momentos inesquecíveis com amigos"
           },
           {
               texto: "Vodka",
               afirmacao: " Uma ótima escolha"
           }
       ]
   },
   {
       enunciado: "Qual a melhor bebida?",
       alternativas: [
           {
               texto: "Vinho Branco.",
               afirmacao: "Otimo."
           },
           {
               texto: " Champanhe.",
               afirmacao: "Proporciona experiências luxuosas e exclusivas."
           }
       ]
   },
   {
       enunciado: "Qual a melhor bebida?",
       alternativas: [
           {
               texto: "Tequila.",
               afirmacao: " Permite explorar um destino ."
           },
           {
               texto: "Whisky.",
               afirmacao: " Uma oportunidade única para se desconectar da rotina e explorar o mundo sem pressa."
           }
       ]
   },
   {
       enunciado: "Qual a melhor bebida? ",
       alternativas: [
           {
               texto: "Conhaque",
               afirmacao: "bom."
           },
           {
               texto: "Gin",
               afirmacao: "experiências únicas. "
           }
       ]
   },
];








let atual = 0;
let perguntaAtual;
let historiaFinal = "";




function mostraPergunta() {
   if (atual >= perguntas.length) {
       mostraResultado();
       return;
   }
   perguntaAtual = perguntas[atual];
   caixaPerguntas.textContent = perguntaAtual.enunciado;
   caixaAlternativas.textContent = "";
   mostraAlternativas();
}




function mostraAlternativas(){
   for(const alternativa of perguntaAtual.alternativas) {
       const botaoAlternativas = document.createElement("button");
       botaoAlternativas.textContent = alternativa.texto;
       botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
       caixaAlternativas.appendChild(botaoAlternativas);
   }
}




function respostaSelecionada(opcaoSelecionada) {
   const afirmacoes = opcaoSelecionada.afirmacao;
   historiaFinal += afirmacoes + " ";
   atual++;
   mostraPergunta();
}




function mostraResultado() {
   caixaPerguntas.textContent = "Em 2049...";
   textoResultado.textContent = historiaFinal;
   caixaAlternativas.textContent = "";
}




mostraPergunta();


