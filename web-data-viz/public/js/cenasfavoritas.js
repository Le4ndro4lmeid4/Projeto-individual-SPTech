var cenas = [];

function mostrarCenaPorIndice(indice) {
  cena1.style.opacity = 0;
  textoCena.style.opacity = 0;

  setTimeout(() => {
    textoCena.innerHTML = cenas[indice].texto;
    cena1.style.backgroundImage = `url('./assets/imgs/cenas/${cenas[indice].imagem}')`;

    cena1.style.opacity = 1;
    textoCena.style.opacity = 1;
  }, 500);
}

function trocarlivro() {
  var livro = select_livro.value;
  var conteudo = "";

  if (livro == "1") {
    sidebar.style.background = "linear-gradient(to bottom, #1b2d6a, #0f1b3d)";
    cenas = [
      {
        texto: `Após acordar do seu coma de 100 anos, Aang retorna ao seu lar e descobre que sua civilização foi dizimada pelos dobradores de fogo. Ele enfrenta o choque emocional da perda enquanto tenta manter a esperança.<br><br>

                O momento ensina sobre como aceitar suas dores é parte da jornada para a cura, e que por mais devastadora que possa ser em algumas ocasiões, a realidade precisa ser encarada de frente. Além disso, o momento reflete sobre a importância do legado e da memoria, dos momentos que passaram e daqueles que se foram, relembrando que ambas as coisas são importantes, não so no presente momento, mas também nas nossas lembranças.<br><br>`,
        titulo: "EP 3: Templo do ar",
        imagem: "temploDoAr.gif",
      },
      {
        texto: `Aang, jovem e ainda inseguro sobre suas habilidades como Avatar, tem uma conversa com Avatar Roku, seu antecessor. No momento em que Aang está começando a entender que seu papel como Avatar não é apenas lutar ou dominar os quatro elementos, mas também proteger o equilíbrio do mundo.<br><br>
                            
              O momento é uma metáfora poderosa para crescimento pessoal: muitas vezes, na vida, somos confrontados com desafios maiores do que imaginamos, que exigem coragem, sabedoria e maturidade. Aang aprende que aceitar suas responsabilidades não significa perder sua essência ou felicidade, mas sim usar suas habilidades para fazer o bem maior.

              Além disso, há uma lição sobre orientação e mentorias: mesmo diante de tarefas enormes, ter alguém que ofereça perspectiva e conselhos faz toda a diferença. Avatar Roku funciona como esse guia, lembrando que a jornada de Aang, embora difícil, pode ser trilhada com aprendizado e esperança.<br><br>`,
        titulo: "EP 8: Aang e Roku",
        imagem: "aangeroku.gif",
      },
      {
        texto: `Aang se lembra do momento em que, assustado pelo peso de ser o Avatar, fugiu do Templo do Ar. Zuko revive o exílio imposto por seu pai e a pressão constante para recuperar sua honra. A ferida emocional de ter sido  rejeitado e humilhado moldou seu comportamento obsessivo e sua busca implacável por aceitação.<br><br>
                            
              A cena nos convida a olhar além das ações superficiais das pessoas e a considerar as experiências que moldam seus comportamentos. Tanto Aang quanto Zuko são vítimas das circunstâncias e das expectativas externas, e suas jornadas refletem a complexidade da vida real: responsabilidade, medo, vergonha, esperança e redenção.

              Além disso, a narrativa reforça a ideia de que empatia nasce da compreensão das feridas dos outros. Ao ver Zuko como um ser humano marcado por traumas, não apenas como inimigo, o público é levado a refletir sobre perdão, compaixão e a multiplicidade de razões que guiam as escolhas de cada pessoa.<br><br>
                          
              Por que esse momento é especial:<br><br>
                          
              Mostra como experiências passadas moldam escolhas e emoções, destacando o peso psicológico que acompanha o poder.`,
        titulo: "EP 12: A tempestade",
        imagem: "aTempestade.gif",
      },
      {
        texto: `Aang foi capturado e está prestes a ser entregue ao Senhor do Fogo. É então que surge uma figura mascarada, o Espírito Azul, invadindo a base, derrotando soldados e libertando Aang. Durante a fuga, Aang não sabe quem é seu salvador,quando, após uma sequência de tensão e ação, a máscara cai, revelando que o Espírito Azul é Zuko, o mesmo que persegue Aang desde o início da série.<br><br> 
        
        O impacto emocional dessa cena é enorme porque ela quebra a simplicidade da divisão entre bem e mal. O público assiste ao “vilão” enfrentando o próprio povo para salvar o “herói”. Zuko arrisca sua vida e sua posição para garantir que Aang não seja entregue à Nação do Fogo por outra pessoa, o que cria um turbilhão de sentimentos: surpresa, confusão, empatia. De repente, fica difícil odiar Zuko de forma absoluta. Ele deixa de ser apenas o caçador implacável e passa a ser alguém capaz de atitudes corajosas e, em certo sentido, nobres, ainda que movidas por motivações pessoais, como o desejo de capturar Aang ele mesmo para recuperar sua honra. Para Aang, o impacto também é profundo: ele é salvo por alguém em quem não confia, alguém que já tentou capturá-lo várias vezes. Essa contradição emocional reforça a sensação de que o mundo não é tão preto e branco quanto parece`,
        titulo: "EP 13: Espirito Azul",
        imagem: "espiritoazul.gif",
      },
      {
        texto: `No cerco ao Pólo Norte, a invasão da Nação do Fogo transforma a Tribo da Água do Norte em um verdadeiro campo de guerra, enquanto Aang e Katara lutam diretamente contra os soldados invasores. A atmosfera é de desespero e resistência, não é só um conflito territorial, é uma luta pela sobrevivência de uma cultura inteira. A presença do General Zhao torna a invasão ainda mais brutal, pois ele não quer apenas vencer a batalha, quer quebrar o equilíbrio do mundo, atacando os próprios espíritos que habitam aquele lugar sagrado.<br><br>

É nesse contexto que a princesa Yue ganha um peso gigantesco na história. Quando Zhao atinge o espírito da Lua, o mundo literalmente muda: o céu perde o brilho, a dobra de água enfraquece, e uma sensação de vazio toma conta de todos. Sem a Lua, o equilíbrio entre os elementos é destruído. Yue então percebe que a vida que recebeu da Lua quando bebê não era apenas um milagre, mas também um empréstimo. Ela entende que, para restaurar a ordem, precisa devolver aquilo que lhe foi dado. A decisão dela é calma, mas devastadora: ela escolhe se entregar, sabendo que nunca mais poderá viver como humana, nem continuar ao lado de Sokka. Ao se fundir à Lua, Yue devolve a luz ao céu, devolve poder aos dobradores de água e salva o mundo de um desequilíbrio catastrófico. A invasão mostra o quanto o egoísmo e a ambição podem destruir; o sacrifício de Yue mostra o oposto: que um único ato de amor e altruísmo pode restaurar o que muitos tentaram arruinar pela força.`,
        titulo: "EP 19: O sacrificio",
        imagem: "princesayue.gif",
      }
    ];
  } else if (livro == "2") {
    sidebar.style.background = "linear-gradient(to bottom, #35702a, #1f3f18)";
    cenas = [
      {
        texto: `a aventura no labirinto começa como algo quase caótico e cômico, mas rapidamente ganha um tom mais profundo. Aang, Katara, Sokka e o grupo precisam atravessar uma caverna lendária para chegar mais rápido ao Reino da Terra. A lenda diz que apenas aqueles que “seguirem o amor” conseguirão sair, o que soa vago e até bobo no início. Porém, quando eles entram no labirinto, tudo se torna escuro, confuso e perigoso: túneis que se fecham, caminhos que mudam, criaturas escondidas e a sensação constante de estarem perdidos. Desse cenário nascem os elementos centrais da cena: confiança, vulnerabilidade e trabalho em equipe. Não há mapa, não há visão clara de saída, o que resta é acreditar uns nos outros.<br><br>
        
        O impacto emocional da aventura está justamente no fato de que o grupo é forçado a abandonar o controle e se apoiar mutuamente. Sokka, sempre cético, entra em choque com a banda de nômades do ar “hippies” e com a ideia de seguir uma canção como guia. Aang e Katara, presos no escuro em determinado momento, precisam lidar com medo e incerteza, mas também com a proximidade crescente entre eles. Quando eles decidem confiar na lenda e “seguir o amor”, isso não é só sobre romance, mas sobre se entregar à fé em algo intangível, seja o sentimento entre eles, seja a crença de que, juntos, vão encontrar um caminho. A caverna, com sua escuridão e labirintos, funciona como um espelho interno: quanto mais confusos por fora, mais precisam se alinhar por dentro`,
        titulo: "EP: 2: A caverna",
        imagem: "cavernadosamantes.gif",
      },
      {
        texto: `A cena gira em torno da revelação de quem Toph realmente é e de como ela transforma algo visto como “fraqueza” em sua maior força. No início, ela aparece como uma competidora misteriosa em um ringue de dobra de terra, conhecida apenas como A bandida cega. Pequena, aparentemente frágil, cega — tudo nela faz com que os adversários a subestimem. Mas assim que a luta começa, essa imagem é completamente destruída: Toph domina o chão com uma precisão absurda, sente cada movimento pelo contato com a terra e derruba inimigos que são muito maiores e fisicamente mais imponentes. A arena vira o palco onde sua “limitação” se revela, na verdade, como seu maior trunfo. <br><br>
        
        O impacto emocional dessa cena está em ver Toph superar a forma como o mundo a enxerga. Para os pais e para a sociedade, ela é uma menina frágil, que precisa ser protegida, guardada, praticamente trancada. No ringue, porém, ela é livre, poderosa e totalmente no controle. A cegueira, em vez de definí-la como incapaz, se torna o motivo da sua habilidade única: ela “vê” através dos pés, sente vibrações, percebe intenções antes mesmo de o oponente agir. Essa virada mexe com quem assiste, porque quebra a ideia de que deficiência é sinônimo de fraqueza. Toph não é forte apesar de ser cega; ela é forte também por causa da forma como aprendeu a viver com isso.`
        
        ,
        titulo: "EP: 6: Bandida cega",
        imagem: "bandidacega.gif",
      },
      {
        texto: `Vemos Zuko totalmente isolado: sem o Tio Iroh, sem exército, sem status. Ele vaga sozinho até chegar a uma pequena vila da Nação da Terra, onde passa a conviver com uma família e um garoto que o admira sem saber quem ele é. Aos poucos, essa convivência quebra a armadura emocional de Zuko e revela um lado mais sensível e confuso, bem diferente da imagem de príncipe frio da Nação do Fogo.<br><br>
        
        Enquanto isso, os flashbacks mostram seu passado doloroso: a relação dura com o pai, o carinho da mãe, a crueldade de Azula e o trauma do exílio. Esse contraste deixa claro que Zuko não é apenas “o vilão”, mas alguém marcado por rejeição e abuso. Quando ele decide enfrentar soldados corruptos para proteger a vila, age movido por um senso de justiça que foge da lógica da Nação do Fogo. Porém, ao revelar sua identidade como príncipe, é rejeitado por aqueles que acabou de defender.<br><br>
        
        Essa história mostra Zuko em profunda vulnerabilidade: dividido entre o que foi, o que fez e o que ainda pode se tornar. O episódio evidencia sua humanidade ao mostrar que, mesmo carregando um passado sombrio, ele ainda é capaz de empatia e coragem. A reflexão principal é que encarar o próprio passado e os erros dói, mas é parte essencial do processo de mudança, e que, por trás de alguém visto como “inimigo”, muitas vezes existe uma pessoa ferida tentando encontrar seu caminho.`,
        titulo: "EP: 7: Zuko sozinho",
        imagem: "zukosozinho.webp",
      },
      {
        texto: `Aang e o grupo encontram a biblioteca espiritual escondida no deserto, guardada pelo espírito Wan Shi Tong. Lá, eles têm acesso a um acervo gigantesco de conhecimento sobre o mundo, e é ali que descobrem o segredo do eclipse solar, capaz de enfraquecer totalmente os dobradores de fogo. O que começa como uma exploração curiosa e quase mágica se transforma rapidamente em algo tenso, porque a informação deixa de ser neutra e passa a ser uma possível arma contra a Nação do Fogo.<br><br>

        O impacto emocional surge quando Wan Shi Tong percebe que o grupo quer usar o conhecimento da biblioteca para fins de guerra. A atmosfera muda: o lugar sagrado da sabedoria se torna um campo de julgamento moral. Aang, que sempre busca o equilíbrio e a paz, sente o peso dessa descoberta, ele sabe que essa informação pode salvar vidas, mas também entende que está entrando em um território perigoso, onde conhecimento e destruição se misturam.<br><br>

        A reflexão central da cena é sobre responsabilidade ao lidar com informação poderosa. O episódio mostra que saber algo importante não é apenas um privilégio, mas um fardo: é preciso decidir como usar esse saber e aceitar as consequências. A biblioteca simboliza que conhecimento, por si só, não é bom nem mau — quem define isso são as intenções e as escolhas de quem o utiliza.`,
        titulo: "EP: 10: A biblioteca",
        imagem: "biblioteca.gif",
      },
      {
        texto: `Aang, Zuko não estão só em uma batalha física em Ba Sing Se,  eles estão em choque direto com os próprios valores. Quando Aang decide entrar no Estado Avatar, precisa abrir mão de um apego profundo, o amor por Katara, em nome do mundo inteiro. Ele está disposto a se sacrificar por algo maior, mesmo que isso fira seu coração. Ele não é movido por poder, e sim por responsabilidade. O fato de ser atingido por Azula exatamente quando faz esse sacrifício torna tudo ainda mais doloroso, é como se o mundo estivesse punindo alguém que tentou fazer o certo até o fim.<br><br>
        
        Zuko, por sua vez, está no ponto mais tenso de sua crise. Quando está frente a frente com Azula e Aang, tem a chance real de escolher um novo caminho podendo se alinhar ao que sente ser justo, ao que Iroh vinha tentando despertar nele. Mas, no fim, o que vence é o que foi condicionado desde a infância: a necessidade de ser aceito pelo pai. Ficando do lado de Azula, Zuko trai não apenas Aang e Katara, mas também a si mesmo. Isso é o que mais doi, ele “vence” a batalha, mas fere seus próprios valores, aquela parte dele que se identifica com o tio e com o desconforto diante da crueldade da Nação do Fogo mostrando que, naquele momento, o medo ainda fala mais alto do que a própria consciência. Ao fim, Ba Sing Se cai e Aang é derrotado, mas, em termos de valores, a situação é quase invertida: daqui pra frente não é só questão de poder, mas de quem vai ter coragem de reconstruir seus valores por dentro. Aang já sabe quem é, mas Zuko ainda vai ter que pagar o preço da escolha que fez.`,
        titulo: "EP: 20: Destino",
        imagem: "destino.gif",
      }, 
    ];
  } else if (livro == "3") {
    sidebar.style.background = "linear-gradient(to bottom, #8a211a, #590f0e)";
    cenas = [
      {
        texto: `Quando Aang acorda após ter sido atingido pelo raio de Azula, o que domina não é o alívio por estar vivo, mas a culpa. Ele se vê como alguém que falhou com o mundo: Ba Sing Se caiu, a Nação do Fogo avançou e, na cabeça dele, tudo isso aconteceu porque o Avatar não foi forte o suficiente.<br><br>

        Esse momento é forte porque revela o peso absurdo da responsabilidade que ele carrega. Aang não se enxerga como um jovem que foi derrotado em uma batalha quase impossível, mas como “o Avatar que decepcionou todo mundo”. Ele teme ter desapontado seus amigos, os povos que contavam com ele e até os Avatares anteriores.

        A cena conversa muito com a sensação real de fracasso e de medo de decepcionar quem acredita em você. Aang mostra que, mesmo alguém visto como símbolo de esperança, pode se sentir pequeno, inadequado e culpado — e que a verdadeira jornada não é só vencer o inimigo, mas aprender a lidar com essa pressão interna sem deixar que ela destrua quem você é.`,
        titulo: "EP: 1: O despertar",
        imagem: "odespertar.gif",
      },
      {
        texto: `A dobra de sangue coloca Katara em contato com um tipo de poder baseado em controle total sobre o outro. Ao aprender a técnica com Hama, ela entende que é capaz de manipular o corpo de uma pessoa como se fosse uma marionete, tirando dela qualquer liberdade. Isso distorce completamente o sentido que a dobra de água tinha para ela, que sempre esteve ligada a cura, proteção e defesa.<br><br>
        
        Quando Katara é encurralada e obrigada a usar a dobra de sangue contra Hama para salvar Aang e Sokka, ela entra em conflito moral. Ela sabe que aquilo é errado, sente isso instintivamente, mas a situação extrema a força a cruzar esse limite. Katara experimenta um tipo de poder que não é só forte, é invasivo, quase desumanizador. Ela vence a luta, mas a sensação não é de triunfo, e sim de horror por ter sido capaz de fazer aquilo. O impacto emocional em Katara é profundo porque esse poder toca diretamente sua identidade. Ela sempre foi a “âncora moral” do grupo, alguém que cobra responsabilidade dos outros e defende o que é certo. De repente, ela carrega em si uma técnica que lembra mais a crueldade da Nação do Fogo do que os ideais pelos quais luta. Hama, mesmo derrotada, reforça essa ferida ao dizer que Katara agora também é uma dobradora de sangue, como se tivesse passado adiante não só uma habilidade, mas um fardo.`,
        titulo: "EP: 8: A marionete",
        imagem: "dobradesangue.gif",
      },
      {
        texto: `Esse momento marca uma grande virada na história.
        De um lado, o plano de invadir a Nação do Fogo durante o eclipse, que parecia ser “a grande chance de vencer a guerra”, falha completamente. Aang, Sokka, Katara e os demais aliados percebem que a Nação do Fogo já sabia de tudo, a capital está esvaziada e eles caem numa armadilha. Em vez de vitória, precisam recuar, lidar com perdas e engolir a sensação de terem fracassado. Isso obriga o grupo a aceitar que nem sempre coragem e esforço garantem o resultado esperado — é preciso aprender com o erro, rever estratégias e continuar, mesmo com o peso da frustração.<br><br>

        Do outro lado, Zuko vive uma derrota e uma vitória ao mesmo tempo. Ele confronta Ozai, diz que a guerra é injusta e que não vai mais seguir cegamente as ordens do pai. Nesse ato, ele rompe com anos de abuso, humilhação e busca desesperada por aprovação. Ao escolher mudar de lado e procurar o time do Avatar, Zuko mostra a coragem de quebrar um ciclo de violência e ódio, mesmo sabendo que isso o torna um traidor aos olhos da própria família.`,
        titulo: "EP: 11: Eclipse",
        imagem: "zukoeozai.gif",
      },
      {
        texto: "8",
        titulo: "teste 2",
        imagem: "zuko.gif",
      },
      {
        texto: "8",
        titulo: "teste 2",
        imagem: "zuko.gif",
      },
    ];
  }

  for (var i = 0; i < cenas.length; i++) {
    conteudo += `
    <div class="cena-item" onclick="mostrarCenaPorIndice(${i})">
      <h3>${cenas[i].titulo}</h3>
      <img src="./assets/imgs/cenas/${cenas[i].imagem}" alt="${cenas[i].titulo}">
    </div>
  `;
  }

  listaCenas.innerHTML = conteudo;
}

window.onload = trocarlivro;
