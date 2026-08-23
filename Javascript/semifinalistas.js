criar_tabela(anosCopa)

function criar_tabela(anosCopa){
    let corpoTabela = document.querySelector("#corpo-tabela")
    for (item in anosCopa){
        let linha = document.createElement("tr")
        let ano = anosCopa[item]
        for (let i = 0; i<5; i++){
            let celula =  document.createElement("td")
            if (i ==0) {
                celula.setAttribute("class","coluna-anos")
                celula.innerText = ano
            } else {
                celula.innerText = determinarSemi(ano,i)
            }

            linha.appendChild(celula)
        }
    corpoTabela.appendChild(linha)
    }   
}
