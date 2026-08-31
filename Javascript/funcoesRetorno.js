//const temasRetorno = ["FIFA","PG","J","V","E","D","GP","GC","SG"]

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

const localizarJogo = (ano, fase = "", selecao ="")=>{ //retorna um array completo com todas informações da(s) paridas correspondentes - array com array 
    let x = jogos.filter((el,i)=>{
        if (ano == el[1] &&  (fase == el[2]) || (fase =="")){
            if (selecao == "" || el[5] == selecao || el[8] == selecao){
                return  el.push (i)           
            }
        }
    })
    return [...x]
}
//const localizarJogoSelecai = (ano,fase="",selecao =""){

//}
console.log(localizarJogo(1998,'SEMIFINAIS',"Brasil"))
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

function somar_jogos(selecao, base){
    let x = 0
    base.map((e)=>{
        if (e[5] == selecao || e[8] == selecao){
            x ++
        }
    })
    return x
}

//Função que lista todas seleções por ordem de número de jogos
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

//Função  gera um array com os dados do jogo.
function analisar_partidas(selecao, base,ano=""){
    //if (ano !=""){base = [...localizarJogo(ano)]}
    let pg = 0 , fifa = 0, j = 0, v = 0,  em = 0, d = 0, gp = 0, gc = 0, sg = 0
    let arrayRetorno = []
    base.map((e)=>{
        if(ano==e[1] || ano==""){
            if(selecao == e[5]){
                j++, gp += Number(e[6]), gc += Number(e[7])
                if(e[6]==e[7]){
                    pg++ , em++
                }
                if(e[6]>e[7]){
                    v++,  pg += (Number(e[1])<1994?2:3)
                }
                if(e[6]<e[7]){d++}
            }
            if (selecao == e[8]){
                j++, gp += Number( e[7]), gc += Number(e[6])
                if(e[6]==e[7]){
                    em ++, pg++
                }
                if(e[6]<e[7]){
                    v++, pg += (Number(e[1])<1994?2:3)
                }
                if(e[6]>e[7]){d++}
            }
        }
    })
    sg = gp - gc
    fifa = 3*v + em
    arrayRetorno = [fifa,pg, j,v,em,d,gp,gc,sg]
    return arrayRetorno
}

function determinarFaixaRgb(passo, passos, rIni, gIni, bIni , rFim, gFim, bFim,crescente = true){ 
    y = crescente? passo: passos-passo
    let xR = Math.floor((rFim-rIni)/passos * y + rIni)
    let xG = Math.floor((gFim-gIni)/passos * y + gIni)
    let xB = Math.floor((bFim-bIni)/passos * y + bIni)
    let x = `rgb(${xR},${xG},${xB})`
    return x
}
const corAleatoria = () =>{
    let r = Math.floor(Math.random()*255)
    let g = Math.floor(Math.random()*255)
    let b = Math.floor(Math.random()*255)
    let x = `rgb(${r},${g},${b})`
    return  x  
}

function contar_elementos(elemento, base){
    let quantidadeElementos = base.filter(x => x === elemento).length;
    return quantidadeElementos
}