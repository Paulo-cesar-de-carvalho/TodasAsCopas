
function listar_jogos_por_copa(ano){
    let copa = []    
    for (let i=0;i<jogos.length;i++){
        if(jogos[i][1]==ano){
            copa.push(jogos[i])
        }
    }
    return copa
}

function montar_placar (pais1, placar1, placar2, pais2, dataLocal, penalti ,tagGrupo){
    let placarCompleto = document.createElement("section")
    let placarSemData = document.createElement("div")
    let dataCompleta = document.createElement("div")
    let divBandeira1 = document.createElement("div")
    let divBandeira2 = document.createElement("div")
    let imgBandeira1 = document.createElement("img")
    let imgBandeira2 = document.createElement("img")
    let elementoPais1 = document.createElement("div")
    let elementoPais2 = document.createElement("div")
    let elementoPlacar = document.createElement("div")
    let elementoPenalti = document.createElement("div")
    
    dataCompleta.innerText = dataLocal
    elementoPais1.innerText = pais1
    elementoPais2.innerText = pais2
    elementoPlacar.innerText = ` ${placar1}X${placar2} `
    elementoPenalti.innerText = penalti
    elementoPais1.setAttribute("class","pais1")
    elementoPais2.setAttribute("class","pais2")
    
    imgBandeira1.setAttribute("src",`Bandeiras/${pais1}.png`)
    divBandeira1.setAttribute("class","bandeira")
    imgBandeira2.setAttribute("src",`Bandeiras/${pais2}.png`)
    divBandeira2.setAttribute("class","bandeira")
    imgBandeira1.setAttribute("class","bandeira")
    imgBandeira2.setAttribute("class","bandeira")


    divBandeira1.appendChild(imgBandeira1)
    divBandeira2.appendChild(imgBandeira2)

    placarSemData.appendChild(elementoPais1)
    placarSemData.appendChild(divBandeira1)
    placarSemData.appendChild(elementoPlacar)
    placarSemData.appendChild(divBandeira2)
    placarSemData.appendChild(elementoPais2)
    placarSemData.appendChild(elementoPenalti)
    placarSemData.setAttribute("class","placar-sem-data")
    
    placarCompleto.appendChild(dataCompleta)
    placarCompleto.appendChild(placarSemData)
    placarCompleto.setAttribute("class","placar-completo")
    tagGrupo.appendChild(placarCompleto)
    
}

function montar_grupo(grupo, ano, tagTabela){
    let copa = listar_jogos_por_copa(ano)
    let tituloGrupo = document.createElement("h2")
    let tagGrupo = document.createElement("div")
    tituloGrupo.innerText = grupo
    tagGrupo.appendChild(tituloGrupo)
    for (jogo of copa) {
        if (jogo[2].toUpperCase() == grupo){
            montar_placar(jogo[5],jogo[6],jogo[7],jogo[8],`${jogo[0]} - ${jogo[3]} - ${jogo[4]}`,jogo[9] ,tagGrupo)
        }
    }
    tagTabela.appendChild(tagGrupo)
}

function montar_copa_do_mundo(ano){
    tagBase.innerText = ""
    for (grupo of listar_grupos_da_copa(ano)){
        montar_grupo(grupo,ano,tagBase)
    }
}

function listar_grupos_da_copa(ano){
    let copa = listar_jogos_por_copa(ano)
    let gruposDaCopa = []
    for (jogo of copa){
        gruposDaCopa.push(jogo[2])
    }
    //Elimina repetidos:
    let gruposDaCopaUnico = gruposDaCopa.filter(function(This, i){
        return gruposDaCopa.indexOf(This)===i
    })
    
    return gruposDaCopaUnico
}

let tagBase = document.querySelector("#primeira-fase")

seletorAno.addEventListener("change", function(){
    montar_copa_do_mundo(this.value)    
})


