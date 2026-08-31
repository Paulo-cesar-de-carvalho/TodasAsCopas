
//const temasRetorno = ["FIFA","PG","J","V","E","D","GP","GC","SG"]
const tabela = document.querySelector("#tabela-classificaçao")
criar_tabela_HTML(tabela,criar_array_totalizador(jogos,selecoesUnique))

function criar_array_totalizador(base,selecoes){
    let linha = []    
    selecoes.map((e)=>{
        let arrayAnalise = [...analisar_partidas(e,base)]
        arrayAnalise.unshift(e)
        linha.push(arrayAnalise)
    })
    temasRetorno.unshift("Seleções")
    
    linha.sort((a,b)=>{
        return b[1]-a[1]
    })

    linha.unshift(temasRetorno)
    return linha
}

//parei aqui: completar
function classificar_grupo( ano, fase=""){
    console.log(ano, fase)
    let j = localizarJogo(ano,fase)
    console.log(j)
    let x = []
    j.map((e)=>{
        x.push (e[5])
        x.push (e[8])
    })
    let s = [...new Set(x)]
    console.log(s)
    let arrayCompletoG =  [...criar_array_totalizador(j,s)]
    arrayCompletoG[0].splice(1,1)
    arrayCompletoG.map((el)=>{
        el.splice(1,1)
    })
    return arrayCompletoG
    
     

}
console.log( classificar_grupo(2002,"GRUPO D"))