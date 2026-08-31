const menu = document.querySelector('#menu-escolha')
const controles = [...menu.children]
const ordemRetorno = ['fifa','pg', 'j','v','em','d','gp','gc','sg']
let unidade = document.querySelector('input[name="item"]:checked').value //retorna o valor do radio selecionado
let ehAcumulado = document.querySelector('#acum').value
const tabelaPrincipal = document.querySelector("#tabela")
criar_tabela_HTML(tabelaPrincipal,criar_array_completo(ehAcumulado.checked,unidade))

function criar_array_completo(acc = false,grandeza=""){
    let anosCopaT = [...anosCopa]
    anosCopaT.unshift ("Seleções/Anos")
    anosCopaT.push("Total")
    let arrayInteiro = []
    let acumulado = 0
    selecoesUnique.map((selecao)=>{
        let minhaLinha = []
        minhaLinha.unshift(selecao)
        acumulado =0
        anosCopa.map((ano)=>{
            let x = analisar_partidas(selecao, jogos, ano)[ordemRetorno.indexOf(grandeza)]
            acumulado += x
            minhaLinha.push(acc?acumulado:x)
        })
        minhaLinha.push(acumulado)
        arrayInteiro.push(minhaLinha)
    })
    let qte = arrayInteiro[0].length
    arrayInteiro.sort((a,b)=>{return b[qte-1]-a[qte-1]})
    arrayInteiro.unshift(anosCopaT)
    return arrayInteiro
}

controles.map((e)=>{
    e.addEventListener('change',()=>{
        tabelaPrincipal.innerHTML =""
        unidade = document.querySelector('input[name="item"]:checked').value
        ehAcumulado = document.querySelector('#acum')
        criar_tabela_HTML(tabelaPrincipal,criar_array_completo(ehAcumulado.checked,unidade))
        
    })
})