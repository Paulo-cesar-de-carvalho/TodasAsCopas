const listarAnosCopa = ()=>{
    let x = []
    for (i=1930;i<2027;i=i+4){
        if (i<1939 || i>1948){
            x.push (i)
        }
    }
return x
}
const anosCopa = [...listarAnosCopa()]

const localizarJogo = (ano, fase)=>{ //retorna um array completo com todas informações da(s) paridas correspondentes - array com array 
    let x = jogos.filter((el)=>{
        if (ano == el[1] &&  fase == el[2]){
            return  el           
        }
    })
    return [...x]
}
const vencedorPartida = (s1,p1,p2,s2,pen="",ven = true) =>{ 
    let aux = "empate"
    if (p1 > p2) {aux = s1}
    else if (p1 < p2) {aux =  s2}
    else if (p1 == p2 && !pen == ""){
        if (Number( pen.slice(1,2)) > Number( pen.slice(3,4))){
            // adaptar para aceitar qualquer placar de pênalti, tendo ou não pararenteses.
            aux = s1
        }
        else {aux = s2}        
    }
    if(!ven){
        if (aux == s2) {aux = s1}
        else if (aux == s1) {aux = s2}  
    }
    return aux
}

console.log(vencedorPartida("Brasi","3","3","Argentina","(4x2)",false))

const determinarSemi = (ano, posicao=1) => {
    if (posicao == 1) {
        const jogo = localizarJogo(ano, "FINAL")[0]
        let selecao = vencedorPartida(jogo[5],jogo[6],jogo[7],jogo[8],jogo[9])
        return selecao
    }
    if (posicao == 2) {
        const jogo = localizarJogo(ano, "FINAL")[0]
        let selecao = vencedorPartida(jogo[5],jogo[6],jogo[7],jogo[8],jogo[9],false)
        return selecao
    }
    if (posicao == 3) {
        if (ano == 1950){return "Suécia"}
        if (ano == 1930){return ""}
        const jogo = localizarJogo(ano, "DECISÃO 3º LUGAR")[0]
        let selecao = vencedorPartida(jogo[5],jogo[6],jogo[7],jogo[8],jogo[9])
        return selecao
    }
    if (posicao == 4) {
        if (ano == 1950){return "Espanha"}
        if (ano == 1930){return ""}
        const jogo = localizarJogo(ano, "DECISÃO 3º LUGAR")[0]
        let selecao = vencedorPartida(jogo[5],jogo[6],jogo[7],jogo[8],jogo[9],false)
        return selecao
    }
// incluir exceção para quando não houver decisão de 3º lugar e para copas em andamento.
// incluiir exceção para 1950 e para 1930
}
console.log(determinarSemi(2022,1))
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

console.log (anosCopa)