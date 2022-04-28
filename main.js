/*Criar um programa para reconhecer um EMAIL válido. Nosso email será válido segundo as seguintes regras:

1) precisa iniciar com uma letra
2) nao pode conter letra maiuscula
3) seguir o template

    <prefixo>@<sufixo>.com

4) o sufixo deve ser sempre um conjunto de LETRAS em minusculo
5) é permitido usar . no sufixo
6) o prefixo pode usar chars [0-9] contanto que não seja o primeiro char
7) proibido usar expressão regular*/



var x = prompt()

var indexCOM = x.search(".com")

var indexA = x.indexOf("@")

var prefixo = x.substring(0,indexA)

var sufixo=x.substring((indexA + 1),indexCOM)





if(prefixo[0] == prefixo[0].toUpperCase()){
    alert("EMAIL INVALIDO")
}else if(indexA == -1){
    alert("EMAIL INVALIDO")
}else if(indexCOM == -1){
    alert("EMAIL INVALIDO")
}
 
