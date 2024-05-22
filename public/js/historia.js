var lista_copas = []

var repetircopa2022 = 0
var repetircopa2018 = 0
var repetircopa2014 = 0
var repetircopa2010 = 0
var repetircopa2006 = 0
var repetircopa2002 = 0
var repetircopa1998 = 0
var repetircopa1994 = 0
var repetircopa1990 = 0
var repetircopa1986 = 0
var repetircopa1982 = 0
var repetircopa1978 = 0
var repetircopa1974 = 0
var repetircopa1970 = 0
var repetircopa1966 = 0
var repetircopa1962 = 0
var repetircopa1958 = 0
var repetircopa1954 = 0
var repetircopa1950 = 0
var repetircopa1938 = 0
var repetircopa1934 = 0
var repetircopa1930 = 0

function escolher() {

    var ano = ipt_anocopa.value;


    container_titulo_copa.innerHTML = ``
    container_resumo1.innerHTML = ``
    container_resumo2.innerHTML = ``
    container_resumo3.innerHTML = ``
    container_resumo4.innerHTML = ``

    div_msg.innerHTML = ``


    
  

    if (ano == '2022') {
        repetircopa2022++
        if(repetircopa2022 == 1){
            lista_copas.push(ano);
        }
        
        container_titulo_copa.innerHTML += `<span>COPA DO MUNDO DE ${ano}</span>`
        container_resumo1.innerHTML += `
        <p>A Copa do Mundo de 2022 foi realizada no Catar,a primeira vez que o torneio foi realizado no Oriente Médio realizada no final do ano, devido às altas temperaturas durante os meses de verão no Catar.<br>
        A competição contou com 32 equipes nacionais de futebol de todo o mundo, competindo em uma série de estádios modernos, muitos dos quais foram construídos especialmente para o evento.
        </p>
        <img src="C:/Users/Usuario/Documents/Site projeto individual/Projeto-individual/public/assets/imgs/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo2.innerHTML += `
        <img src="https://istoe.com.br/wp-content/uploads/2022/09/argentina-finalissima.jpg" alt="Banner copa 2022">   
        <p>
          A seleção da Argentina emergiu como campeã, após uma emocionante final contra a seleção da França. O jogo foi decidido nos pênaltis, com a Argentina prevalecendo por uma margem estreita.
        </p>`
        container_resumo3.innerHTML += `
        <p>
        O artilheiro foi Mbappe, da seleção da França, com 8 gols marcados durante o torneio.
        Alguns dos jogadores mais destacados da Copa de 2022 incluíram nomes como Emiliano Martínez (Argentina), Gvardiol (Croácia), Di Maria (Argentina), e Amrabat (Marrocos), entre outros.
        </p>
        <img src="https://www.atribuna.com.br/storage/Esportes/Copa_2022/img3450879512009.webp" alt="Banner copa 2022"> `
        container_resumo4.innerHTML += `
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ZD5Wya2nTfI6VhYePBjM8U97QjTa9NH5VLsSdo5LFw&s" alt="Banner copa 2022"> 
        <p>O estadio 974 que recebeu o Brasil nas quartas de final, na goleada por 4 a 1 sobre a Coreia,foi a primeira arena padrão FIFA completamente desmontável e reutilizável.<br>Tambem pela primeira vez na história da Copa do Mundo da FIFA™, o time de arbitragem teve mulheres.</p>`
    } else if (ano == '2018') {
        repetircopa2018++
        if(repetircopa2018 == 1){
            lista_copas.push(ano);
        }

        container_titulo_copa.innerHTML += `<span>COPA DO MUNDO DE ${ano}</span>`
        container_resumo1.innerHTML += `
        <p>
        A Copa do Mundo de 2018 foi realizada na Rússia, contando com a participação de 32 equipes nacionais. O torneio foi marcado por jogos emocionantes e surpresas, desde eliminações precoces de favoritos até performances impressionantes de equipes menos cotadas.
        </p>
        <img src="https://www.f9.com.br/wp-content/uploads/2017/08/russia2018-848x360.jpg" alt="Banner copa 2022"> `
        container_resumo2.innerHTML += `
        <img src="https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/BB09/production/_102518874_9fce1846-b0c6-4ed4-b3cc-c61045f5deba.jpg" alt="Banner copa 2022">   
        <p>
         A França sagrou-se campeã, conquistando seu segundo título mundial ao derrotar a Croácia na final,seleção que não era uma das favoritas do torneio, por 4-2.
        </p>`
        container_resumo3.innerHTML += `
        <p>
        O artilheiro foi Harry Kane, da seleção da Inglaterra, com 6 gols marcados durante o torneio.
        Alguns dos jogadores mais destacados da Copa de 2018 incluíram nomes como o melhor jogador do torneio  Luka Modric (Croácia),Eden Hazard (Belgica), N'Golo Kanté (França), e Mbappe (França), entre outros.
        </p>
        <img src="https://ogimg.infoglobo.com.br/in/22816920-705-3bd/FT1086A/77530832_England27s-forward-Harry-Kane-celebrates-after-scoring-a-penalty-during-the-Russia-2018.jpg" alt="Banner copa 2022"> `
        container_resumo4.innerHTML += `
        <img src="https://ogimg.infoglobo.com.br/in/19561307-bb6-f5e/FT1086A/Islandia-comemora-classificacao-na-Eurocopa.jpg" alt="Banner copa 2022"> 
        <p> 
        Curiosidades da copa: pela primeira vez na história, Islândia e Panamá pisaram no gramado da Copa do Mundo, estreando com muita garra e conquistando o carinho dos torcedores.<br>
        Após 17 anos no comando da seleção alemã, o técnico Joachim Löw se despediu após a eliminação para a seleção da Inglaterra nas oitavas.
        </p>`
    } else if (ano == '2014') {
        repetircopa2014++
        if(repetircopa2014 == 1){
            lista_copas.push(ano);
        }

        container_titulo_copa.innerHTML += `<span>COPA DO MUNDO DE ${ano}</span>`
        container_resumo1.innerHTML += `
        <p>A Copa do Mundo de 2014 foi realizada no Brasil.
        A Copa do Mundo de 2014 foi realizada no Brasil.O evento ocorreu de 12 de junho a 13 de julho de 2014, em 12 cidades-sede diferentes, espalhadas por todo o país.
    A competição foi marcada por grandes momentos, desde jogos emocionantes até surpresas e reviravoltas.
        </p>
    
        <img src="https://veja.abril.com.br/wp-content/uploads/2016/11/simbolo-da-copa-2014.jpeg?quality=70&strip=all" alt="Banner copa 2022"> `
        container_resumo2.innerHTML += `
        <img src="https://extra.globo.com/incoming/10920555-334-198/w976h550-PROP/alemanha.jpg" alt="Banner copa 2022">   
        <p>
        A final contra a Argentina, porém, foi muito mais disputada, mas Mario Götze acabou definindo o encontro a favor da Alemanha com um belo chute de primeira na prorrogação,resultando na seleção alemã como campeã
        </p>`
        container_resumo3.innerHTML += `
        <p>
        O artilheiro foi James Rodríguez, da seleção da Colômbia, com 6 gols marcados durante o torneio.
        Alguns dos jogadores mais destacados da Copa de 2014 incluíram nomes como o melhor jogador do torneio  Lionel Messi(Argentina),Müller (Alemanha), Neuer (Alemanha), Oscar (Brasil), entre outros.
        </p>
        <img src="https://ogimg.infoglobo.com.br/in/13073607-ad1-5bf/FT1086A/2014062809126.jpg" alt="Banner copa 2022"> `
        container_resumo4.innerHTML += `
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6IU8dTcBTBt06hSWppwOK56KGknVbrHify1o1v8--Gw&s" alt="Banner copa 2022"> 
        <p>A goleada da Alemanha sobre o Brasil na semifinal foi um dos momentos mais marcantes e dolorosos para a torcida brasileira.<br>
        Tambem tivemos o projeto Copa das Comunidades promoveu a inclusão social e o desenvolvimento de comunidades carentes através do futebol.
        </p>`
    } else if (ano == '2010') {
        repetircopa2010++
        if(repetircopa2010 == 1){
            lista_copas.push(ano);
        }
        container_titulo_copa.innerHTML += `<span>COPA DO MUNDO DE ${ano}</span>`
        container_resumo1.innerHTML += `
        <p>
        A Copa do Mundo de 2010 foi realizada na África do Sul,sendo a primeira vez que o continente africano sediou o torneio, em 9 cidades diferentes.Foi um momento histórico para o futebol africano, e deixou um legado importante para o continente.
        </p>
    
        <img src="https://upload.wikimedia.org/wikipedia/pt/thumb/0/0d/2010_FIFA_World_Cup.svg/1200px-2010_FIFA_World_Cup.svg.png" alt="Banner copa 2022"> `
        container_resumo2.innerHTML += `
        <img src="https://s.glbimg.com/es/ge/f/original/2010/07/11/espanha_campeamundial_reu_470.jpg" alt="Banner copa 2022">   
        <p>
        A Espanha dominou o torneio com um futebol técnico, ofensivo e posse de bola
        A Espanha triunfou em cima da Holanda na decisão em Joanesburgo, com um grande gol de Iniesta a quatro minutos do fim da prorrogação, que garantiu o primeiro triunfo espanhol na Copa do Mundo.
       </p>`
       container_resumo3.innerHTML += `
        <p>
        Os artilheiro foram:Thomas Müller(Alemanha), o David Villa(Espanha), o Wesley Sneijder(Holanda) e Diego Forlán (Uruguai), com 5 gols cada.
        Alguns dos jogadores mais destacados da Copa de 2010 incluíram nomes como o melhor jogador do torneio   Iniesta (Espanha),Carles Puyol (Espanha), Lahm (Alemanha), entre outros.
        </p>
        <img src="https://copa.imguol.com/2010/copadomundo/2010/06/29/higuain-villa-e-vittek-artilheiros-da-copa-ate-as-quartas-de-final-1277856217039_615x300.jpg" alt="Banner copa 2022"> `
        container_resumo4.innerHTML += `
        <img src="https://s2.glbimg.com/7dzisN-U42ChaQeJA8HPH9F8L4sp0re7dXrg1kCDpXpIoz-HdGixxa_8qOZvMp3w/s.glbimg.com/es/ge/f/original/2012/08/12/jabu.jpg" alt="Banner copa 2022"> 
        <p>
        Uma curiosidade é que a Jabulani, bola oficial da Copa, foi alvo de críticas por jogadores e goleiros por sua trajetória imprevisível em chutes e cruzamentos
        </p>`
    } else if (ano == '2006') {
        repetircopa2006++
        if(repetircopa2006 == 1){
            lista_copas.push(ano);
        }

        container_titulo_copa.innerHTML += `<span>COPA DO MUNDO DE de ${ano}</span>`
        container_resumo1.innerHTML += `
        <p>
        A Copa do Mundo de 2006 foi realizada na Alemanha e contou com a participação de 32 seleções.O torneio foi um grande sucesso, com grande participação do público e um alto nível de competitividade. O torneio também foi importante para o desenvolvimento do futebol mundial, ajudando a popularizar o esporte em novos países.
        </p>
    
        <img src="https://s2-memoriaglobo.glbimg.com/AMnhfEooZslZBxVsqGmeE1uwS5Y=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_ee6202d7f3f346a7a5d7affb807d8893/internal_photos/bs/2021/T/R/YokjYPQjeauiWVD1thsQ/copa-alemanha-2006-vale.jpg" alt="Banner copa 2022"> `
        container_resumo2.innerHTML += `
        <img src="https://elencos.com.br/wp-content/uploads/2022/11/franca-2006.jpg" alt="Banner copa 2022">   
        <p>
        A França impressionou com seu futebol ofensivo e técnico, contando com jogadores como Zidane, Henry e Vieira.
        A França aguardava na final e, depois de sair perdendo com o pênalti convertido por Zidane, a Itália empatou com o cabeceio de Marco Materazzi. Os dois autores dos gols acabaram se envolvendo no momento memorável quando o francês foi expulso já na prorrogação ao acertar uma cabeçada no zagueiro italiano.
        A Itália no final acabou se sagrando campeã.
       </p>`
        container_resumo3.innerHTML += `
        <p>
        O artilheiro foi Miroslav Klose, da seleção da Alemanha, com 5 gols marcados durante o torneio.
        Alguns dos jogadores mais destacados da Copa de 2006 incluíram nomes como Zidane(França),Cannavaro (Itália), Pirlo  (Itália), entre outros.
        </p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStz3UyAs2WIqGIvESCzPzbcB7GJgiOxPsxna142WldfA&s" alt="Banner copa 2022"> `
        container_resumo4.innerHTML += `
        <img src="https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/French-midfielder-Zinedine-Zidane-L-re-4cfe75ce6ceb2c496ad44e7349f97e80.jpg" alt="Banner copa 2022"> 
        <p>
        A Copa de 2006 é a que brilhou o maior número de vermelhos: 28 (em 64 partidas).<br>
        As seleções Costa do Marfim, Gana, Togo e Ucrânia estrearam nessa copa.
        </p>`
    } else if (ano == '2002') {
        repetircopa2002++
        if(repetircopa2002 == 1){
            lista_copas.push(ano);
        }

        container_titulo_copa.innerHTML += `<span>COPA DO MUNDO DE ${ano}</span>`
        container_resumo1.innerHTML += `
        <p>
        A Copa do Mundo de 2002 foi um evento memorável que uniu a Coreia do Sul e o Japão como co-sedes, marcando a primeira vez que o torneio foi realizado em território asiático.A Coreia do Sul e o Japão se destacaram como anfitriões impecáveis, organizando um evento memorável que ficou marcado na história do futebol mundial.
        </p>
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhp4N2m1_qzfNMkz9CzFHPPMPf5Du_qEbwndjTg2Eqqv-rWoM9XF4faS1HMPvfIOubKD4jPonH_Hlq6R4lOJzrYPAclTdydUooSLWz_xdFDiePClwtg6tggZPgan_qVIEfE0AvSOwis2kc/s1600/pic22192.jpg" alt="Banner copa 2022"> `
        container_resumo2.innerHTML += `
        <img src="https://static1.purebreak.com.br/articles/9/10/77/09/@/477369-20-anos-da-copa-do-mundo-2002-veja-o-an-opengraph_1200-3.jpg" alt="Banner seleção 2002">   
        <p>
         O Brasil,liderada por Ronaldo e Rivaldo e outros craques em todas as posições, voltou ao ponto mais alto do pódio quando a competição se deslocou até o Extremo Oriente pela primeira vez, com Ronaldo.Foi ele quem decidiu na final contra a Alemanha, fazendo os dois gols da vitória brasileira por 2 a 0, que valeram o pentacampeonato
        </p>`
        container_resumo3.innerHTML += `
        <p>
        O artilheiro foi Ronaldo, da seleção do Brasil, com 8 gols marcados durante o torneio.
        Alguns dos jogadores mais destacados da Copa de 2002 incluíram nomes como Oliver Kahn(Alemanha), Hong Myung-bo (Coreia do Sul), Neuer (Alemanha), Rivaldo (Brasil), entre outros.
        </p>
        <img src="https://lncimg.lance.com.br/uploads/2022/06/29/62bc95a2b32b4.jpeg" alt="Banner copa 2022"> `
        container_resumo4.innerHTML += `
        <img src="https://alchetron.com/cdn/danny-boffin-06a6d3d0-3625-4517-a7d4-29e44b2b8a3-resize-750.jpg" alt="Banner copa 2022"> 
        <p>
        A Bélgica foi a seleção mais velha da Copa, já que teve a maior média de idade da competição: 28,26 anos. Seu jogador mais velho, o meia Danny Boffin, tinha 37 anos. Já a Nigéria foi a seleção mais jovem da competição, 23,30 anos de média
        </p>`
    } else if (ano == '1998') {
        repetircopa1998++
        if(repetircopa1998 == 1){
            lista_copas.push(ano);
        }

        container_titulo_copa.innerHTML += `<span>COPA DO MUNDO DE ${ano}</span>`
        container_resumo1.innerHTML += `
        <p>
        A Copa do Mundo de 1998, realizada na França, foi um evento memorável que marcou a história do futebol.A bola utilizada no torneio foi a Adidas Tricolore. A bandeira tricolor e o galo gaulês, símbolos tradicionais da França, foram usados como inspiração para o design mais, de vinte rascunhos foram propostos pela equipe de design da Adidas antes que a versão definitiva fosse aprovada.
        </p>
    
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPVWfHL6KHlDx2p05nz8-Nv_DSvQmKnNyDq3INLQf1Tw&s" alt="Banner copa 2022"> `
        container_resumo2.innerHTML += `
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj20OfoG66Cjnokpsp2E7r4X4juQ8fB9Hgm2EoUKKLqssfvP48U91p82yoSvh04JfcNXkhrzdfgsm4qYXg-2NJVlFSKTqALVno1gIL41rPqSwV1-oD84k3QVuVcBzjj7xrYEZISLvmx_MiQSUPNQu14GFwk4M22XblBJxT1OckuAKO1m_ljXa0VqBSwRA/s1140/1998.jpg" alt="Banner copa 2022">   
        <p>
        Inspirada por Zinédine Zidane, a França saiu vitoriosa do torneio disputado em casa, conquistando sua primeira Copa do Mundo diante do então campeão Brasil.Assim, outro craque global roubou a cena: Zidane marcou dois gols e a França venceu por 3 a 0. Brilhou com um futebol ofensivo e eficiente, encantando o público e marcando época no futebol mundial.
        </p>`
        container_resumo3.innerHTML += `
        <p>
        O artilheiro foi Davor Šuker, da seleção do Croácia, com 6 gols marcados durante o torneio.
        Alguns dos jogadores mais destacados da Copa de 1998 incluíram nomes como Ronaldo(Brasil), Lilian Thuram (França), entre outros.
        </p>
        <img src="https://digitalhub.fifa.com/transform/e783b298-068e-48f1-b0e3-435532257762/1998_SUKER_GOLDEN_SHOE" alt="Banner copa 2022"> `
        container_resumo4.innerHTML += `
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkkIzawVg6mkJ1-ocIOpkmi9myWKtpft1vUFSO61UdUA&s" alt="Banner copa 2022"> 
        <p>
        O zagueiro francês Laurent Blanc fez o primeiro "gol de ouro" da história das Copas.<br>
    A morte súbita foi incluída nas regras da Fifa a partir dessa edição do campeonato. A prorrogação, interrompida assim que a primeira equipe marcasse gol, foi introduzida para ser colocada em prática a partir das oitavas-de-final
        </p>`
    } else if (ano == '1994') {
        repetircopa1994++
        if(repetircopa1994 == 1){
            lista_copas.push(ano);
        }
        container_titulo_copa.innerHTML += `<span>COPA DO MUNDO DE ${ano}</span>`
        container_resumo1.innerHTML += `
        <p>
        A Copa do Mundo de 1994, realizada nos Estados Unidos, um país tradicionalmente dominado por esportes como o beisebol e o basquete. A escolha dos EUA como sede foi um grande desafio para a FIFA, que precisou trabalhar para popularizar o futebol em um país com pouca tradição no esporte.
        </p>
        <img src="https://http2.mlstatic.com/D_NQ_NP_911259-MLB43872689876_102020-O.webp" alt="Banner copa 2022"> `
        container_resumo2.innerHTML += `
        <img src="https://sismf.museudofutebol.org.br/anexos/imagem/554068/w:640/h:640/c:0" alt="Banner copa 2022">   
        <p>
        O Brasil recuperava a coroa depois de 24 longos anos (cinco edições seguidas sem vencer) e conquistava assim o inédito quarto título da Copa do Mundo
        O Brasil venceu a Itália na primeira final decidida nos pênaltis. Foi uma partida bastante cautelosa que terminou sem gols após a prorrogação. E aí os brasileiros venceram a disputa quando o ídolo italiano Roberto Baggio chutou sua cobrança por cima do travessão.
        </p>`
        container_resumo3.innerHTML += `
        <p>
        O artilheiro foram Hristo Stoichkov (Bulgária), Oleg Salenko (Rússia), com 6 gols marcados durante o torneio.
        Alguns dos jogadores mais destacados da Copa de 1994 incluíram nomes como Romário(Brasil), Roberto Baggio (Itália), entre outros.
        </p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeqMm97V_3Q9gyhgD3aEiQ1Po_US2BNKTxNbUmHXNQJQ&s" alt="Banner copa 2022"> `
        container_resumo4.innerHTML += `
        <img src="https://trivela.com.br/wp-content/uploads/2018/06/Webp.net-resizeimage-11.jpg" alt="Banner copa 2022"> 
        <p>Essa copa tem muitas curiosidades.Por exemplo, desacostumados das regras do “soccer”, alguns torcedores norte-americanos bateram palmas para um arremesso lateral no jogo de abertura da Copa, entre Alemanha e Bolívia.
        urante a partida entre Alemanha e Coreia do Sul, foi registrada a temperatura mais alta em um jogo da Copa. As seleções se enfrentaram sob um calor de 46º C.
        </p>`
    } else if (ano == '1990') {
        repetircopa1990++
        if(repetircopa1990 == 1){
            lista_copas.push(ano);
        }

        container_titulo_copa.innerHTML += `<span>COPA DO MUNDO DE ${ano}</span>`
        container_resumo1.innerHTML += `
         <p>
         A Copa do Mundo de 1990,foi outro evento memorável que marcou a história do futebol.
         Aconteceu na Itália, um país com grande tradição no futebol e que já havia sediado duas Copas do Mundo anteriormente (em 1934 e 1966). A escolha da Itália como sede gerou grande expectativa e entusiasmo entre os fãs do esporte.
       </p>
        <img src="https://www.verminososporfutebol.com.br/wp-content/uploads/2018/04/cartaz-copa-do-mundo-italia-1990.jpg" alt="Banner copa 2022"> `
        container_resumo2.innerHTML += `
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo6_ySMDOZKdumbSFPo1fzLmSUvpMrpeutAzTnCBFPrg&s" alt="Banner copa 2022">   
        <p>
        Uma acirrada e combativa final, em que os argentinos Gustavo Dezotti e Pedro Monzón foram expulsos, foi decidida com uma cobrança da marca dos 11 metros convertida por Andreas Brehme aos 40 do segundo tempo, o que deu o tricampeonato aos alemães.
        </p>`
        container_resumo3.innerHTML += `
        <p>
        O artilheiro foi Salvatore Schillaci (Itália), com 6 gols marcados durante o torneio.
        Alguns dos jogadores mais destacados da Copa de 1990 incluíram nomes como Maradona(Argentina), Lothar Matthäus (Alemanha), entre outros.
        </p>
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh0kzJGsvwXnaZ_rKYBMG-ukqRBx_bMiHdJ7iSftDRY_lw9nRx6jP4vvBhbI3Di8BodlaKy_omClr1j2B70z9h89oeNoElj0OMwN_XTTbWHtKw3B1CURTdLW4zVmUAAYVeUJ7tYJCe6/s1600/Tot%25C3%25B3+Schillaci.jpg" alt="Banner copa 2022"> `
        container_resumo4.innerHTML += `
        <img src="https://tmssl.akamaized.net/images/foto/galerie/peter-shilton-england-1528460564-15893.jpg?lm=1528460574" alt="Banner copa 2022"> 
        <p>
         A Copa de 1990 viu entrar em campo o mais velho capitão da história dos mundiais. O inglês Peter Shilton liderou sua equipe com 40 anos e 292 dias de idade.<br>
         Foi o Mundial Fifa com a menor média de gols por partida: 2,21.
        </p>`
    } else if (ano == '1986') {
        repetircopa1986++
        if(repetircopa1986 == 1){
            lista_copas.push(ano);
        }
        container_titulo_copa.innerHTML += `<span>COPA DO MUNDO DE ${ano}</span>`
        container_resumo1.innerHTML += `
        <p>
        A Copa do Mundo de 1986, aconteceu na Itália, um país com grande tradição no futebol e que já havia sediado duas Copas do Mundo anteriormente (em 1934 e 1966). A escolha da Itália como sede gerou grande expectativa e entusiasmo entre os fãs do esporte.
      </p>
       <img src="https://i.pinimg.com/236x/1d/2d/8f/1d2d8f489e1667326c8717abee39cc53.jpg" alt="Banner copa 2022"> `
        container_resumo2.innerHTML += `
        <img src="https://sismf.museudofutebol.org.br/anexos/imagem/548080/w:640/h:640/c:0" alt="Banner copa 2022">   
        <p>
         A Argentina venceu os alemães por 3 a 2 em uma final eletrizante. A Alemanha empatou depois de sair perdendo por 2 a 0, mas, a sete minutos do fim, Jorge Burruchaga deu o bicampeonato para o Alviceleste.
        </p>`
         container_resumo3.innerHTML += `
        <p>
        O artilheiro foi  Gary Lineker (Inglaterra), com 6 gols marcados durante o torneio.
        Alguns dos jogadores mais destacados da Copa de 1986 incluíram nomes como Diego Maradona(Argentina), Harald Schumacher (Alemanha), Larsen (Dinamarca), entre outros.
        </p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHn5L5PhUahEP2EHdQVNiI3NSBHMSByobVdf5lVWrUJA&s" alt="Banner copa 2022"> `
        container_resumo4.innerHTML += `
        <img src="https://s2-ge.glbimg.com/hn4QIvqV8vWtMmygIqLj4tpCB7U=/0x189:2000x1500/924x0/smart/filters:strip_icc()/s.glbimg.com/es/ge/f/original/2014/04/17/maradona_golargentina_1986_get_69.jpg" alt="Banner copa 2022"> 
        <p> 
        La Mano de Dios foi um gol histórico que ocorreu na Copa do Mundo FIFA de 1986. marcado por Diego Maradona no jogo da Seleção Argentina contra a Inglaterra.<br>
        Este gol fez com que a FIFA promovesse o Fair Play, através da chamada Fair Play Campaign.Na Copa do Mundo de 1990, na Itália, Maradona voltou a usar a "mão de Deus", dessa vez, não para fazer um gol, mas para impedir um gol e funcionou
        </p>`
    } else if (ano == '1982') {
        repetircopa1982++
        if(repetircopa1982 == 1){
            lista_copas.push(ano);
        }
        container_titulo_copa.innerHTML += `<span>COPA DO MUNDO DE ${ano}</span>`
        container_resumo1.innerHTML += `
        <p>
        A Copa do Mundo de 1982 aconteceu na Espanha, um país com grande tradição no futebol e que já havia sediado a Copa do Mundo em 1966.Foi a primeira a contar com 24 seleções, entre elas várias estreantes.
        </p>
         <img src="https://upload.wikimedia.org/wikipedia/pt/0/07/Copa_do_Mundo_FIFA_de_19821982.jpg" alt="Banner copa 2022"> `
        container_resumo2.innerHTML += `
        <img src="https://copa.imguol.com/2010/copadomundo/2009/11/09/selecao-italiana-campea-da-copa-do-mundo-de-1982-posa-para-foto-oficial-1257783976963_615x300.jpg" alt="Banner copa 2022">   
        <p>
         A final foi disputada em Madri, e a Itália conquistou seu terceiro título mundial ao derrotar a Alemanha Ocidental por 3 a 1.
        </p>`
        container_resumo3.innerHTML += `
        <p>
        O artilheiro foi Paolo Rossi (Itália), com 6 gols marcados durante o torneio.
        Alguns dos jogadores mais destacados da Copa de 1982 incluíram nomes como Falcão, Rummenigge, entre outros.
        </p>
        <img src="https://s2.glbimg.com/MdmLbWbR1HspYxgqPY4gWCZEzOc=/0x0:1024x647/690x436/s.glbimg.com/es/ge/f/original/2012/06/29/junior_paolorossi_get.jpg" alt="Banner copa 2022"> `
        container_resumo4.innerHTML += `
        <img src="https://i.ytimg.com/vi/LtZapheWlFo/hqdefault.jpg" alt="Banner copa 2022"> 
        <p>Foi na Copa de 1982 que aconteceu a maior goleada em um Mundial Fifa.<br>
        O príncipe do Kuwait invadiu o campo e paralisou o jogo quando a França quando seu time tomou o quarto gol. Mesmo tendo conseguido anular o gol, acusou a Fifa de ser dominada pela Máfia e foi punido com uma multa de 11 mil dólares.
        </p>`
    } else if (ano == '1978') {
        repetircopa1978++
        if(repetircopa1978 == 1){
            lista_copas.push(ano);
        }
    
        container_titulo_copa.innerHTML += `<span>COPA DO MUNDO DE ${ano}</span>`
        container_resumo1.innerHTML += `
        <p>
        A Copa do Mundo de 1978 foi realizada na Argentina entre 30 de maio e 25 de junho, em um contexto histórico e social turbulento. Apesar das tensões políticas e da repressão militar no país, o torneio foi marcado por grandes momentos e pela consagração da seleção argentina como campeã pela primeira vez.
        </p>
        <img src="https://copa.imguol.com/2010/copadomundo/2009/11/09/selecao-italiana-campea-da-copa-do-mundo-de-1982-posa-para-foto-oficial-1257783976963_615x300.jpg" alt="Banner copa 2022"> `
        container_resumo2.innerHTML += `
        <img src="https://infograficos.estadao.com.br/esportes/copa/2018/historia-das-copas-do-mundo-de-futebol/wp-content/uploads/2018/05/40762985.jpg" alt="Banner copa 2022">   
        <p>
        A Argentina conquistou seu primeiro título mundial ao vencer a Holanda por 3 a 1 na prorrogação, com gols marcados por Mario Kempes, com a final sendo disputada em Buenos Aires
        </p>`
        container_resumo3.innerHTML += `
        <p>
        O artilheiro foi Mario Kempes (Argentina), com 6 gols marcados durante o torneio.
        Alguns dos jogadores mais destacados da Copa de 1978 incluíram nomes como Paolo Rossi (Itália), Dirceu (Brasil), entre outros.
        </p>
         <img src="https://s2.glbimg.com/j7q6rr5ZP_Tb0NADfg5VuhB1FnA=/0x0:950x600/690x436/s.glbimg.com/es/ge/f/original/2012/08/12/mariokempes_1978_bola1_get_95.jpg" alt="Banner copa 2022"> `
        container_resumo4.innerHTML += `
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThE2oiJr0AQjsaKecW2T_AwL0wGqh9NdYU03wou3m6OQ&s" alt="Banner copa 2022"> 
        <p>
        Duas curiosidades:<br>Para disputar suas sete partidas, o Brasil percorreu 4.659 km pela Argentina. Já a seleção da Argentina deslocou-se 618 km.<br>
        Os franceses foram enfrentar a Hungria sem um uniforme reserva e como os uniformes dos dois times eram brancos, o franceses foram obrigados a tomar emprestadas as camisas de um time local.
        </p>`
    } else if (ano == '1974') {
        repetircopa1974++
        if(repetircopa1974 == 1){
            lista_copas.push(ano);
        }

        container_titulo_copa.innerHTML += `<span>COPA DO MUNDO DE ${ano}</span>`
        container_resumo1.innerHTML += `
        <p>
        A Copa do Mundo de 1974, realizada na Alemanha Ocidental, que já havia sediado a Copa do Mundo em 1954<br>
        Dezesseis seleções nacionais foram qualificadas para participar desta edição do campeonato, sendo 9 delas europeias.
        </p>
        <img src="https://http2.mlstatic.com/D_NQ_NP_740726-MLB42987585642_082020-O.webp" alt="Banner copa 2022"> `
        container_resumo2.innerHTML += `
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwaJiUrN5PHGGs5CEJDURiOn1Vb8hDjQolbzxQW06cJA&s" alt="Banner copa 2022">   
        <p>
        A seleção era conhecida como "Laranja Mecânica" e "Carrossel Holandês", devido à tática de Michels de alternar os jogadores em suas posições. O destaque dessa equipe era Johan Cruijff, que atuava bem tanto na defesa, quanto no meio-campo ou no ataque. .A final foi realizada em Munique, e a Alemanha Ocidental conquistou seu segundo título ao derrotar a Holanda por 2 a 1, em uma partida intensamente disputada.
        </p>`
        container_resumo3.innerHTML += `
        <p>
        O artilheiro foi Grzegorz Lato (Polônia), com 7 gols marcados durante o torneio.
        Alguns dos jogadores mais destacados da Copa de 1974 incluíram nomes como Cruyff (Holanda),Beckenbauer (Alemanha), Deyna (Polônia), entre outros.
        </p>
        <img src="https://digitalhub.fifa.com/transform/b659af8e-55bc-4fcc-9fc2-2dd6eccd9239/1974_LATO_TOP_GOALSCORER" alt="Banner copa 2022"> `
        container_resumo4.innerHTML += `
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNdN5-lzYPUm5sg_JrhCf45HC3pmYAfyEoDsPOtBpSkg&s" alt="Banner copa 2022"> 
        <p>
        O atentado terrorista nas Olimpíadas de 1972, em Munique, refletiu-se na Copa. As concentrações eram sempre vigiadas por  guardas armados de metralhadoras e cães. Mesmo nas ruas, os jogadores eram acompanhados por seguranças e viaturas de apoio.<br>
        Outra curiosidade é que um jogador recebeu pela primeira vez um cartão vermelho durante um jogo do Mundial Fifa. O chileno Carlos Caszely recebeu a punição na disputa contra a Alemanha Ocidental.
        </p>`
    } else if (ano == '1970') {
          repetircopa1970++
        if(repetircopa1970 == 1){
            lista_copas.push(ano);
        }
        container_titulo_copa.innerHTML += `<span>COPA DO MUNDO DE ${ano}</span>`
        container_resumo1.innerHTML += `
        <p>A Copa do Mundo de 1970, realizada no México, o país já havia sediado a Copa do Mundo em 1950 e era conhecido por sua paixão pelo futebol.</p>
    
        <img src="https://www.verminososporfutebol.com.br/wp-content/uploads/2018/04/cartaz-copa-do-mundo-mexico-1970.jpg" alt="Banner copa 2022"> `
        container_resumo2.innerHTML += `
        <img src="https://conteudo.cbf.com.br/cdn/thumbs/910x455/201706/20170614150908_0.jpeg" alt="Banner copa 2022">   
        <p>
        A final foi disputada na Cidade do México, e o Brasil conquistou seu terceiro título ao derrotar a Itália por 4 a 1, em uma das finais mais memoráveis, com um desempenho brilhante de Pelé e Carlos Alberto Torres.
        </p>`
        container_resumo3.innerHTML += `
        <p>
        O artilheiro foi Gerd Müller (Alemanha), com 10 gols marcados durante o torneio.
        Alguns dos jogadores mais destacados da Copa de 1970 incluíram nomes como Gerson(Brasil), Gerd Müller (Alemanha), entre outros.
        </p>
        <img src="https://1.bp.blogspot.com/-GGyM4eJjai8/XuQK5GA_UdI/AAAAAAAAtIw/1ue3Wm8Wi0c0MvQ_O8f6v-CMv5kAwUT4ACLcBGAsYHQ/s1600/gerd-mller-1.jpg" alt="Banner copa 2022"> `
        container_resumo4.innerHTML += `
        <img src="https://s2-ge.glbimg.com/zeXsNmCGVrszw-2-l9YYDK6X6e4=/0x0:910x607/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2020/I/T/E3Aa2IQIOHZ9TZeoAZjA/cbf-2.jpeg" alt="Banner copa 2022"> 
        <p>
        Curiosidades sobre essa copa: A Copa de 1970 foi a última a se chamar Taça Jules Rimet. Depois disso, o torneio seria oficialmente denominado Copa do Mundo FIFA.<br>
        Depois da vitória contra a Itália, os jogadores brasileiros seguraram Rivelino e resolveram raspar seu bigodão. Ele só foi salvo ao lembrar que estava de casamento marcado.
        </p>`
    } else if (ano == '1966') {
        repetircopa1966++
        if(repetircopa1966 == 1){
            lista_copas.push(ano);
        }

        container_titulo_copa.innerHTML += `<span>COPA DO MUNDO DE ${ano}</span>`
        container_resumo1.innerHTML += `
        <p>
        A Copa do Mundo de 1966 foi realizada na Inglaterra, que já havia tentado sediar o torneio em outras ocasiões, mas finalmente conseguiu em 1966. <br>
        </p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhn81iR0recHRLgi-aTRo20p-80uYutp63DGimY1as5g&s" alt="Banner copa 2022"> `
        container_resumo2.innerHTML += `
        <img src="https://images.tcdn.com.br/img/img_prod/1103549/poster_da_inglaterra_campea_da_copa_do_mundo_de_1966_327_1_3ba574b8343b5d77e944d33ae0c91e8b.jpg" alt="Banner copa 2022">   
        <p>
        O resultado da final foi Inglaterra 4-2 Alemanha Ocidental (após prorrogação). A conquista foi marcada pela força da equipe, futebol disciplinado dos ingleses.
A final foi disputada em Londres, no Estádio de Wembley, e é lembrada pelo polêmico gol de Geoff Hurst na prorrogação.Passados quase 30 anos, um computador da Universidade de Oxford mostrou que o gol que deu o título para a Inglaterra contra a Alemanha foi roubado. A bola caiu 2,5 centímetros antes da linha de gol..
        </p>`
         container_resumo3.innerHTML += `
        <p>
        O artilheiro foi Euzébio (Portugal), com 9 gols marcados durante o torneio.
        Alguns dos jogadores mais destacados da Copa de 1966 incluíram nomes como Bobby Charlton(Inglaterra), Bobby Moore (Inglaterra), entre outros.
        </p>
        <img src="https://1.bp.blogspot.com/-2RXL2DbMEbU/XuKVAPN5RrI/AAAAAAAAtIg/lD6iq3bs7Ak4zb0d-8Ikgnw9HEsxl5txACLcBGAsYHQ/s320/images.jpg" alt="Banner copa 2022"> `
        container_resumo4.innerHTML += `
        <img src="https://image-service.onefootball.com/transform?w=280&h=210&dpr=2&image=https%3A%2F%2Fwww.ultimadivisao.com.br%2Fwp-content%2Fuploads%2F2022%2F03%2Fcoreia-19-jornal.jpg" alt="Banner copa 2022"> 
        <p>Curiosidades dessa copa:Foi a primeira Copa que teve replays dos principais lances das partidas mostrados na televisão.<br>
        Nessa copa, aconteceu uma das maiores zebras da história do futebol: a Itália foi eliminada pela Coreia do Norte.
        </p>`
    } else if (ano == '1962') {
          repetircopa1962++
        if(repetircopa1962 == 1){
            lista_copas.push(ano);
        }

        container_titulo_copa.innerHTML += `<span>COPA DO MUNDO DE ${ano}</span>`
        container_resumo1.innerHTML += `
        <p>A Copa do Mundo de 1962 foi realizada no Chile.O país já havia tentado sediar o torneio em 1950, mas finalmente conseguiu em 1962.Apesar do devastador terremoto de 1960, o Chile, liderado por Carlos Dittborn, perseverou para sediar a Copa do Mundo, demonstrando coragem e determinação, reconhecendo o evento como uma oportunidade crucial para reconstruir o país e sua moral.<br>
        </p>
        <img src="https://conteudo.imguol.com.br/c/galeria/1b/2022/06/15/copa-do-mundo-de-1962-chile-1655298451571_v2_450x600.jpgx" alt="Banner copa 2022"> `
        container_resumo2.innerHTML += `
        <img src="https://i.ytimg.com/vi/UdLrhU02RmM/maxresdefault.jpg" alt="Banner copa 2022">   
        <p>
        O Brasil conquistou seu Bi campeonato consecutivo, batendo a  Tchecoslováquia por 3-1 em Santiago.
        </p>`
         container_resumo3.innerHTML += `
        <p>
        O artilheiro foram Garrincha (Brasil), Vavá (Brasil), Leonel Sánchez (Chile), Flórián Albert (Hungria), Dražan Jerković (Iugoslávia), Valentin Ivanov (URSS), com 4 gols cada.
        Alguns dos jogadores mais destacados da Copa de 1962 incluíram nomes como Masopust(Tchecoslováquia), Leonel Sánchez (Chile), entre outros.
        </p>
        <img src="https://www.lance.com.br/galerias/wp-content/uploads/2022/11/Garrincha_Easy-Resize.com_-319x474.jpg" alt="Banner copa 2022"> `
        container_resumo4.innerHTML += `
        <img src="https://s2.glbimg.com/_L5F6Ijgcjft1kDQedeyc4x33jU=/32x0:914x600/690x470/s.glbimg.com/es/ge/f/original/2013/11/19/1962-garrincha_brasil-ae.jpg" alt="Banner copa 2022"> 
        <p>
        Curiosidades sobre essa copa: A superstição pegou a imprensa brasileira: depois da vitória inaugural, todos os jornalistas foram obrigados a trabalhar com a roupa daquele primeiro jogo. Quem mudasse uma peça sequer era impedido pelos companheiros de entrar.<br>
        Outra é que o craque Garrincha disputou a final com 38 graus de febre
        </p>`
    } else if (ano == '1958') {
        repetircopa1958++
        if(repetircopa1958 == 1){
            lista_copas.push(ano);
        }
        container_titulo_copa.innerHTML += `<span>COPA DO MUNDO DE ${ano}</span>`
        container_resumo1.innerHTML += `
        <p>A Copa do Mundo FIFA de 1958 foi a sexta edição da Copa do Mundo FIFA de Futebol, sediado na Suécia.O país já havia tentado sediar o torneio em 1938, mas finalmente conseguiu em 1958.
        </p>
    
        <img src="https://blog.welancer.com/wp-content/uploads/2016/04/logo-copa-do-mundo-suecia-1958.jpg" alt="Banner copa 2022"> `
        container_resumo2.innerHTML += `
        <img src="https://www.redebrasilatual.com.br/wp-content/uploads/2013/04/d421e09a-d420-4089-8252-815260a07efb.jpeg" alt="Banner copa 2022">   
        <p>
        O Brasil conquistou seu primeiro título mundial ao derrotar a Suécia por 5 a 2.
        A final foi disputada em Estocolmo, com uma atuação brilhante de Pelé, que marcou dois gols na final.
        </p>`
         container_resumo3.innerHTML += `
        <p>
        O artilheiro foi Just Fontaine (França), com 9 gols marcados durante o torneio.
        Alguns dos jogadores mais destacados da Copa de 1958 incluíram nomes como Pelé(Brasil), Didi (Brasil), entre outros.
        </p>
        <img src="https://www.lance.com.br/galerias/wp-content/uploads/2022/10/Just-Fontaine.jpeg" alt="Banner copa 2022"> `
        container_resumo4.innerHTML += `
        <img src="C:/Users/Usuario/Documents/Site projeto individual/Projeto-individual/public/assets/imgs/6x1 tchecoslováquia.png" alt="Banner copa 2022"> 
        <p>
        O Brasil foi, em 1958, o primeiro país a vencer uma Copa do Mundo fora de seu continente.Em 2010 a Espanha repetiu o feito e ganhou a Copa na África do Sul.<br>
        A Argentina subestimou a Tchecoslováquia e perdeu de 6 a 1.Na volta da delegação, os torcedores lotaram o aeroporto e atiraram moedas de um peso nos jogadores.
        </p>`
    } else if (ano == '1954') {
        repetircopa1954++
        if(repetircopa1954 == 1){
            lista_copas.push(ano);
        }

        container_titulo_copa.innerHTML += `<span>COPA DO MUNDO DE ${ano}</span>`
        container_resumo1.innerHTML += `
        <p>
        A Copa do Mundo FIFA de 1954, com dezesseis seleções nacionais.Em comemoração ao 50º aniversário da FIFA, o evento foi sediado na Suíça, onde encontra-se a sede da FIFA; o país foi oficialmente selecionado como anfitrião em julho de 1946. 
        </p>
    
        <img src="https://blog.welancer.com/wp-content/uploads/2016/04/logo-copa-do-mundo-suica-1954.jpg" alt="Banner copa 2022"> `
        container_resumo2.innerHTML += `
        <img src="https://static.dw.com/image/56808252_605.jpg" alt="Banner copa 2022">   
        <p>
        Campeão dessa edição foi a Alemanha Ocidental batendo a Hungria por 3-2 .
        A final foi disputada em Berna, e a Alemanha Ocidental conquistou seu primeiro título ao derrotar a favorita Hungria por 3 a 2, em uma virada surpreendente.
        </p>`
         container_resumo3.innerHTML += `
        <p>
        O artilheiro foi Sándor Kocsis (Hungria), com 11 gols marcados durante o torneio.
        Alguns dos jogadores mais destacados da Copa de 1954 incluíram nomes como Fritz Walter, Puskas, entre outros.
        </p>
        <img src="https://www.lance.com.br/galerias/wp-content/uploads/2020/09/S%C3%A1ndor-Kocsis-699x474.jpg" alt="Banner copa 2022"> `
        container_resumo4.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> 
        <p>
        O clima do jogo em que o Brasil foi desclassificado pela Hungria foi tão pesado que a partida ganhou o nome de “A Batalha de Berna”.<br>
        A Copa de 1954 foi a primeira a ser televisionada, graças aos avanços locais da tecnologia. Mas foi só em 1970 que o evento completo foi transmitido globalmente.
         </p>`
    } else if (ano == '1950') {
        repetircopa1950++
        if(repetircopa1950 == 1){
            lista_copas.push(ano);
        }

        container_titulo_copa.innerHTML += `<span>COPA DO MUNDO DE ${ano}</span>`
        container_resumo1.innerHTML += `
        <p>A Copa do Mundo de 1950, realizada no Brasil, anfitrião da competição pela primeira vez.Naquela época, a Europa havia acabado de passar por duas Guerras Mundiais e estava em reconstrução.Com todos os países europeus sem condições, a FIFA optou pela realização da IV Copa do Mundo no Brasil </p>
    
        <img src="https://blog.welancer.com/wp-content/uploads/2016/04/logo-copa-do-mundo-brasil-1950.jpg" alt="Banner copa 2022"> `
        container_resumo2.innerHTML += `
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Urug1950.jpg/500px-Urug1950.jpg" alt="Banner copa 2022">   
        <p>
        Campeão dessa edição foi a Uruguai por 2-1 no Brasil..
        Conhecida como "Maracanazo", esta final é uma das mais famosas da história das Copas do Mundo. O Brasil perdeu para o Uruguai por 2 a 1 no Estádio do Maracanã, no Rio de Janeiro, diante de mais de 200.000 espectadores, sofrendo um gol decisivo nos minutos finais.
        </p>`
        container_resumo3.innerHTML += `
        <p>
        O artilheiro foi Ademir Menezes (Brasil), com 9 gols marcados durante o torneio.
        Alguns dos jogadores mais destacados da Copa de 1950 incluíram nomes como Zizinho(Brasil), Schiaffino (Uruguai), Obdullo Varela (Uruguai), entre outros.
        </p>
        <img src="https://www.lance.com.br/galerias/wp-content/uploads/2020/10/Ademir-Menezes.jpg" alt="Banner copa 2022"> `
        container_resumo4.innerHTML += `
        <img src="https://s2.glbimg.com/EZKP5Kzikxo-HyHpm4hDeDKQb7ThB12M2s0GhOvStWk1h_9JRMxFLfsnsH0O6JkN/e.glbimg.com/og/ed/f/original/2013/09/03/1950_-_inglaterra_billy_wright_eua_ed_mcilvenny_getty.jpg" alt="Banner copa 2022"> 
        <p>
         Foi nessa Copa que os jogadores passaram a usar números nas costas.<br>
         Até 1950, os ingleses esnobavam a Copa do Mundo, alegando sua superioridade em relação aos outros países. Nesse ano, concordaram em vir ao Brasil e… não passaram da primeira fase.
        </p>`
    } else if (ano == '1938') {
        repetircopa1938++
        if(repetircopa1938 == 1){
            lista_copas.push(ano);
        }

        container_titulo_copa.innerHTML += `<span>COPA DO MUNDO DE ${ano}</span>`
        container_resumo1.innerHTML += `
        <p>
        A Copa do Mundo de 1938 foi a terceira edição do torneio e aconteceu na França.<br>
        A escolha da França como sede da Copa do Mundo gerou polêmica, pois alguns países sul-americanos viam na Europa uma concentração excessiva de edições do torneio.
        </p>
    
        <img src="https://blog.welancer.com/wp-content/uploads/2016/04/logo-copa-do-mundo-fran%C3%A7a-1938.jpg" alt="Banner copa 2022"> `
        container_resumo2.innerHTML += `
        <img src="https://static.ndmais.com.br/2014/04/10-04-2014-22-48-43-co0pa-38.jpg" alt="Banner copa 2022">   
        <p>
        Campeão dessa edição foi a Itália por 4-2 na Hungria.
        Foi disputada entre Itália e Hungria. A Itália venceu a partida por 4x2 e ganhou a última Copa antes da Segunda Guerra Mundial.
        </p>`
        container_resumo3.innerHTML += `
        <p>
        O artilheiro foi Leônidas da Silva (Brasil), com 7 gols marcados durante o torneio.
        Alguns dos jogadores mais destacados da Copa de 1938 incluíram nomes como Silvio Piola (Itália), Sárosi (Hungria), entre outros.
        </p>
        <img src="https://www.lance.com.br/galerias/wp-content/uploads/2020/04/Leonidas.png" alt="Banner copa 2022"> `
        container_resumo4.innerHTML += `
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2000px-Flag_of_Brazil.svg.png" alt="Banner copa 2022"> 
        <p>
        Como forma de protesto, Uruguai, Costa Rica, Colômbia, México e Argentina se recusaram a participar das Eliminatórias. O Brasil foi o único país sulamericano a disputar o torneio.<br>
        A Copa de 1938 foi a última antes da Segunda Guerra Mundial, que paralisou a competição por 12 anos.
        </p>`
    } else if (ano == '1934') {
          repetircopa1934++
        if(repetircopa1934 == 1){
            lista_copas.push(ano);
        }
        container_titulo_copa.innerHTML += `<span>COPA DO MUNDO DE ${ano}</span>`
        container_resumo1.innerHTML += `
        <p>
        A Copa do Mundo de 1934 foi a segunda edição do torneio e aconteceu na Itália
        Esta Copa do Mundo foi a primeira à qual as equipes tiveram de se classificar para participar. 32 nações entraram para a competição e, depois das eliminatórias, 16 seleções participaram do torneio definitivo.
        </p>
    
        <img src="https://blog.welancer.com/wp-content/uploads/2016/04/logo-copa-do-mundo-italia-1934.jpg" alt="Banner copa 2022"> `
        container_resumo2.innerHTML += `
        <img src="https://i.ytimg.com/vi/6lBH-bHNfvY/maxresdefault.jpg" alt="Banner copa 2022">   
        <p>
        A partida foi disputada entre a Itália e a Tchecoslováquia, no Estádio Nacional do PNF, em Roma, Itália.
     Na final, a Itália recuperou de um golo de desvantagem vencendo por 2–1 em uma partida que teve temperaturas próximas a 40 °C (104 °F) e se tornou a campeã.
        </p>`
      container_resumo3.innerHTML += `
        <p>
        O artilheiro foi Oldřich Nejedlý  (Tchecoslováquia), com 5 gols marcados durante o torneio.
        Alguns dos jogadores mais destacados da Copa de 1934 incluíram nomes como Giuseppe Meazza(Itália), Sindelar (Áustria), Nejedly (Tchecoslováquia), entre outros.
        </p>
        <img src="https://www.lance.com.br/galerias/wp-content/uploads/2022/11/Oldrich-Nejedly_Easy-Resize.com_-843x474.jpg" alt="Banner copa 2022"> `
        container_resumo4.innerHTML += `
        <img src="https://i.ytimg.com/vi/cyAxIpBqtSM/maxresdefault.jpg" alt="Banner copa 2022"> 
        <p>A Copa de 1934 deveria ter sido disputada na Suécia, mas o país desistiu de sediar o Mundial por problemas financeiros. A Itália, então, foi a substituta.<br>
        O Uruguai não participou da Copa em represália à ausência dos italianos em Montevidéu, quatro anos antes. </p>`
    } else if (ano == '1930') {
        repetircopa1930++
        if(repetircopa1930 == 1){
            lista_copas.push(ano);
        }
        container_titulo_copa.innerHTML += `<span>COPA DO MUNDO DE ${ano}</span>`
        container_resumo1.innerHTML += `
        <p> 
        Copa do Mundo FIFA de 1930  foi a primeira edição deste evento esportivo, que passou a ser organizado quadrienalmente pela FIFA. A competição foi disputada no Uruguai, já que o mesmo estava comemorando o centenário de sua primeira constituição.
        </p>
    
        <img src="https://blog.welancer.com/wp-content/uploads/2016/04/logo-copa-do-mundo-uruguai-1930.jpg" alt="Banner copa 2022"> `
        container_resumo2.innerHTML += `
        <img src="https://s5.static.brasilescola.uol.com.br/be/2022/10/jogadores-uruguai-primeira-copa.jpg" alt="Banner copa 2022">   
        <p>
        O Uruguai se sagrou campeão, ganhando de 4-2 sobre Argentina e conquistando o título diante de sua torcida.
        </p>`
        container_resumo3.innerHTML += `
        <p>
        O artilheiro foi Guillermo Stábile (Argentina), com 8 gols marcados durante o torneio.
        Alguns dos jogadores mais destacados da Copa de 1930 incluíram nomes como José Nasazzi (Uruguai), José Leandro Andrade (Uruguai), entre outros.
        </p>
        <img src="https://www.lance.com.br/galerias/wp-content/uploads/2022/11/Guillermo-Stabil_Easy-Resize.com_-350x474.jpg" alt="Banner copa 2022"> `
        container_resumo4.innerHTML += `
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/35/Carol_II%2C_King_of_Romania%2C_Prince_of_Hohenzollern-Sigmaringen.jpg" alt="Banner copa 2022"> 
        <p>A primeira Copa do Mundo foi a única para a qual não houve eliminatórias. Os participantes foram convidados.<br>
        Apaixonado por futebol, o rei Carol, da Romênia, escalou ele mesmo os titulares e os reservas para a primeira Copa do Mundo. </p>`
    }
    div_msg.innerHTML += `<br>Você viu as Copas de `
    for(var index = lista_copas.length - 1; index >= 0 ;index --){
        div_msg.innerHTML += ` ${lista_copas[index]}, `
    }
    div_msg.innerHTML += ` no total ${lista_copas.length} Copas do Mundo. Faltam ${ 22 - lista_copas.length} Copas para você conhecer.`




}