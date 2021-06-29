//Feita a ligação com o botão, mesmo nome inserido no onclick
function tabuada(){
    //Alterado o nome da variável do campo onde vai ser inserido o valor da  tabuada
    var num = document.getElementById("txtn")
    //Alterado o nome da variável do campo onde vai ser inserida a tabuada
    var tab = document.getElementById("seltab")

    //Pergunta: Se o numero for igual a zero vai gerar o ALert
    if(num.value.length == 0){
        alert("[ERRO] Por favor, digite um número!")
    //Senão ele vai apresentar a tabuada    
    }else{
        var n = Number(num.value)
        //Agora vai ser criada a tabuada
        //Crio o contador do valor que será multiplicado
        var c = 1
        while(c <= 10){
            //foi criado uma variável para o select do tipo opções
            var item = document.createElement("option")
            item.text = `${n} x ${c} = ${n*c}`
            //Aqui eu informo na variável TAB que é onde há o espaço em branco que será inserido a tabuada
            //montada
            tab.appendChild(item)
            //Necessário incrementar o valor de C
            c++
        }
    }


}

function divisao(){

    var num1 = document.getElementById("txtdiv")
    var num2 = document.getElementById("txtd")
    var result = document.getElementById("seltabs")

    if(num1.value.length == 0 || num2.value.length == 0){
        alert("[ERRO] Por favor, digite um número!")
    }else{
        var n1 = Number(num1.value)
        var n2 = Number(num2.value)
        var item2 = document.createElement("option")
        item2.text= `${n1} / ${n2} = ${n1/n2}`

        result.appendChild(item2)

    }
}

function adicao(){

    var soma1 = document.getElementById("txtsom")
    var soma2 = document.getElementById("txtsoma")
    var result = document.getElementById("tabsom")

    if(soma1.value.length == 0 || soma2.value.length == 0){
        alert("[ERRO] Por favor, digite um número!")
    }else{
        var soma1 = Number(soma1.value)
        var soma2 = Number(soma2.value)
        var item3 = document.createElement("option")
        item3.text= `${soma1} + ${soma2} = ${soma1+soma2}`

        result.appendChild(item3)

    }

}

function subtracao(){

    var subt1 = document.getElementById("txtsub")
    var subt2 = document.getElementById("txtsub2")
    var result = document.getElementById("seltabsub")

    if(subt1.value.length == 0 || subt2.value.length == 0){
        alert("[ERRO] Por favor, digite um número!")
    }else{
        var subt1 = Number(subt1.value)
        var subt2 = Number(subt2.value)
        var item4 = document.createElement("option")
        item4.text = `${subt1} - ${subt2} = ${subt1-subt2}`

        result.appendChild(item4)
    }

}