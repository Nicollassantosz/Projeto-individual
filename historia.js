function escolher() {
    var ano = ipt_anocopa.value;



    container_titulo_copa.innerHTML = ``
    container_resumo1.innerHTML = ``
    container_resumo2.innerHTML = ``
    container_resumo3.innerHTML = ``
    container_resumo4.innerHTML = ``


    if (ano == '2022') {
        container_titulo_copa.innerHTML += `<h1>Copa do Mundo de ${ano}</h1>`
        container_resumo1.innerHTML += `
        <p>A Copa do Mundo de 2022 foi realizada no Catar,a primeira vez que o torneio foi realizado no Oriente Médio realizada no final do ano, devido às altas temperaturas durante os meses de verão no Catar.<br>
        A competição contou com 32 equipes nacionais de futebol de todo o mundo, competindo em uma série de estádios modernos, muitos dos quais foram construídos especialmente para o evento.
        </p>
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo2.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022">   
        <p>
          A seleção da Argentina emergiu como campeã, após uma emocionante final contra a seleção da França. O jogo foi decidido nos pênaltis, com a Argentina prevalecendo por uma margem estreita.
        </p>`
        container_resumo3.innerHTML += `
        <p>
        O artilheiro foi Mbappe, da seleção da França, com 8 gols marcados durante o torneio.
        Alguns dos jogadores mais destacados da Copa de 2022 incluíram nomes como Emiliano Martínez (Argentina), Gvardiol (Croácia), Di Maria (Argentina), e Amrabat (Marrocos), entre outros.
        </p>
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo4.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> 
        <p>O estadio 974 que recebeu o Brasil nas quartas de final, na goleada por 4 a 1 sobre a Coreia,foi a primeira arena padrão FIFA completamente desmontável e reutilizável.<br>Tambem pela primeira vez na história da Copa do Mundo da FIFA™, o time de arbitragem teve mulheres.</p>`
    } else if (ano == '2018') {
        container_titulo_copa.innerHTML += `<h1>Copa do Mundo de ${ano}</h1>`
        container_resumo1.innerHTML += `
        <p>
        A Copa do Mundo de 2018 foi realizada na Rússia, contando com a participação de 32 equipes nacionais. O torneio foi marcado por jogos emocionantes e surpresas, desde eliminações precoces de favoritos até performances impressionantes de equipes menos cotadas.
        </p>
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo2.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022">   
        <p>
         A França sagrou-se campeã, conquistando seu segundo título mundial ao derrotar a Croácia na final,seleção que não era uma das favoritas do torneio, por 4-2.
        </p>`
        container_resumo3.innerHTML += `
        <p>
        O artilheiro foi Harry Kane, da seleção da Inglaterra, com 6 gols marcados durante o torneio.
        Alguns dos jogadores mais destacados da Copa de 2018 incluíram nomes como o melhor jogador do torneio  Luka Modric (Croácia),Eden Hazard (Belgica), N'Golo Kanté (França), e Mbappe (França), entre outros.
        </p>
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo4.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> 
        <p>A Copa do Mundo de 2022 foi realizada no Catar, marcando a primeira vez que o torneio foi realizado no Oriente Médio. O evento foi único não apenas por sua localização, mas também por ser realizado no final do ano, devido às altas temperaturas durante os meses de verão no Catar.

        A competição contou com 32 equipes nacionais de futebol de todo o mundo, competindo em uma série de estádios modernos, muitos dos quais foram construídos especialmente para o evento.
        
        A seleção da França emergiu como campeã, conquistando seu segundo título mundial, após uma emocionante final contra a seleção da Argentina. O jogo foi decidido nos pênaltis, com a França prevalecendo por uma margem estreita.
        
        Além do sucesso esportivo, a Copa do Mundo de 2022 foi notável por sua ênfase na sustentabilidade e nas questões sociais, com o Catar implementando várias iniciativas para minimizar o impacto ambiental do torneio e abordar preocupações sobre direitos humanos e condições de trabalho.</p>`
    } else if (ano == '2014') {
        container_titulo_copa.innerHTML += `<h1>Copa do Mundo de ${ano}</h1>`
        container_resumo1.innerHTML += `
        <p>A Copa do Mundo de 2022 foi realizada no Catar, marcando a primeira vez que o torneio foi realizado no Oriente Médio. O evento foi único não apenas por sua localização, mas também por ser realizado no final do ano, devido às altas temperaturas durante os meses de verão no Catar.

        A competição contou com 32 equipes nacionais de futebol de todo o mundo, competindo em uma série de estádios modernos, muitos dos quais foram construídos especialmente para o evento.
        
        A seleção da França emergiu como campeã, conquistando seu segundo título mundial, após uma emocionante final contra a seleção da Argentina. O jogo foi decidido nos pênaltis, com a França prevalecendo por uma margem estreita.
        
        Além do sucesso esportivo, a Copa do Mundo de 2022 foi notável por sua ênfase na sustentabilidade e nas questões sociais, com o Catar implementando várias iniciativas para minimizar o impacto ambiental do torneio e abordar preocupações sobre direitos humanos e condições de trabalho.</p>
    
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo2.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022">   
        <p>
        A final contra a Argentina, porém, foi muito mais disputada, mas Mario Götze acabou definindo o encontro a favor da Alemanha com um belo chute de primeira na prorrogação.
        </p>`
        container_resumo3.innerHTML += `
        <p>
        O artilheiro foi James Rodríguez, da seleção da Colômbia, com 6 gols marcados durante o torneio.
        Alguns dos jogadores mais destacados da Copa de 2014 incluíram nomes como o melhor jogador do torneio  Lionel Messi(Argentina),Müller (Alemanha), Neuer (Alemanha), Oscar (Brasil), entre outros.
        </p>
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo4.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> 
        <p>A Copa do Mundo de 2022 foi realizada no Catar, marcando a primeira vez que o torneio foi realizado no Oriente Médio. O evento foi único não apenas por sua localização, mas também por ser realizado no final do ano, devido às altas temperaturas durante os meses de verão no Catar.

        A competição contou com 32 equipes nacionais de futebol de todo o mundo, competindo em uma série de estádios modernos, muitos dos quais foram construídos especialmente para o evento.
        
        A seleção da França emergiu como campeã, conquistando seu segundo título mundial, após uma emocionante final contra a seleção da Argentina. O jogo foi decidido nos pênaltis, com a França prevalecendo por uma margem estreita.
        
        Além do sucesso esportivo, a Copa do Mundo de 2022 foi notável por sua ênfase na sustentabilidade e nas questões sociais, com o Catar implementando várias iniciativas para minimizar o impacto ambiental do torneio e abordar preocupações sobre direitos humanos e condições de trabalho.</p>`
    } else if (ano == '2010') {
        container_titulo_copa.innerHTML += `<h1>Copa do Mundo de ${ano}</h1>`
        container_resumo1.innerHTML += `
        <p>A Copa do Mundo de 2022 foi realizada no Catar, marcando a primeira vez que o torneio foi realizado no Oriente Médio. O evento foi único não apenas por sua localização, mas também por ser realizado no final do ano, devido às altas temperaturas durante os meses de verão no Catar.

        A competição contou com 32 equipes nacionais de futebol de todo o mundo, competindo em uma série de estádios modernos, muitos dos quais foram construídos especialmente para o evento.
        
        A seleção da França emergiu como campeã, conquistando seu segundo título mundial, após uma emocionante final contra a seleção da Argentina. O jogo foi decidido nos pênaltis, com a França prevalecendo por uma margem estreita.
        
        Além do sucesso esportivo, a Copa do Mundo de 2010 foi notável por sua ênfase na sustentabilidade e nas questões sociais, com o Catar implementando várias iniciativas para minimizar o impacto ambiental do torneio e abordar preocupações sobre direitos humanos e condições de trabalho.</p>
    
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo2.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022">   
        <p>
        Esse também foi o resultado que permitiu à Fúria derrotar a Holanda na decisão em Joanesburgo, com um grande gol de Iniesta a quatro minutos do fim da prorrogação, que garantiu o primeiro triunfo espanhol na Copa do Mundo.
       </p>`
       container_resumo3.innerHTML += `
        <p>
        Os artilheiro foram:Thomas Müller(Alemanha), o David Villa(Espanha), o Wesley Sneijder(Holanda) e Diego Forlán (Uruguai), com 5 gols cada.
        Alguns dos jogadores mais destacados da Copa de 2010 incluíram nomes como o melhor jogador do torneio   Iniesta (Espanha),Carles Puyol (Espanha), Lahm (Alemanha), entre outros.
        </p>
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo4.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> 
        <p>A Copa do Mundo de 2022 foi realizada no Catar, marcando a primeira vez que o torneio foi realizado no Oriente Médio. O evento foi único não apenas por sua localização, mas também por ser realizado no final do ano, devido às altas temperaturas durante os meses de verão no Catar.

        A competição contou com 32 equipes nacionais de futebol de todo o mundo, competindo em uma série de estádios modernos, muitos dos quais foram construídos especialmente para o evento.
        
        A seleção da França emergiu como campeã, conquistando seu segundo título mundial, após uma emocionante final contra a seleção da Argentina. O jogo foi decidido nos pênaltis, com a França prevalecendo por uma margem estreita.
        
        Além do sucesso esportivo, a Copa do Mundo de 2022 foi notável por sua ênfase na sustentabilidade e nas questões sociais, com o Catar implementando várias iniciativas para minimizar o impacto ambiental do torneio e abordar preocupações sobre direitos humanos e condições de trabalho.</p>`
    } else if (ano == '2006') {
        container_titulo_copa.innerHTML += `<h1>Copa do Mundo de ${ano}</h1>`
        container_resumo1.innerHTML += `
        <p>A Copa do Mundo de 2022 foi realizada no Catar, marcando a primeira vez que o torneio foi realizado no Oriente Médio. O evento foi único não apenas por sua localização, mas também por ser realizado no final do ano, devido às altas temperaturas durante os meses de verão no Catar.

        A competição contou com 32 equipes nacionais de futebol de todo o mundo, competindo em uma série de estádios modernos, muitos dos quais foram construídos especialmente para o evento.
        
        A seleção da França emergiu como campeã, conquistando seu segundo título mundial, após uma emocionante final contra a seleção da Argentina. O jogo foi decidido nos pênaltis, com a França prevalecendo por uma margem estreita.
        
        Além do sucesso esportivo, a Copa do Mundo de 2006 foi notável por sua ênfase na sustentabilidade e nas questões sociais, com o Catar implementando várias iniciativas para minimizar o impacto ambiental do torneio e abordar preocupações sobre direitos humanos e condições de trabalho.</p>
    
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo2.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022">   
        <p>
        A França aguardava na final e, depois de sair perdendo com o pênalti convertido por Zidane, a Itália empatou com o cabeceio de Marco Materazzi. Os dois autores dos gols acabaram se envolvendo no momento mais lembrado do encontro, quando o francês foi expulso já na prorrogação ao acertar uma cabeçada no zagueiro italiano.
        O placar se manteve em 1 a 1 após os 120 minutos mas a Itália acabou se sagrando campeã.
       </p>`
        container_resumo3.innerHTML += `
        <p>
        O artilheiro foi Miroslav Klose, da seleção da Alemanha, com 5 gols marcados durante o torneio.
        Alguns dos jogadores mais destacados da Copa de 2006 incluíram nomes como Zidane(França),Cannavaro (Itália), Pirlo  (Itália), entre outros.
        </p>
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo4.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> 
        <p>A Copa do Mundo de 2022 foi realizada no Catar, marcando a primeira vez que o torneio foi realizado no Oriente Médio. O evento foi único não apenas por sua localização, mas também por ser realizado no final do ano, devido às altas temperaturas durante os meses de verão no Catar.

        A competição contou com 32 equipes nacionais de futebol de todo o mundo, competindo em uma série de estádios modernos, muitos dos quais foram construídos especialmente para o evento.
        
        A seleção da França emergiu como campeã, conquistando seu segundo título mundial, após uma emocionante final contra a seleção da Argentina. O jogo foi decidido nos pênaltis, com a França prevalecendo por uma margem estreita.
        
        Além do sucesso esportivo, a Copa do Mundo de 2022 foi notável por sua ênfase na sustentabilidade e nas questões sociais, com o Catar implementando várias iniciativas para minimizar o impacto ambiental do torneio e abordar preocupações sobre direitos humanos e condições de trabalho.</p>`
    } else if (ano == '2002') {
        container_titulo_copa.innerHTML += `<h1>Copa do Mundo de ${ano}</h1>`
        container_resumo1.innerHTML += `
        <p>A Copa do Mundo de 2022 foi realizada no Catar, marcando a primeira vez que o torneio foi realizado no Oriente Médio. O evento foi único não apenas por sua localização, mas também por ser realizado no final do ano, devido às altas temperaturas durante os meses de verão no Catar.

        A competição contou com 32 equipes nacionais de futebol de todo o mundo, competindo em uma série de estádios modernos, muitos dos quais foram construídos especialmente para o evento.
        
        A seleção da França emergiu como campeã, conquistando seu segundo título mundial, após uma emocionante final contra a seleção da Argentina. O jogo foi decidido nos pênaltis, com a França prevalecendo por uma margem estreita.
        
        Além do sucesso esportivo, a Copa do Mundo de 2022 foi notável por sua ênfase na sustentabilidade e nas questões sociais, com o Catar implementando várias iniciativas para minimizar o impacto ambiental do torneio e abordar preocupações sobre direitos humanos e condições de trabalho.</p>
    
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo2.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022">   
        <p>
         Brasil voltou ao ponto mais alto do pódio quando a competição se deslocou até o Extremo Oriente pela primeira vez, com Ronaldo.Foi ele quem decidiu na final contra a Alemanha, fazendo os dois gols da vitória brasileira por 2 a 0, que valeram o pentacampeonato
        </p>`
        container_resumo3.innerHTML += `
        <p>
        O artilheiro foi Ronaldo, da seleção do Brasil, com 8 gols marcados durante o torneio.
        Alguns dos jogadores mais destacados da Copa de 2002 incluíram nomes como Oliver Kahn(Alemanha), Hong Myung-bo (Coreia do Sul), Neuer (Alemanha), Rivaldo (Brasil), entre outros.
        </p>
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo4.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> 
        <p>A Copa do Mundo de 2022 foi realizada no Catar, marcando a primeira vez que o torneio foi realizado no Oriente Médio. O evento foi único não apenas por sua localização, mas também por ser realizado no final do ano, devido às altas temperaturas durante os meses de verão no Catar.

        A competição contou com 32 equipes nacionais de futebol de todo o mundo, competindo em uma série de estádios modernos, muitos dos quais foram construídos especialmente para o evento.
        
        A seleção da França emergiu como campeã, conquistando seu segundo título mundial, após uma emocionante final contra a seleção da Argentina. O jogo foi decidido nos pênaltis, com a França prevalecendo por uma margem estreita.
        
        Além do sucesso esportivo, a Copa do Mundo de 2022 foi notável por sua ênfase na sustentabilidade e nas questões sociais, com o Catar implementando várias iniciativas para minimizar o impacto ambiental do torneio e abordar preocupações sobre direitos humanos e condições de trabalho.</p>`
    } else if (ano == '1998') {
        container_titulo_copa.innerHTML += `<h1>Copa do Mundo de ${ano}</h1>`
        container_resumo1.innerHTML += `
        <p>A Copa do Mundo de 2022 foi realizada no Catar, marcando a primeira vez que o torneio foi realizado no Oriente Médio. O evento foi único não apenas por sua localização, mas também por ser realizado no final do ano, devido às altas temperaturas durante os meses de verão no Catar.

        A competição contou com 32 equipes nacionais de futebol de todo o mundo, competindo em uma série de estádios modernos, muitos dos quais foram construídos especialmente para o evento.
        
        A seleção da França emergiu como campeã, conquistando seu segundo título mundial, após uma emocionante final contra a seleção da Argentina. O jogo foi decidido nos pênaltis, com a França prevalecendo por uma margem estreita.
        
        Além do sucesso esportivo, a Copa do Mundo de 2022 foi notável por sua ênfase na sustentabilidade e nas questões sociais, com o Catar implementando várias iniciativas para minimizar o impacto ambiental do torneio e abordar preocupações sobre direitos humanos e condições de trabalho.</p>
    
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo2.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022">   
        <p>
        Inspirada por Zinédine Zidane, a França saiu vitoriosa do torneio disputado em casa, conquistando sua primeira Copa do Mundo diante do então campeão Brasil.Assim, outro craque global roubou a cena: Zidane marcou dois gols e a França venceu por 3 a 0.
        </p>`
        container_resumo3.innerHTML += `
        <p>
        O artilheiro foi Davor Šuker, da seleção do Croácia, com 6 gols marcados durante o torneio.
        Alguns dos jogadores mais destacados da Copa de 1998 incluíram nomes como Ronaldo(Brasil), Lilian Thuram (França), entre outros.
        </p>
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo4.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> 
        <p>A Copa do Mundo de 2022 foi realizada no Catar, marcando a primeira vez que o torneio foi realizado no Oriente Médio. O evento foi único não apenas por sua localização, mas também por ser realizado no final do ano, devido às altas temperaturas durante os meses de verão no Catar.

        A competição contou com 32 equipes nacionais de futebol de todo o mundo, competindo em uma série de estádios modernos, muitos dos quais foram construídos especialmente para o evento.
        
        A seleção da França emergiu como campeã, conquistando seu segundo título mundial, após uma emocionante final contra a seleção da Argentina. O jogo foi decidido nos pênaltis, com a França prevalecendo por uma margem estreita.
        
        Além do sucesso esportivo, a Copa do Mundo de 2022 foi notável por sua ênfase na sustentabilidade e nas questões sociais, com o Catar implementando várias iniciativas para minimizar o impacto ambiental do torneio e abordar preocupações sobre direitos humanos e condições de trabalho.</p>`
    } else if (ano == '1994') {
        container_titulo_copa.innerHTML += `<h1>Copa do Mundo de ${ano}</h1>`
        container_resumo1.innerHTML += `
        <p>A Copa do Mundo de 2022 foi realizada no Catar, marcando a primeira vez que o torneio foi realizado no Oriente Médio. O evento foi único não apenas por sua localização, mas também por ser realizado no final do ano, devido às altas temperaturas durante os meses de verão no Catar.

        A competição contou com 32 equipes nacionais de futebol de todo o mundo, competindo em uma série de estádios modernos, muitos dos quais foram construídos especialmente para o evento.
        
        A seleção da França emergiu como campeã, conquistando seu segundo título mundial, após uma emocionante final contra a seleção da Argentina. O jogo foi decidido nos pênaltis, com a França prevalecendo por uma margem estreita.
        
        Além do sucesso esportivo, a Copa do Mundo de 2022 foi notável por sua ênfase na sustentabilidade e nas questões sociais, com o Catar implementando várias iniciativas para minimizar o impacto ambiental do torneio e abordar preocupações sobre direitos humanos e condições de trabalho.</p>
    
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo2.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022">   
        <p>
        O Brasil venceu a Itália na primeira final decidida nos pênaltis. Foi uma partida bastante cautelosa que terminou sem gols após a prorrogação. E aí os brasileiros venceram a disputa quando o ídolo italiano Roberto Baggio chutou sua cobrança por cima do travessão.
        </p>`
        container_resumo3.innerHTML += `
        <p>
        O artilheiro foram Hristo Stoichkov (Bulgária), Oleg Salenko (Rússia), com 6 gols marcados durante o torneio.
        Alguns dos jogadores mais destacados da Copa de 1994 incluíram nomes como Romário(Brasil), Roberto Baggio (Itália), entre outros.
        </p>
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo4.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> 
        <p>A Copa do Mundo de 2022 foi realizada no Catar, marcando a primeira vez que o torneio foi realizado no Oriente Médio. O evento foi único não apenas por sua localização, mas também por ser realizado no final do ano, devido às altas temperaturas durante os meses de verão no Catar.

        A competição contou com 32 equipes nacionais de futebol de todo o mundo, competindo em uma série de estádios modernos, muitos dos quais foram construídos especialmente para o evento.
        
        A seleção da França emergiu como campeã, conquistando seu segundo título mundial, após uma emocionante final contra a seleção da Argentina. O jogo foi decidido nos pênaltis, com a França prevalecendo por uma margem estreita.
        
        Além do sucesso esportivo, a Copa do Mundo de 2022 foi notável por sua ênfase na sustentabilidade e nas questões sociais, com o Catar implementando várias iniciativas para minimizar o impacto ambiental do torneio e abordar preocupações sobre direitos humanos e condições de trabalho.</p>`
    } else if (ano == '1990') {
        container_titulo_copa.innerHTML += `<h1>Copa do Mundo de ${ano}</h1>`
        container_resumo1.innerHTML += `
        <p>A Copa do Mundo de 2022 foi realizada no Catar, marcando a primeira vez que o torneio foi realizado no Oriente Médio. O evento foi único não apenas por sua localização, mas também por ser realizado no final do ano, devido às altas temperaturas durante os meses de verão no Catar.

        A competição contou com 32 equipes nacionais de futebol de todo o mundo, competindo em uma série de estádios modernos, muitos dos quais foram construídos especialmente para o evento.
        
        A seleção da França emergiu como campeã, conquistando seu segundo título mundial, após uma emocionante final contra a seleção da Argentina. O jogo foi decidido nos pênaltis, com a França prevalecendo por uma margem estreita.
        
        Além do sucesso esportivo, a Copa do Mundo de 2022 foi notável por sua ênfase na sustentabilidade e nas questões sociais, com o Catar implementando várias iniciativas para minimizar o impacto ambiental do torneio e abordar preocupações sobre direitos humanos e condições de trabalho.</p>
    
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo2.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022">   
        <p>
        Uma acirrada e combativa final, em que os argentinos Gustavo Dezotti e Pedro Monzón foram expulsos, foi decidida com uma cobrança da marca dos 11 metros convertida por Andreas Brehme aos 40 do segundo tempo, o que deu o tricampeonato aos alemães.
        </p>`
        container_resumo3.innerHTML += `
        <p>
        O artilheiro foi Salvatore Schillaci (Itália), com 6 gols marcados durante o torneio.
        Alguns dos jogadores mais destacados da Copa de 1990 incluíram nomes como Maradona(Argentina), Lothar Matthäus (Alemanha), entre outros.
        </p>
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo4.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> 
        <p>A Copa do Mundo de 2022 foi realizada no Catar, marcando a primeira vez que o torneio foi realizado no Oriente Médio. O evento foi único não apenas por sua localização, mas também por ser realizado no final do ano, devido às altas temperaturas durante os meses de verão no Catar.

        A competição contou com 32 equipes nacionais de futebol de todo o mundo, competindo em uma série de estádios modernos, muitos dos quais foram construídos especialmente para o evento.
        
        A seleção da França emergiu como campeã, conquistando seu segundo título mundial, após uma emocionante final contra a seleção da Argentina. O jogo foi decidido nos pênaltis, com a França prevalecendo por uma margem estreita.
        
        Além do sucesso esportivo, a Copa do Mundo de 2022 foi notável por sua ênfase na sustentabilidade e nas questões sociais, com o Catar implementando várias iniciativas para minimizar o impacto ambiental do torneio e abordar preocupações sobre direitos humanos e condições de trabalho.</p>`
    } else if (ano == '1986') {
        container_titulo_copa.innerHTML += `<h1>Copa do Mundo de ${ano}</h1>`
        container_resumo1.innerHTML += `
        <p>A Copa do Mundo de 2022 foi realizada no Catar, marcando a primeira vez que o torneio foi realizado no Oriente Médio. O evento foi único não apenas por sua localização, mas também por ser realizado no final do ano, devido às altas temperaturas durante os meses de verão no Catar.

        A competição contou com 32 equipes nacionais de futebol de todo o mundo, competindo em uma série de estádios modernos, muitos dos quais foram construídos especialmente para o evento.
        
        A seleção da França emergiu como campeã, conquistando seu segundo título mundial, após uma emocionante final contra a seleção da Argentina. O jogo foi decidido nos pênaltis, com a França prevalecendo por uma margem estreita.
        
        Além do sucesso esportivo, a Copa do Mundo de 2022 foi notável por sua ênfase na sustentabilidade e nas questões sociais, com o Catar implementando várias iniciativas para minimizar o impacto ambiental do torneio e abordar preocupações sobre direitos humanos e condições de trabalho.</p>
    
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo2.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022">   
        <p>
         A Argentina venceu os alemães por 3 a 2 em uma final eletrizante. A Alemanha empatou depois de sair perdendo por 2 a 0, mas, a sete minutos do fim, Jorge Burruchaga deu o bicampeonato para o Alviceleste.
        </p>`
         container_resumo3.innerHTML += `
        <p>
        O artilheiro foi  Gary Lineker (Inglaterra), com 6 gols marcados durante o torneio.
        Alguns dos jogadores mais destacados da Copa de 1986 incluíram nomes como Diego Maradona(Argentina), Harald Schumacher (Alemanha), Larsen (Dinamarca), entre outros.
        </p>
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo4.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> 
        <p>A Copa do Mundo de 2022 foi realizada no Catar, marcando a primeira vez que o torneio foi realizado no Oriente Médio. O evento foi único não apenas por sua localização, mas também por ser realizado no final do ano, devido às altas temperaturas durante os meses de verão no Catar.

        A competição contou com 32 equipes nacionais de futebol de todo o mundo, competindo em uma série de estádios modernos, muitos dos quais foram construídos especialmente para o evento.
        
        A seleção da França emergiu como campeã, conquistando seu segundo título mundial, após uma emocionante final contra a seleção da Argentina. O jogo foi decidido nos pênaltis, com a França prevalecendo por uma margem estreita.
        
        Além do sucesso esportivo, a Copa do Mundo de 2022 foi notável por sua ênfase na sustentabilidade e nas questões sociais, com o Catar implementando várias iniciativas para minimizar o impacto ambiental do torneio e abordar preocupações sobre direitos humanos e condições de trabalho.</p>`
    } else if (ano == '1982') {
        container_titulo_copa.innerHTML += `<h1>Copa do Mundo de ${ano}</h1>`
        container_resumo1.innerHTML += `
        <p>A Copa do Mundo de 2022 foi realizada no Catar, marcando a primeira vez que o torneio foi realizado no Oriente Médio. O evento foi único não apenas por sua localização, mas também por ser realizado no final do ano, devido às altas temperaturas durante os meses de verão no Catar.

        A competição contou com 32 equipes nacionais de futebol de todo o mundo, competindo em uma série de estádios modernos, muitos dos quais foram construídos especialmente para o evento.
        
        A seleção da França emergiu como campeã, conquistando seu segundo título mundial, após uma emocionante final contra a seleção da Argentina. O jogo foi decidido nos pênaltis, com a França prevalecendo por uma margem estreita.
        
        Além do sucesso esportivo, a Copa do Mundo de 2022 foi notável por sua ênfase na sustentabilidade e nas questões sociais, com o Catar implementando várias iniciativas para minimizar o impacto ambiental do torneio e abordar preocupações sobre direitos humanos e condições de trabalho.</p>
    
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo2.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022">   
        <p>
         A final foi disputada em Madri, e a Itália conquistou seu terceiro título mundial ao derrotar a Alemanha Ocidental por 3 a 1.
        </p>`
        container_resumo3.innerHTML += `
        <p>
        O artilheiro foi Paolo Rossi (Itália), com 6 gols marcados durante o torneio.
        Alguns dos jogadores mais destacados da Copa de 1982 incluíram nomes como Falcão, Rummenigge, entre outros.
        </p>
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo4.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> 
        <p>A Copa do Mundo de 2022 foi realizada no Catar, marcando a primeira vez que o torneio foi realizado no Oriente Médio. O evento foi único não apenas por sua localização, mas também por ser realizado no final do ano, devido às altas temperaturas durante os meses de verão no Catar.

        A competição contou com 32 equipes nacionais de futebol de todo o mundo, competindo em uma série de estádios modernos, muitos dos quais foram construídos especialmente para o evento.
        
        A seleção da França emergiu como campeã, conquistando seu segundo título mundial, após uma emocionante final contra a seleção da Argentina. O jogo foi decidido nos pênaltis, com a França prevalecendo por uma margem estreita.
        
        Além do sucesso esportivo, a Copa do Mundo de 2022 foi notável por sua ênfase na sustentabilidade e nas questões sociais, com o Catar implementando várias iniciativas para minimizar o impacto ambiental do torneio e abordar preocupações sobre direitos humanos e condições de trabalho.</p>`
    } else if (ano == '1978') {
        container_titulo_copa.innerHTML += `<h1>Copa do Mundo de ${ano}</h1>`
        container_resumo1.innerHTML += `
        <p>A Copa do Mundo de 2022 foi realizada no Catar, marcando a primeira vez que o torneio foi realizado no Oriente Médio. O evento foi único não apenas por sua localização, mas também por ser realizado no final do ano, devido às altas temperaturas durante os meses de verão no Catar.

        A competição contou com 32 equipes nacionais de futebol de todo o mundo, competindo em uma série de estádios modernos, muitos dos quais foram construídos especialmente para o evento.
        
        A seleção da França emergiu como campeã, conquistando seu segundo título mundial, após uma emocionante final contra a seleção da Argentina. O jogo foi decidido nos pênaltis, com a França prevalecendo por uma margem estreita.
        
        Além do sucesso esportivo, a Copa do Mundo de 2022 foi notável por sua ênfase na sustentabilidade e nas questões sociais, com o Catar implementando várias iniciativas para minimizar o impacto ambiental do torneio e abordar preocupações sobre direitos humanos e condições de trabalho.</p>
    
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo2.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022">   
        <p>
        A Argentina conquistou seu primeiro título mundial ao vencer a Holanda por 3 a 1 na prorrogação, com gols marcados por Mario Kempes, com a final sendo disputada em Buenos Aires
        </p>`
        container_resumo3.innerHTML += `
        <p>
        O artilheiro foi Mario Kempes (Argentina), com 6 gols marcados durante o torneio.
        Alguns dos jogadores mais destacados da Copa de 1978 incluíram nomes como Paolo Rossi (Itália), Dirceu (Brasil), entre outros.
        </p>
         <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo4.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> 
        <p>A Copa do Mundo de 2022 foi realizada no Catar, marcando a primeira vez que o torneio foi realizado no Oriente Médio. O evento foi único não apenas por sua localização, mas também por ser realizado no final do ano, devido às altas temperaturas durante os meses de verão no Catar.

        A competição contou com 32 equipes nacionais de futebol de todo o mundo, competindo em uma série de estádios modernos, muitos dos quais foram construídos especialmente para o evento.
        
        A seleção da França emergiu como campeã, conquistando seu segundo título mundial, após uma emocionante final contra a seleção da Argentina. O jogo foi decidido nos pênaltis, com a França prevalecendo por uma margem estreita.
        
        Além do sucesso esportivo, a Copa do Mundo de 2022 foi notável por sua ênfase na sustentabilidade e nas questões sociais, com o Catar implementando várias iniciativas para minimizar o impacto ambiental do torneio e abordar preocupações sobre direitos humanos e condições de trabalho.</p>`
    } else if (ano == '1974') {
        container_titulo_copa.innerHTML += `<h1>Copa do Mundo de ${ano}</h1>`
        container_resumo1.innerHTML += `
        <p>A Copa do Mundo de 2022 foi realizada no Catar, marcando a primeira vez que o torneio foi realizado no Oriente Médio. O evento foi único não apenas por sua localização, mas também por ser realizado no final do ano, devido às altas temperaturas durante os meses de verão no Catar.

        A competição contou com 32 equipes nacionais de futebol de todo o mundo, competindo em uma série de estádios modernos, muitos dos quais foram construídos especialmente para o evento.
        
        A seleção da França emergiu como campeã, conquistando seu segundo título mundial, após uma emocionante final contra a seleção da Argentina. O jogo foi decidido nos pênaltis, com a França prevalecendo por uma margem estreita.
        
        Além do sucesso esportivo, a Copa do Mundo de 2022 foi notável por sua ênfase na sustentabilidade e nas questões sociais, com o Catar implementando várias iniciativas para minimizar o impacto ambiental do torneio e abordar preocupações sobre direitos humanos e condições de trabalho.</p>
    
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo2.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022">   
        <p>
        A final foi realizada em Munique, e a Alemanha Ocidental conquistou seu segundo título ao derrotar a Holanda por 2 a 1, em uma partida intensamente disputada.
        </p>`
        container_resumo3.innerHTML += `
        <p>
        O artilheiro foi Grzegorz Lato (Polônia), com 7 gols marcados durante o torneio.
        Alguns dos jogadores mais destacados da Copa de 1974 incluíram nomes como Cruyff (Holanda),Beckenbauer (Alemanha), Deyna (Polônia), entre outros.
        </p>
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo4.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> 
        <p>A Copa do Mundo de 2022 foi realizada no Catar, marcando a primeira vez que o torneio foi realizado no Oriente Médio. O evento foi único não apenas por sua localização, mas também por ser realizado no final do ano, devido às altas temperaturas durante os meses de verão no Catar.

        A competição contou com 32 equipes nacionais de futebol de todo o mundo, competindo em uma série de estádios modernos, muitos dos quais foram construídos especialmente para o evento.
        
        A seleção da França emergiu como campeã, conquistando seu segundo título mundial, após uma emocionante final contra a seleção da Argentina. O jogo foi decidido nos pênaltis, com a França prevalecendo por uma margem estreita.
        
        Além do sucesso esportivo, a Copa do Mundo de 2022 foi notável por sua ênfase na sustentabilidade e nas questões sociais, com o Catar implementando várias iniciativas para minimizar o impacto ambiental do torneio e abordar preocupações sobre direitos humanos e condições de trabalho.</p>`
    } else if (ano == '1970') {
        container_titulo_copa.innerHTML += `<h1>Copa do Mundo de ${ano}</h1>`
        container_resumo1.innerHTML += `
        <p>A Copa do Mundo de 2022 foi realizada no Catar, marcando a primeira vez que o torneio foi realizado no Oriente Médio. O evento foi único não apenas por sua localização, mas também por ser realizado no final do ano, devido às altas temperaturas durante os meses de verão no Catar.

        A competição contou com 32 equipes nacionais de futebol de todo o mundo, competindo em uma série de estádios modernos, muitos dos quais foram construídos especialmente para o evento.
        
        A seleção da França emergiu como campeã, conquistando seu segundo título mundial, após uma emocionante final contra a seleção da Argentina. O jogo foi decidido nos pênaltis, com a França prevalecendo por uma margem estreita.
        
        Além do sucesso esportivo, a Copa do Mundo de 2022 foi notável por sua ênfase na sustentabilidade e nas questões sociais, com o Catar implementando várias iniciativas para minimizar o impacto ambiental do torneio e abordar preocupações sobre direitos humanos e condições de trabalho.</p>
    
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo2.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022">   
        <p>
        A final foi disputada na Cidade do México, e o Brasil conquistou seu terceiro título ao derrotar a Itália por 4 a 1, em uma das finais mais memoráveis, com um desempenho brilhante de Pelé e Carlos Alberto Torres.
        </p>`
        container_resumo3.innerHTML += `
        <p>
        O artilheiro foi Gerd Müller (Alemanha), com 10 gols marcados durante o torneio.
        Alguns dos jogadores mais destacados da Copa de 1970 incluíram nomes como Gerson(Brasil), Gerd Müller (Alemanha), entre outros.
        </p>
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo4.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> 
        <p>A Copa do Mundo de 2022 foi realizada no Catar, marcando a primeira vez que o torneio foi realizado no Oriente Médio. O evento foi único não apenas por sua localização, mas também por ser realizado no final do ano, devido às altas temperaturas durante os meses de verão no Catar.

        A competição contou com 32 equipes nacionais de futebol de todo o mundo, competindo em uma série de estádios modernos, muitos dos quais foram construídos especialmente para o evento.
        
        A seleção da França emergiu como campeã, conquistando seu segundo título mundial, após uma emocionante final contra a seleção da Argentina. O jogo foi decidido nos pênaltis, com a França prevalecendo por uma margem estreita.
        
        Além do sucesso esportivo, a Copa do Mundo de 2022 foi notável por sua ênfase na sustentabilidade e nas questões sociais, com o Catar implementando várias iniciativas para minimizar o impacto ambiental do torneio e abordar preocupações sobre direitos humanos e condições de trabalho.</p>`
    } else if (ano == '1966') {
        container_titulo_copa.innerHTML += `<h1>Copa do Mundo de ${ano}</h1>`
        container_resumo1.innerHTML += `
        <p>A Copa do Mundo de 2022 foi realizada no Catar, marcando a primeira vez que o torneio foi realizado no Oriente Médio. O evento foi único não apenas por sua localização, mas também por ser realizado no final do ano, devido às altas temperaturas durante os meses de verão no Catar.

        A competição contou com 32 equipes nacionais de futebol de todo o mundo, competindo em uma série de estádios modernos, muitos dos quais foram construídos especialmente para o evento.
        
        A seleção da França emergiu como campeã, conquistando seu segundo título mundial, após uma emocionante final contra a seleção da Argentina. O jogo foi decidido nos pênaltis, com a França prevalecendo por uma margem estreita.
        
        Além do sucesso esportivo, a Copa do Mundo de 2022 foi notável por sua ênfase na sustentabilidade e nas questões sociais, com o Catar implementando várias iniciativas para minimizar o impacto ambiental do torneio e abordar preocupações sobre direitos humanos e condições de trabalho.</p>
    
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo2.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022">   
        <p>
        O resultado da final dessa edição foi entre Inglaterra 4-2 Alemanha Ocidental (após prorrogação).
A final foi disputada em Londres, no Estádio de Wembley, e é lembrada pelo polêmico gol de Geoff Hurst na prorrogação, que ainda é discutido se a bola cruzou totalmente a linha do gol.
        </p>`
         container_resumo3.innerHTML += `
        <p>
        O artilheiro foi Euzébio (Portugal), com 9 gols marcados durante o torneio.
        Alguns dos jogadores mais destacados da Copa de 1966 incluíram nomes como Bobby Charlton(Inglaterra), Bobby Moore (Inglaterra), entre outros.
        </p>
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo4.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> 
        <p>A Copa do Mundo de 2022 foi realizada no Catar, marcando a primeira vez que o torneio foi realizado no Oriente Médio. O evento foi único não apenas por sua localização, mas também por ser realizado no final do ano, devido às altas temperaturas durante os meses de verão no Catar.

        A competição contou com 32 equipes nacionais de futebol de todo o mundo, competindo em uma série de estádios modernos, muitos dos quais foram construídos especialmente para o evento.
        
        A seleção da França emergiu como campeã, conquistando seu segundo título mundial, após uma emocionante final contra a seleção da Argentina. O jogo foi decidido nos pênaltis, com a França prevalecendo por uma margem estreita.
        
        Além do sucesso esportivo, a Copa do Mundo de 2022 foi notável por sua ênfase na sustentabilidade e nas questões sociais, com o Catar implementando várias iniciativas para minimizar o impacto ambiental do torneio e abordar preocupações sobre direitos humanos e condições de trabalho.</p>`
    } else if (ano == '1962') {
        container_titulo_copa.innerHTML += `<h1>Copa do Mundo de ${ano}</h1>`
        container_resumo1.innerHTML += `
        <p>A Copa do Mundo de 2022 foi realizada no Catar, marcando a primeira vez que o torneio foi realizado no Oriente Médio. O evento foi único não apenas por sua localização, mas também por ser realizado no final do ano, devido às altas temperaturas durante os meses de verão no Catar.

        A competição contou com 32 equipes nacionais de futebol de todo o mundo, competindo em uma série de estádios modernos, muitos dos quais foram construídos especialmente para o evento.
        
        A seleção da França emergiu como campeã, conquistando seu segundo título mundial, após uma emocionante final contra a seleção da Argentina. O jogo foi decidido nos pênaltis, com a França prevalecendo por uma margem estreita.
        
        Além do sucesso esportivo, a Copa do Mundo de 2022 foi notável por sua ênfase na sustentabilidade e nas questões sociais, com o Catar implementando várias iniciativas para minimizar o impacto ambiental do torneio e abordar preocupações sobre direitos humanos e condições de trabalho.</p>
    
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo2.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022">   
        <p>
        O Brasil conquistou seu Bi campeonato consecutivo, batendo a  Tchecoslováquia por 3-1 em Santiago.
        </p>`
         container_resumo3.innerHTML += `
        <p>
        O artilheiro foram Garrincha (Brasil), Vavá (Brasil), Leonel Sánchez (Chile), Flórián Albert (Hungria), Dražan Jerković (Iugoslávia), Valentin Ivanov (URSS), com 4 gols cada.
        Alguns dos jogadores mais destacados da Copa de 1962 incluíram nomes como Masopust(Tchecoslováquia), Leonel Sánchez (Chile), entre outros.
        </p>
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo4.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> 
        <p>A Copa do Mundo de 2022 foi realizada no Catar, marcando a primeira vez que o torneio foi realizado no Oriente Médio. O evento foi único não apenas por sua localização, mas também por ser realizado no final do ano, devido às altas temperaturas durante os meses de verão no Catar.

        A competição contou com 32 equipes nacionais de futebol de todo o mundo, competindo em uma série de estádios modernos, muitos dos quais foram construídos especialmente para o evento.
        
        A seleção da França emergiu como campeã, conquistando seu segundo título mundial, após uma emocionante final contra a seleção da Argentina. O jogo foi decidido nos pênaltis, com a França prevalecendo por uma margem estreita.
        
        Além do sucesso esportivo, a Copa do Mundo de 2022 foi notável por sua ênfase na sustentabilidade e nas questões sociais, com o Catar implementando várias iniciativas para minimizar o impacto ambiental do torneio e abordar preocupações sobre direitos humanos e condições de trabalho.</p>`
    } else if (ano == '1958') {
        container_titulo_copa.innerHTML += `<h1>Copa do Mundo de ${ano}</h1>`
        container_resumo1.innerHTML += `
        <p>A Copa do Mundo de 2022 foi realizada no Catar, marcando a primeira vez que o torneio foi realizado no Oriente Médio. O evento foi único não apenas por sua localização, mas também por ser realizado no final do ano, devido às altas temperaturas durante os meses de verão no Catar.

        A competição contou com 32 equipes nacionais de futebol de todo o mundo, competindo em uma série de estádios modernos, muitos dos quais foram construídos especialmente para o evento.
        
        A seleção da França emergiu como campeã, conquistando seu segundo título mundial, após uma emocionante final contra a seleção da Argentina. O jogo foi decidido nos pênaltis, com a França prevalecendo por uma margem estreita.
        
        Além do sucesso esportivo, a Copa do Mundo de 2022 foi notável por sua ênfase na sustentabilidade e nas questões sociais, com o Catar implementando várias iniciativas para minimizar o impacto ambiental do torneio e abordar preocupações sobre direitos humanos e condições de trabalho.</p>
    
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo2.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022">   
        <p>
        o Brasil conquistou seu primeiro título mundial ao derrotar a Suécia por 5 a 2.
        A final foi disputada em Estocolmo, com uma atuação brilhante de Pelé, que marcou dois gols na final.
        </p>`
         container_resumo3.innerHTML += `
        <p>
        O artilheiro foi Just Fontaine (França), com 9 gols marcados durante o torneio.
        Alguns dos jogadores mais destacados da Copa de 1958 incluíram nomes como Pelé(Brasil), Didi (Brasil), entre outros.
        </p>
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo4.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> 
        <p>A Copa do Mundo de 2022 foi realizada no Catar, marcando a primeira vez que o torneio foi realizado no Oriente Médio. O evento foi único não apenas por sua localização, mas também por ser realizado no final do ano, devido às altas temperaturas durante os meses de verão no Catar.

        A competição contou com 32 equipes nacionais de futebol de todo o mundo, competindo em uma série de estádios modernos, muitos dos quais foram construídos especialmente para o evento.
        
        A seleção da França emergiu como campeã, conquistando seu segundo título mundial, após uma emocionante final contra a seleção da Argentina. O jogo foi decidido nos pênaltis, com a França prevalecendo por uma margem estreita.
        
        Além do sucesso esportivo, a Copa do Mundo de 2022 foi notável por sua ênfase na sustentabilidade e nas questões sociais, com o Catar implementando várias iniciativas para minimizar o impacto ambiental do torneio e abordar preocupações sobre direitos humanos e condições de trabalho.</p>`
    } else if (ano == '1954') {
        container_titulo_copa.innerHTML += `<h1>Copa do Mundo de ${ano}</h1>`
        container_resumo1.innerHTML += `
        <p>A Copa do Mundo de 2022 foi realizada no Catar, marcando a primeira vez que o torneio foi realizado no Oriente Médio. O evento foi único não apenas por sua localização, mas também por ser realizado no final do ano, devido às altas temperaturas durante os meses de verão no Catar.

        A competição contou com 32 equipes nacionais de futebol de todo o mundo, competindo em uma série de estádios modernos, muitos dos quais foram construídos especialmente para o evento.
        
        A seleção da França emergiu como campeã, conquistando seu segundo título mundial, após uma emocionante final contra a seleção da Argentina. O jogo foi decidido nos pênaltis, com a França prevalecendo por uma margem estreita.
        
        Além do sucesso esportivo, a Copa do Mundo de 2022 foi notável por sua ênfase na sustentabilidade e nas questões sociais, com o Catar implementando várias iniciativas para minimizar o impacto ambiental do torneio e abordar preocupações sobre direitos humanos e condições de trabalho.</p>
    
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo2.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022">   
        <p>
        Campeão dessa edição foi a Alemanha Ocidental batendo a Hungria por 3-2 .
        A final foi disputada em Berna, e a Alemanha Ocidental conquistou seu primeiro título ao derrotar a favorita Hungria por 3 a 2, em uma virada surpreendente.
        </p>`
         container_resumo3.innerHTML += `
        <p>
        O artilheiro foi Sándor Kocsis (Hungria), com 11 gols marcados durante o torneio.
        Alguns dos jogadores mais destacados da Copa de 1954 incluíram nomes como Fritz Walter, Puskas, entre outros.
        </p>
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo4.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> 
        <p>A Copa do Mundo de 2022 foi realizada no Catar, marcando a primeira vez que o torneio foi realizado no Oriente Médio. O evento foi único não apenas por sua localização, mas também por ser realizado no final do ano, devido às altas temperaturas durante os meses de verão no Catar.

        A competição contou com 32 equipes nacionais de futebol de todo o mundo, competindo em uma série de estádios modernos, muitos dos quais foram construídos especialmente para o evento.
        
        A seleção da França emergiu como campeã, conquistando seu segundo título mundial, após uma emocionante final contra a seleção da Argentina. O jogo foi decidido nos pênaltis, com a França prevalecendo por uma margem estreita.
        
        Além do sucesso esportivo, a Copa do Mundo de 2022 foi notável por sua ênfase na sustentabilidade e nas questões sociais, com o Catar implementando várias iniciativas para minimizar o impacto ambiental do torneio e abordar preocupações sobre direitos humanos e condições de trabalho.</p>`
    } else if (ano == '1950') {
        container_titulo_copa.innerHTML += `<h1>Copa do Mundo de ${ano}</h1>`
        container_resumo1.innerHTML += `
        <p>A Copa do Mundo de 2022 foi realizada no Catar, marcando a primeira vez que o torneio foi realizado no Oriente Médio. O evento foi único não apenas por sua localização, mas também por ser realizado no final do ano, devido às altas temperaturas durante os meses de verão no Catar.

        A competição contou com 32 equipes nacionais de futebol de todo o mundo, competindo em uma série de estádios modernos, muitos dos quais foram construídos especialmente para o evento.
        
        A seleção da França emergiu como campeã, conquistando seu segundo título mundial, após uma emocionante final contra a seleção da Argentina. O jogo foi decidido nos pênaltis, com a França prevalecendo por uma margem estreita.
        
        Além do sucesso esportivo, a Copa do Mundo de 2022 foi notável por sua ênfase na sustentabilidade e nas questões sociais, com o Catar implementando várias iniciativas para minimizar o impacto ambiental do torneio e abordar preocupações sobre direitos humanos e condições de trabalho.</p>
    
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo2.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022">   
        <p>
        Campeão dessa edição foi a Uruguai por 2-1 no Brasil..
        Conhecida como "Maracanazo", esta final é uma das mais famosas da história das Copas do Mundo. O Brasil perdeu para o Uruguai por 2 a 1 no Estádio do Maracanã, no Rio de Janeiro, diante de mais de 200.000 espectadores, sofrendo um gol decisivo nos minutos finais.
        </p>`
        container_resumo3.innerHTML += `
        <p>
        O artilheiro foi Ademir Menezes (Brasil), com 9 gols marcados durante o torneio.
        Alguns dos jogadores mais destacados da Copa de 1950 incluíram nomes como Zizinho(Brasil), Schiaffino (Uruguai), Obdullo Varela (Uruguai), entre outros.
        </p>
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo4.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> 
        <p>A Copa do Mundo de 2022 foi realizada no Catar, marcando a primeira vez que o torneio foi realizado no Oriente Médio. O evento foi único não apenas por sua localização, mas também por ser realizado no final do ano, devido às altas temperaturas durante os meses de verão no Catar.

        A competição contou com 32 equipes nacionais de futebol de todo o mundo, competindo em uma série de estádios modernos, muitos dos quais foram construídos especialmente para o evento.
        
        A seleção da França emergiu como campeã, conquistando seu segundo título mundial, após uma emocionante final contra a seleção da Argentina. O jogo foi decidido nos pênaltis, com a França prevalecendo por uma margem estreita.
        
        Além do sucesso esportivo, a Copa do Mundo de 2022 foi notável por sua ênfase na sustentabilidade e nas questões sociais, com o Catar implementando várias iniciativas para minimizar o impacto ambiental do torneio e abordar preocupações sobre direitos humanos e condições de trabalho.</p>`
    } else if (ano == '1938') {
        container_titulo_copa.innerHTML += `<h1>Copa do Mundo de ${ano}</h1>`
        container_resumo1.innerHTML += `
        <p>A Copa do Mundo de 2022 foi realizada no Catar, marcando a primeira vez que o torneio foi realizado no Oriente Médio. O evento foi único não apenas por sua localização, mas também por ser realizado no final do ano, devido às altas temperaturas durante os meses de verão no Catar.

        A competição contou com 32 equipes nacionais de futebol de todo o mundo, competindo em uma série de estádios modernos, muitos dos quais foram construídos especialmente para o evento.
        
        A seleção da França emergiu como campeã, conquistando seu segundo título mundial, após uma emocionante final contra a seleção da Argentina. O jogo foi decidido nos pênaltis, com a França prevalecendo por uma margem estreita.
        
        Além do sucesso esportivo, a Copa do Mundo de 2022 foi notável por sua ênfase na sustentabilidade e nas questões sociais, com o Catar implementando várias iniciativas para minimizar o impacto ambiental do torneio e abordar preocupações sobre direitos humanos e condições de trabalho.</p>
    
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo2.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022">   
        <p>
        Campeão dessa edição foi a Itália por 4-2 na Hungria.
        Foi disputada entre Itália e Hungria. A Itália venceu a partida por 4x2 e ganhou a última Copa antes da Segunda Guerra Mundial.
        </p>`
        container_resumo3.innerHTML += `
        <p>
        O artilheiro foi Leônidas da Silva (Brasil), com 7 gols marcados durante o torneio.
        Alguns dos jogadores mais destacados da Copa de 1938 incluíram nomes como Silvio Piola (Itália), Sárosi (Hungria), entre outros.
        </p>
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo4.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> 
        <p>A Copa do Mundo de 2022 foi realizada no Catar, marcando a primeira vez que o torneio foi realizado no Oriente Médio. O evento foi único não apenas por sua localização, mas também por ser realizado no final do ano, devido às altas temperaturas durante os meses de verão no Catar.

        A competição contou com 32 equipes nacionais de futebol de todo o mundo, competindo em uma série de estádios modernos, muitos dos quais foram construídos especialmente para o evento.
        
        A seleção da França emergiu como campeã, conquistando seu segundo título mundial, após uma emocionante final contra a seleção da Argentina. O jogo foi decidido nos pênaltis, com a França prevalecendo por uma margem estreita.
        
        Além do sucesso esportivo, a Copa do Mundo de 2022 foi notável por sua ênfase na sustentabilidade e nas questões sociais, com o Catar implementando várias iniciativas para minimizar o impacto ambiental do torneio e abordar preocupações sobre direitos humanos e condições de trabalho.</p>`
    } else if (ano == '1934') {
        container_titulo_copa.innerHTML += `<h1>Copa do Mundo de ${ano}</h1>`
        container_resumo1.innerHTML += `
        <p>A Copa do Mundo de 2022 foi realizada no Catar, marcando a primeira vez que o torneio foi realizado no Oriente Médio. O evento foi único não apenas por sua localização, mas também por ser realizado no final do ano, devido às altas temperaturas durante os meses de verão no Catar.

        A competição contou com 32 equipes nacionais de futebol de todo o mundo, competindo em uma série de estádios modernos, muitos dos quais foram construídos especialmente para o evento.
        
        A seleção da França emergiu como campeã, conquistando seu segundo título mundial, após uma emocionante final contra a seleção da Argentina. O jogo foi decidido nos pênaltis, com a França prevalecendo por uma margem estreita.
        
        Além do sucesso esportivo, a Copa do Mundo de 2022 foi notável por sua ênfase na sustentabilidade e nas questões sociais, com o Catar implementando várias iniciativas para minimizar o impacto ambiental do torneio e abordar preocupações sobre direitos humanos e condições de trabalho.</p>
    
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo2.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022">   
        <p>
        A partida foi disputada entre a Itália e a Tchecoslováquia, no Estádio Nacional do PNF, em Roma, Itália.
     Na final, a Itália recuperou de um golo de desvantagem vencendo por 2–1 em uma partida que teve temperaturas próximas a 40 °C (104 °F) e se tornou a campeã.
        </p>`
      container_resumo3.innerHTML += `
        <p>
        O artilheiro foi Oldřich Nejedlý  (Tchecoslováquia), com 5 gols marcados durante o torneio.
        Alguns dos jogadores mais destacados da Copa de 1934 incluíram nomes como Giuseppe Meazza(Itália), Sindelar (Áustria), Nejedly (Tchecoslováquia), entre outros.
        </p>
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo4.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> 
        <p>A Copa do Mundo de 2022 foi realizada no Catar, marcando a primeira vez que o torneio foi realizado no Oriente Médio. O evento foi único não apenas por sua localização, mas também por ser realizado no final do ano, devido às altas temperaturas durante os meses de verão no Catar.

        A competição contou com 32 equipes nacionais de futebol de todo o mundo, competindo em uma série de estádios modernos, muitos dos quais foram construídos especialmente para o evento.
        
        A seleção da França emergiu como campeã, conquistando seu segundo título mundial, após uma emocionante final contra a seleção da Argentina. O jogo foi decidido nos pênaltis, com a França prevalecendo por uma margem estreita.
        
        Além do sucesso esportivo, a Copa do Mundo de 2022 foi notável por sua ênfase na sustentabilidade e nas questões sociais, com o Catar implementando várias iniciativas para minimizar o impacto ambiental do torneio e abordar preocupações sobre direitos humanos e condições de trabalho.</p>`
    } else if (ano == '1930') {
        container_titulo_copa.innerHTML += `<h1>Copa do Mundo de ${ano}</h1>`
        container_resumo1.innerHTML += `
        <p>A Copa do Mundo de 2022 foi realizada no Catar, marcando a primeira vez que o torneio foi realizado no Oriente Médio. O evento foi único não apenas por sua localização, mas também por ser realizado no final do ano, devido às altas temperaturas durante os meses de verão no Catar.

        A competição contou com 32 equipes nacionais de futebol de todo o mundo, competindo em uma série de estádios modernos, muitos dos quais foram construídos especialmente para o evento.
        
        A seleção da França emergiu como campeã, conquistando seu segundo título mundial, após uma emocionante final contra a seleção da Argentina. O jogo foi decidido nos pênaltis, com a França prevalecendo por uma margem estreita.
        
        Além do sucesso esportivo, a Copa do Mundo de 2022 foi notável por sua ênfase na sustentabilidade e nas questões sociais, com o Catar implementando várias iniciativas para minimizar o impacto ambiental do torneio e abordar preocupações sobre direitos humanos e condições de trabalho.</p>
    
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo2.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022">   
        <p>
        O Uruguai se sagrou campeão, ganhando de 4-2 sobre Argentina e conquistando o título diante de sua torcida.
        </p>`
        container_resumo3.innerHTML += `
        <p>
        O artilheiro foi Guillermo Stábile (Argentina), com 8 gols marcados durante o torneio.
        Alguns dos jogadores mais destacados da Copa de 1930 incluíram nomes como José Nasazzi (Uruguai), José Leandro Andrade (Uruguai), entre outros.
        </p>
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> `
        container_resumo4.innerHTML += `
        <img src="image/2022fwc_square_portrait_1080x1080.webp" alt="Banner copa 2022"> 
        <p>A Copa do Mundo de 2022 foi realizada no Catar, marcando a primeira vez que o torneio foi realizado no Oriente Médio. O evento foi único não apenas por sua localização, mas também por ser realizado no final do ano, devido às altas temperaturas durante os meses de verão no Catar.

        A competição contou com 32 equipes nacionais de futebol de todo o mundo, competindo em uma série de estádios modernos, muitos dos quais foram construídos especialmente para o evento.
        
        A seleção da França emergiu como campeã, conquistando seu segundo título mundial, após uma emocionante final contra a seleção da Argentina. O jogo foi decidido nos pênaltis, com a França prevalecendo por uma margem estreita.
        
        Além do sucesso esportivo, a Copa do Mundo de 2022 foi notável por sua ênfase na sustentabilidade e nas questões sociais, com o Catar implementando várias iniciativas para minimizar o impacto ambiental do torneio e abordar preocupações sobre direitos humanos e condições de trabalho.</p>`
    }


















}