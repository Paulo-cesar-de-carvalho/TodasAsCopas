let ordemGrupos = ['GRUPO A','GRUPO B','GRUPO C','GRUPO D','GRUPO E','GRUPO F','GRUPO G','GRUPO H',
    'OITAVA-DE-FINAL','QUARTA-DE-FINAL','GRUPO QUARTA-DE-FINAL 1','GRUPO QUARTA-DE-FINAL 2','GRUPO QUARTA-DE-FINAL 3','GRUPO QUARTA-DE-FINAL 4',
    'SEMIFINAL','GRUPO SEMIFINAL A','GRUPO SEMIFINAL B','FASE FINAL','DECISÃO 3º LUGAR','FINAL']

let anosCopa = []
for (i=1930;i<2023;i=i+4){
    if (i<1940 || i>1948){
        anosCopa.push (i)
    }
}

let seletorAno = document.querySelector("#ano-da-copa")
for (a of anosCopa){
    let opcao = document.createElement("option")
    opcao.text = a
    seletorAno.appendChild(opcao)

}

