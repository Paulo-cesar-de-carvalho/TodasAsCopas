let anosCopa = []
anosCopa.push ("Seleções/Anos")
for (i=1930;i<2023;i=i+4){
    if (i<1939 || i>1948){
        anosCopa.push (i)
    }
}

let cabecaTabela = document.querySelector("#thead-tabela")
let thCabecaTabela = document.createElement("tr")
for (ano of anosCopa){
    let tdAnoTabela = document.createElement("td")
    if (anosCopa.indexOf(ano)==0){
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
for (paisA of selecoesUnique){
    criar_linha_tabela(criar_dados_linha(paisA,anosCopa,jogos))
}

