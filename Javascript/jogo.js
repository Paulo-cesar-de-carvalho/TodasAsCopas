function montarPartidaSelecionada(indice){
    let jogo = jogos[indice]
    const tabelaJogo = document.querySelector("#partida")
    let partida = `${jogo[5]} ${jogo[6]} X ${jogo[7]} ${jogo[8]} ${jogo[9]}`
    let local =  `Estádio: ${jogo[3]} - Cidade: ${jogo[4]}`
    let data =  `Data: ${jogo[0]}`
    tabelaJogo.innerHTML = `<h1>${partida}</h1>`
    tabelaJogo.innerHTML += `<p>${data}</p>`
    tabelaJogo.innerHTML += `<p>Fase: ${jogo[2]}</p>`
    tabelaJogo.innerHTML += `<p>${local}</p>`
}
montarPartidaSelecionada(800) 
