var hquantidade = document.querySelector("#quantidade");
var hnomeprocesso = document.querySelector("#nomeprocesso");
var hendpoint = document.querySelector("#endpoint");
var hcaminhoprocesso = document.querySelector("#caminhoprocesso");
var hdescricao = document.querySelector("#descricao");
var hdescricaohash = document.querySelector("#descricaohash");
var hacao = document.querySelector("#acao");
var hgenerate = document.querySelector("#generate");

var quantidade = hquantidade.value;
var nomeprocesso = hnomeprocesso.value;
var endpoint = hendpoint.value;
var caminhoprocesso = hcaminhoprocesso.value;
var descricao = hdescricao.value;
var descricaohash = hdescricaohash.value;
var acao = hacao.value;

var hresult = document.getElementById("result")


var radioEmpresa = ""
var radioDia = ""
var result = {
    quantidade: hquantidade.value,
    nomeprocesso: hnomeprocesso.value
}


hgenerate.addEventListener("click", function () {

    
    var checkE = false
    var checkD = false

    if (hquantidade.value === "" || hquantidade.value === " " || hnomeprocesso.value === "" || hnomeprocesso.value === " " || hendpoint.value === "" || hendpoint.value === " " || hcaminhoprocesso.value === "" || hcaminhoprocesso.value === " " || hdescricao.value === "" || hdescricao.value === " " || hdescricaohash.value === "" || hdescricaohash.value === " " || hacao.value === "" || hacao.value === " ") {
        alert("Por favor preencha todos os campos solicitados.")
    } else {
        if (document.getElementById("Vicunha").checked) { radioEmpresa = "VICUNHA"; checkE = true;}
        if (document.getElementById("VicunhaHolding").checked) { radioEmpresa = "VICUNHA HOLDING"; checkE = true }
        if (document.getElementById("Tce").checked) { radioEmpresa = "TCE"; checkE = true }
        if (document.getElementById("Cptm").checked) { radioEmpresa = "CPTM"; checkE = true }
        
        if (document.getElementById("Bomdia").checked) { radioDia = "Bom dia"; checkD = true }
        if (document.getElementById("Boatarde").checked) { radioDia = "Boa tarde"; checkD = true }
        if (document.getElementById("Boanoite").checked) { radioDia = "Boa noite"; checkD = true }
        
        if (checkE === true && checkD === true) {
            if (hquantidade.value > 1) {
                var stringquantidade = "eventos"
            } else { var stringquantidade = "evento" }
            hresult.innerHTML = `<h4>${radioEmpresa} - MINERVA - ${hnomeprocesso.value}</h4>` + `</br>`+ `</br>` + `Foi identificado via Minerva o seguinte alerta:`+ `</br>`+ `</br>`+ `Prezados, ${radioDia}!`+ `</br>`+ `</br>`+ `<p>Conseguimos destacar que foi criado ${hquantidade.value} ${stringquantidade} referente ao processo <span style=" color:red">${hnomeprocesso.value}</span>, em pesquisa a mesma, foi identificado que, se trata ${hdescricao.value}, ${hdescricaohash.value}.</p>`+`</br>`+`</br>`+`<b>Ação Solicitada: </b>`+`<span style="color:green">${hacao.value}.</span>`+`</br>`+`</br>`+`<b>Endpoint's Envolvidos: </b>`+`<span style="color:blue">${hendpoint.value} </span>`+`</br>`+`</br>`+`<b>Processo: </b>`+`${hcaminhoprocesso.value}`+`</br>`+`</br>`+`<b>Evidências: </b>`+`</br>`+`</br>`
        }
    }
})


