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
