

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
    for (grupo of ordemGrupos){
        montar_grupo(grupo,ano,tagBase)
    }
}

// function listar_grupos_da_copa(ano){
//     for (grupo of ordemGrupos){

//     }

// }

let tagBase = document.querySelector("#primeira-fase")


seletorAno.addEventListener("change", function(){
    montar_copa_do_mundo(this.value)    
    
})

let teste = ["p","p","a","p"]
console.log(teste.filter())