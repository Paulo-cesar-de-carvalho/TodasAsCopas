function criar_array_totalizador(base){
    let linha = []
    
    selecoesUnique.map((e)=>{
        let x = []
        x.push(e)
        x.push("P","FIFA","J","V","E","D","GP","GC","SG")
        linha.push(x)
    })
    linha.unshift(["Seleção","P","FIFA","J","V","E","D","GP","GC","SG"])
    return linha
}

const tabela = document.querySelector("#tabela-classificaçao")
criar_tabela_HTML(tabela,criar_array_totalizador())

console.log( criar_array_totalizador(jogos))