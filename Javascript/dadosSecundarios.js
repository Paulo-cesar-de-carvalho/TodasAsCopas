let ordemGrupos = ['GRUPO A','GRUPO B','GRUPO C','GRUPO D','GRUPO E','GRUPO F','GRUPO G','GRUPO H',
    'OITAVAS DE FINAL','QUARTAS DE FINAL','GRUPO QUARTAS DE FINAL 1','GRUPO QUARTAS DE FINAL 2','GRUPO QUARTAS DE FINAL 3','GRUPO QUARTAS DE FINAL 4',
    'SEMIFINAIS','GRUPO SEMIFINAIS A','GRUPO SEMIFINAIS B','FASE FINAL','DECISÃO 3º LUGAR','FINAL']

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

