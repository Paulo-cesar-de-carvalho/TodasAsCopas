let anosCopa = []
for (i=1930;i<2023;i=i+4){
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

cabecaTabela.appendChild(tdCabecaTabela)