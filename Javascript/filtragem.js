//criar select com as opçoes de seleção

const tabelaPesquisa = document.querySelector("#pesquisa")

function criarSeletores () {
    const seletor = document.createElement("select")
    seletor.setAttribute("class","itens-pesquisa")
    seletor.setAttribute("id","pergunta1")
    const item = document.createElement("input")
    item.setAttribute("class","itens-pesquisa")
    item.setAttribute("id","resposta1")
    temas.map((e,i)=>{
        if(!(i==5 || i ==8)){
        const opcao = document.createElement("option")
        opcao.value = i
        opcao.text = e
        seletor.appendChild(opcao)
        }
    })
    tabelaPesquisa.appendChild(seletor)
    tabelaPesquisa.appendChild(item)
}
criarSeletores()

function pesquisar(){
    const qteAtributos = [...document.querySelector("#pesquisa").children]
    let idPergunta01 = document.querySelector("#pergunta1").value
    let resposta01 = document.querySelector("#resposta1").value
    const tabelaJogos = document.querySelector("#jogos-selecionados")
    tabelaJogos.innerHTML = ""
  
    jogos.map((el,ind)=>{
        if (el[idPergunta01] == resposta01){
            const parag = document.createElement("p")
            const texto = (`${el[1]} ${el[5]} ${el[6]} X ${el[7]} ${el[8]} ${el[9]}`)
            parag.innerText = texto
            parag.setAttribute("id",`i${ind}`)
            parag.addEventListener("click",(ev)=>{console.log(ev.target.id)})
            tabelaJogos.appendChild(parag)
        }
        //return
    })

}