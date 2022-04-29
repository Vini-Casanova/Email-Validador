function analisar() {
    var x = document.getElementById('email').value;
    var indexCOM = x.search(".com");
    var indexA = x.indexOf("@");
    var prefixo = x.substring(0,indexA);
    var sufixo=x.substring((indexA + 1),indexCOM);

    if(prefixo[0] === prefixo[0].toUpperCase()){
        alert("Email Invalido");
    }else if(indexA === -1){
        alert("Email Invalido");
    }else if(indexCOM === -1){
         alert("Email Invalido");
    }else if(sufixo !== sufixo.toLowerCase()){
        alert("Email Invalido");
    }else if(indexA - indexCOM === -1){
        alert("Email Invalido");
    }else{
        document.getElementById('resp').innerText = "Email Valido";
    }
}
