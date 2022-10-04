let copa = []

for (let i=0;i<jogos.length;i++){
    if(jogos[i][1]==1994){
        copa.push(jogos[i])
    }
}

function montar_placar (pais1, placar1, placar2, pais2, dataLocal, penalti ,onde){
    let placarCompleto = document.createElement("section")
    let placarSemData = document.createElement("div")
    let dataCompleta = document.createElement("div")
    let elementoPais1 = document.createElement("span")
    let elementoPais2 = document.createElement("span")
    let elementoPlacar = document.createElement("span")
    let elementoPenalti = document.createElement("span")
    
    dataCompleta.innerText = dataLocal
    elementoPais1.innerText = pais1
    elementoPais2.innerText = pais2
    elementoPlacar.innerText = ` ${placar1}X${placar2} `
    elementoPenalti.innerText = penalti
    
    placarSemData.appendChild(elementoPais1)
    placarSemData.appendChild(elementoPlacar)
    placarSemData.appendChild(elementoPais2)
    placarSemData.appendChild(elementoPenalti)
    placarCompleto.appendChild(dataCompleta)
    placarCompleto.appendChild(placarSemData)
    placarCompleto.setAttribute("class","placar-completo")
    onde.appendChild(placarCompleto)
    
}

let tagBase = document.querySelector("#primeira-fase")

for (jogo of copa) {
    montar_placar(jogo[5],jogo[6],jogo[7],jogo[8],`${jogo[0]} - ${jogo[3]} - ${jogo[4]}`,jogo[9] ,tagBase)
}


// montar_placar("Brasil",1,0,"Alemanha", tagBase)