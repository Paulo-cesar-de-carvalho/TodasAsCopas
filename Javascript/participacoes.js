/*let anosCopa = []
for (i=1930;i<2027;i=i+4){
    if (i<1939 || i>1948){
        anosCopa.push (i)
    }
}


let cabecaTabela = document.querySelector("#cabeca-tabela")
let tdCabecaTabela = document.createElement("td")
for (ano of anosCopa){
    let thAnoTabela = document.createElement("th")
    thAnoTabela.innerText = ano
    tdCabecaTabela.appendChild(thAnoTabela)
}

cabecaTabela.appendChild(tdCabecaTabela) */

let anosCopaT = []
anosCopaT.push ("Seleções/Anos")
for (i=1930;i<2029;i=i+4){
    if (i<1939 || i>1948){
        anosCopaT.push (i)
    }
}

//const selecoesUnique = retornar_unico_alfabetico()

let cabecaTabela = document.querySelector("#thead-tabela")
let thCabecaTabela = document.createElement("tr")
for (ano of anosCopaT){
    let tdAnoTabela = document.createElement("td")
    if (anosCopaT.indexOf(ano)==0){
        tdAnoTabela.setAttribute("class", "primeira-coluna")
    }else{
        tdAnoTabela.setAttribute("class", "cabecalho-ano")
    }
    tdAnoTabela.innerText = ano
    thCabecaTabela.appendChild(tdAnoTabela)
}

cabecaTabela.appendChild(thCabecaTabela)

function contar_partidas (ano, selecao,base){
    let contador = 0
    for(jogo of base){
        if (jogo[1]==ano && (jogo[5] ==selecao || jogo [8] == selecao)){
            contador++    
        }
    }
    return contador
}

function contar_elementos(elemento, base){
    let quantidadeElementos = base.filter(x => x === elemento).length;
    return quantidadeElementos
}

function criar_dados_linha (pais, anos, base){
    let arrayCompleto = []
    let acumulado = 0
    arrayCompleto.push (pais)
    for (let x = 0; x < anos.length-1; x++){
        arrayCompleto.push (contar_partidas(anos[x+1],pais,base))
        acumulado += contar_partidas(anos[x+1],pais,base)
    }
    arrayCompleto.push (acumulado)
    return arrayCompleto
}

function criar_array_completo(){
    let arrayCompleto = []
    selecoesUnique.map((e,i)=>{
        arrayCompleto.push(criar_dados_linha(e,anosCopaT,jogos))
    })
    console.log( arrayCompleto.length)
    const qte = arrayCompleto[0].length
    arrayCompleto.sort((a,b)=>{return b[qte-1]-a[qte-1]})
    return arrayCompleto
}

console.log (criar_array_completo())
// substituir por criar tabela html
function criar_linha_tabela(arrayLinha){
    let cadaLinha = document.createElement("tr")
    for (dado of arrayLinha){
        let cadaCelula = document.createElement("td")
        if (arrayLinha.indexOf(dado)==0){
            cadaCelula.setAttribute("class","primeira-coluna")
        }
        cadaCelula.innerText = dado
        cadaLinha.appendChild(cadaCelula)
    }
    document.querySelector("#corpo-tabela").appendChild(cadaLinha)
}


const arrayCompleto = criar_array_completo()
arrayCompleto.map((e,i)=>{
    criar_linha_tabela(e)
})

// criar funcionalidades de participações, jogos, pontos e vitórias e todos com acumuladores também

