//const { createElement } = require("react")

const gruposMataMata = ['16 AVOS DE FINAL','OITAVAS DE FINAL','QUARTAS DE FINAL','SEMIFINAIS','FINAL']

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
    //area.children
    area.setAttribute('style',`background-color:${corAleatoria()}`) 
    const fases = [...listar_jogos_finais(ano)]
    console.log(fases)
    fases.map((e)=>{
        const elementoDiv = document.createElement('div')
       if (e.length >0){
           // console.log(e[9])
           e.map((el) =>{
               elementoDiv.innerHTML += (placar_resumido(el[10])) + "<br>"
                area.appendChild(elementoDiv)
           })

       }
 
    })
}

function listar_jogos_finais(ano){
    let f = [],  s = [], q = [], o = [], d = [], x = [] 
     x.push(d,o,q,s,f)

    f.push(localizarJogo(ano,gruposMataMata[4])[0])
    //s.push(localizarJogo(ano,gruposMataMata[3],f[0][5])[0])
    //s.push(localizarJogo(ano,gruposMataMata[3],f[0][8])[0])
    /*x[3].map((e)=>{
        x[2].push(localizarJogo(ano,gruposMataMata[2],e[5])[0])
        x[2].push(localizarJogo(ano,gruposMataMata[2],e[8])[0])
    })
    x[2].map((e)=>{
        x[1].push(localizarJogo(ano,gruposMataMata[1],e[5])[0])
        x[1].push(localizarJogo(ano,gruposMataMata[1],e[8])[0])
    })
    x[1].map((e)=>{
        x[0].push(localizarJogo(ano,gruposMataMata[0],e[5])[0])
        x[0].push(localizarJogo(ano,gruposMataMata[0],e[8])[0])
    })*/
    
    for (i=4;i>1;i--){
        x[i].map((e)=>{
            x[i-1].push(localizarJogo(ano,gruposMataMata[i-1],e[5])[0])
            x[i-1].push(localizarJogo(ano,gruposMataMata[i-1],e[8])[0])
    })
    }
    return x
} 


    
//criar_esquema_mata_mata(2026)

console.log(listar_jogos_finais(2026))

function placar_resumido(id){
    const jogo = jogos[id]
    return `${jogo[5]} ${jogo[6] } X ${jogo[7]} ${jogo[8]}`
}

console.log(placar_resumido(1067))