
//Corrigir 1938 - suécia
//Incluir classificaçao ggupos
//exibir nome dos paises ao clicar

const gruposMataMata = ['16 AVOS DE FINAL','OITAVAS DE FINAL','QUARTAS DE FINAL','SEMIFINAIS','FINAL']
function det_primeira_fase(ano){
    let x = 0
    for (let item in gruposMataMata){
        for (let jogo of jogos){
            if (jogo[1]==ano && gruposMataMata[item] ==jogo[2]){
                return item
            }
        }
    }
}

function criar_menu_anos(){
    const menuAnos = document.querySelector("#tabela-anos")
    anosCopa.map((e)=>{
        let celula = document.createElement('div')
        celula.setAttribute('id',`i${e}`)
        celula.setAttribute('class','cada-ano')
        celula.innerText = e
        celula.addEventListener('click', ((ev)=>{
            criar_esquema_mata_mata(ev.target.innerText)
        }))
        menuAnos.appendChild(celula)
    })
}
criar_menu_anos()


function criar_esquema_mata_mata(ano){
    const area = document.querySelector('#area-principal')
    document.querySelector('#titulo-eliminatoria').innerText=`Fase Eliminatória - Copa ${ano}`
    area.innerHTML=''
    const larguraJ = 70; const alturaJ = 9/7*larguraJ
    const pFase = det_primeira_fase(ano)
    let alturaT = alturaJ * 2**(4-pFase) ; let larguraT = (5-pFase)*larguraJ
    const fases = [...listar_jogos_finais(ano)]
    let fase = 0
    fases.map((e)=>{
        if (e.length >0){
        const elementoFase = document.createElement('div')
           e.map((el) =>{
                const elementoJogo = document.createElement('div')
                elementoJogo.setAttribute('style',`height:${2**fase*larguraJ}px`)
                elementoJogo.setAttribute('class','cada-jogo')
                
                elementoJogo.appendChild(criar_confronto_bandeira_html(el[10]))
                elementoFase.appendChild(elementoJogo)
           })
           area.appendChild(elementoFase)
           fase ++
       }
    })
    console.log(listar_jogos_finais(ano))
    //area.setAttribute('style',`width:70px;height:90px;background-color:black`)
}

function listar_jogos_finais(ano){
    const pFase = det_primeira_fase(ano)
    let f = [],  s = [], q = [], o = [], d = [], x = [] 
     x.push(d,o,q,s,f)

    f.push(localizarJogo(ano,gruposMataMata[4])[0])
    
    for (i=4;i>pFase;i--){
        x[i].map((e)=>{
            x[i-1].push(localizarJogo(ano,gruposMataMata[i-1],e[5])[0])
            x[i-1].push(localizarJogo(ano,gruposMataMata[i-1],e[8])[0])
    })
    }
    return x
} 

function placar_resumido(id){
    const jogo = jogos[id]
    return `${jogo[5]} ${jogo[6] } X ${jogo[7]} ${jogo[8]}`
}

console.log(placar_resumido(1067))

function criar_confronto_bandeira_html(idJogo){
    const jogo = jogos[idJogo]
    const campo = document.createElement('div')
    const band1 = document.createElement('img'); const band2 = document.createElement('img')
    const divBand1 = document.createElement('div'); const divBand2 = document.createElement('div')
    const divDivisor = document.createElement('div')
    band1.setAttribute("src",`../Bandeiras/${jogo[5]}.png`);band2.setAttribute("src",`../Bandeiras/${jogo[8]}.png`)
    divBand2.appendChild(band2); divBand1.appendChild(band1)
    band1.setAttribute('class','bandeira'); band2.setAttribute('class','bandeira'); divDivisor.setAttribute('class','div-divisor')
    divBand1.setAttribute('class','bandeira'); divBand2.setAttribute('class','bandeira')
    campo.setAttribute('class','campo')
    campo.appendChild(divBand1); campo.appendChild(divDivisor);campo.appendChild(divBand2)
    return campo


}
//teste