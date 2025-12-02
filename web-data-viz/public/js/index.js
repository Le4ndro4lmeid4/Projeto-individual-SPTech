var imagens = [
  "./assets/imgs/agua.png",
  "./assets/imgs/terra.png",
  "./assets/imgs/fogo.png",
  "./assets/imgs/ar.png",
];
var imagemAtual = 0;

function mostrarImagem() {
  imagem.style.opacity = 0;
  setTimeout(() => {
    imagem.src = imagens[imagemAtual];
    imagem.style.opacity = 1;
  }, 500);
}

function proximo() {
  imagemAtual++;
  if (imagemAtual >= imagens.length) imagemAtual = 0;
  mostrarImagem();
}

function anterior() {
  imagemAtual--;
  if (imagemAtual < 0) imagemAtual = imagens.length - 1;
  mostrarImagem();
}

setInterval(proximo, 7000);

// banner fim

// personagens inicio
var imagemPersonagemAtual = 0;
var imagensPersonagens = [
  "./assets/imgs/aang.gif",
  "./assets/imgs/katara.gif",
  "./assets/imgs/sokka.gif",
  "./assets/imgs/toph.gif",
  "./assets/imgs/zuko.gif",
];

var textoAang = `Aang é o protagonista de Avatar: A Lenda de Aang, um jovem dominador
                       de ar e o último sobrevivente de seu povo, os Nômades do Ar. Alegre,
                       pacífico e brincalhão, ele carrega o enorme fardo de ser o Avatar —
                       o único capaz de dominar os quatro elementos (ar, água, terra e fogo) e
                       manter o equilíbrio no mundo. Apesar de sua juventude e espírito
                       livre, Aang demonstra profunda sabedoria, compaixão e um forte
                       compromisso com a não violência, buscando sempre resolver conflitos de
                       forma justa e harmoniosa.`;

var textoKatara = `Katara é uma jovem da Tribo da Água do Sul, determinada, compassiva e corajosa.
                         Habilidosa na dobra de água, ela atua como protetora e guia do grupo,
                         especialmente de Aang, ajudando-o em sua missão de restaurar o equilíbrio ao mundo.
                         Sua força emocional, senso de justiça e lealdade à família e amigos a tornam
                         uma líder natural e uma personagem profundamente inspiradora.`;

var textoSokka = `Sokka é o irmão mais velho de Katara, da Tribo da Água do Sul. Inteligente, estrategista
                        e cheio de senso de humor, ele compensa a falta de habilidades de dobra com astúcia,
                        criatividade e talento em combate com armas. Leal e protetor, Sokka frequentemente
                        assume o papel de planejador e líder improvisado, trazendo equilíbrio entre coragem e comicidade ao grupo.`;

var textoToph = `Toph Beifong é uma jovem cega da Nação do Reino da Terra, incrivelmente talentosa na dobra de terra.
                       Forte, independente e direta, ela é destemida e possui uma percepção única do mundo através do “sentir”
                       as vibrações do chão. Com personalidade rebelde e senso de humor afiado, Toph se torna uma aliada
                       poderosa e indispensável para Aang e seus amigos.`;

var textoZuko = `Zuko é o príncipe exilado da Nação do Fogo, inicialmente obcecado em capturar o Avatar para recuperar
                       sua honra. Determinado, intenso e muitas vezes conflituoso, ele passa por uma profunda jornada de
                       autodescoberta, aprendendo a equilibrar orgulho, responsabilidade e compaixão. Sua transformação
                       o torna um aliado valioso e um personagem complexo e memorável.`;

var textos = [textoAang, textoKatara, textoSokka, textoToph, textoZuko];

function mostrarImagemPersonagem() {
  personagens.style.opacity = 0;
  texto.style.opacity = 0;

  setTimeout(() => {
    personagens.style.backgroundImage = `url('${imagensPersonagens[imagemPersonagemAtual]}')`;
    personagens.style.opacity = 1;
    texto.style.opacity = 1;
    texto.textContent = textos[imagemPersonagemAtual];
  }, 500);
}

function proximoPersonagem() {
  imagemPersonagemAtual++;
  if (imagemPersonagemAtual >= imagensPersonagens.length)
    imagemPersonagemAtual = 0;
  mostrarImagemPersonagem();
}

function anteriorPersonagem() {
  imagemPersonagemAtual--;
  if (imagemPersonagemAtual < 0)
    imagemPersonagemAtual = imagensPersonagens.length - 1;
  mostrarImagemPersonagem();
}
// personagens fim

// livros inicio
var livro1 = `Livro 1 – Explora adaptação, paciência e fluxo. Aang aprende que, assim como a água, 
                    a vida exige flexibilidade e equilíbrio. Os personagens enfrentam perdas e desafios, mostrando 
                    a importância de compaixão e conexão com os outros.`;

var livro2 = `Livro 2 – Aborda estabilidade, coragem e autoafirmação. Aang e seus amigos aprendem a 
                    se firmar diante das dificuldades, enfrentando obstáculos internos e externos. O livro ensina 
                    sobre confiança em si mesmo, persistência e responsabilidade.`;

var livro3 = `Livro 3 – Foca em transformação, autoconsciência e equilíbrio do poder. Aang confronta 
                    conflitos maiores e aprende que força e poder só são verdadeiros quando guiados pela ética, compaixão e compreensão 
                    do outro. Zuko exemplifica a importância da redenção e do autoconhecimento.`;

function selecionarLivro1() {
  Livros.style.opacity = 0;
  textoAgua.style.opacity = 0;

  setTimeout(() => {
    Livros.style.backgroundImage = `url('./assets/imgs/livro1.gif')`;
    Livros.style.opacity = 1;
    textoAgua.style.opacity = 1;
    textoAgua.textContent = livro1;
  }, 500);
}

function selecionarLivro2() {
  Livros.style.opacity = 0;
  textoAgua.style.opacity = 0;

  setTimeout(() => {
    Livros.style.backgroundImage = `url('./assets/imgs/livro2.gif')`;
    Livros.style.opacity = 1;
    textoAgua.style.opacity = 1;
    textoAgua.textContent = livro2;
  }, 500);
}

function selecionarLivro3() {
  Livros.style.opacity = 0;
  textoAgua.style.opacity = 0;

  setTimeout(() => {
    Livros.style.backgroundImage = `url('./assets/imgs/livro3.gif')`;
    Livros.style.opacity = 1;
    textoAgua.style.opacity = 1;
    textoAgua.textContent = livro3;
  }, 500);
}
