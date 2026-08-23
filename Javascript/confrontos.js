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

//Criar formatação condicional e congelar painéis