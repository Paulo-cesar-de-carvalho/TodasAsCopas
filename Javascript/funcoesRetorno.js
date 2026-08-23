function retornar_unico_alfabetico(){
    let selecoes = []
    jogos.map((jogo)=>{
        selecoes.push (jogo[5])
        selecoes.push (jogo[8])
    })
    let selecoesUnique =  [...new Set( selecoes)]
    selecoesUnique.sort((a, b) => a.localeCompare(b, 'pt-BR', { sensitivity: 'base' })); //ordena alfabetico desconsiderando acentos
    return selecoesUnique
}
const selecoesUnique = [...retornar_unico_alfabetico()]

const determinarAnosCopa = ()=>{
    let x = []
    jogos.map((e)=>{
        x.push(Number(e[1]))    
    })
    x = new Set(x)
    return x
}
const anosCopa = [...determinarAnosCopa()]

const vencedorPartida = (s1,p1,p2,s2,pen="",ven = true) =>{ 
    let aux = ""
    if (p1 > p2) {aux = s1}
    else if (p1 < p2) {aux =  s2}
    else if (p1 == p2 && !pen == ""){
        if (Number( (pen.toUpperCase().split("X")[0]).replace(/\D/g,"")) > Number( (pen.toUpperCase().split("X")[1]).replace(/\D/g,""))){
            // \d - Representa todos caracteres que sejam números
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

const localizarJogo = (ano, fase = "")=>{ //retorna um array completo com todas informações da(s) paridas correspondentes - array com array 
    let x = jogos.filter((el)=>{
        if (ano == el[1] &&  (fase == el[2]) || (fase =="")){
            return  el           
        }
    })
    return [...x]
}

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

//pontos fifa, pontod, jgod, v, e d GP e GC
function somar_jogos(selecao, base){
    let x = 0
    base.map((e)=>{
        if (e[5] == selecao || e[8] == selecao){
            x ++
        }
    })
    return x
}
 
function listar_ordem_jogos(){
    x = selecoesUnique.sort((a,b)=>{
        return somar_jogos(b,jogos) - somar_jogos(a, jogos)
    })
    return x
}

//Função para criar uma tabela HTML genérica já possuíndo o array/matriz completo:
function criar_tabela_HTML(elementoTable, array){
    array.map((e,i)=>{
        let cadaLinha = document.createElement("tr")
        e.map((el,ind)=>{
            let cadaCelula = document.createElement(i==0?"th":"td")
            if (ind==0){cadaCelula.setAttribute("class","primeira-coluna")}
            cadaCelula.innerText = el
            cadaLinha.appendChild(cadaCelula)
        })
        elementoTable.appendChild(cadaLinha)
    })
}

function contar_confrontos(selecao1, selecao2, base){
    x = base.filter((e)=>{        
        if ((e[5] == selecao1 && e[8] == selecao2) || (e[8] == selecao1 && e[5] == selecao2)){
            return e
        }            
    })
    return selecao1==selecao2?" - " :[...x].length
}