const selecoesOrdemJogos = listar_ordem_jogos()
let selecoesOrdemJogosB = [...listar_ordem_jogos()]
selecoesOrdemJogosB.unshift("")



function criar_tabela_confrontos(){
    let linha = []
    selecoesOrdemJogos.map((a)=>{
        let x = []
        x.push (a)
        selecoesOrdemJogos.map((b)=>{
            x.push(contar_confrontos(a,b,jogos))
        })
        linha.push(x)
    })
    linha.unshift(selecoesOrdemJogosB)
    return linha
}
const tabelaConfronto = document.querySelector("#tabela-confronto")
const arrayConfronto = criar_tabela_confrontos()
criar_tabela_HTML(tabelaConfronto,arrayConfronto)

const celulas = [...tabelaConfronto.querySelectorAll("td")]
celulas.map((e)=>{
    x = e.innerText
    if (x ==0){
        //e.style.backgroundColor = "red"
    } else if (x=="-"){
        e.style.backgroundColor = 'rgb(128,128,128)' //"yellow"
    } else if(x>0 && x<8){
        //e.style.backgroundColor = `rgb(${(135-60)/x*(7-x)+60}, ${(7-x)*(206-100)/x+100}, ${(255-100)/x*(7-x)+100})` //'rgb(76, 70, 123)' 'rgb(3, 82, 138)'
        e.style.backgroundColor = determinarFaixaRgb(x,7,0,0,235,0,180,235,false)
           // color =rgb(0, 180, 235)
        //)
    }
})



//Criar f congelar painéis