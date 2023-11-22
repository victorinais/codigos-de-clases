/* function vaciar(control){
    control.value = "";
}
function verificarEntrada(control){
    if (control.value = ""){
        alert("Debes ingrsar datos")
    }
} */

function operaciones() {

    let operaciones = document.getElementById('operacion').value;
    let numero1 = document.getElementById("numero-1").value;
    let numero2 = document.getElementById("numero-2").value;
    numero1 = parseInt(numero1); 
    numero2 = parseInt(numero2);

    if (operaciones == 'suma'){
        resultado = numero1 + numero2;
    }else if (operaciones == 'resta'){
        resultado = numero1 - numero2;
    }else if (operaciones == 'multi'){
        resultado = numero1 * numero2;
    }else if (operaciones == 'divi'){
        resultado = numero1 / numero2;
    }
    

    document.getElementById("resultado").innerText = resultado;
    document.getElementById("numero-1").value = "";
    document.getElementById("numero-2").value = "";
    document.getElementById("operacion").value = "";
    
    /* if (numero1 != "" && numero2 != "" && operaciones != ""){
        alert("continua con el proceso");
    }else {
        alert("hay campos sin llenar");
    } */
    /* if( operaciones == "suma" || operaciones == "resta" || operaciones == 'multi' || operaciones == 'divi') {
        return true;
    }else if( numero1 == null || numero1.length == 0 || /^\s+$/.test(numero1) ) {
        alert("hay campos sin llenar");
    }else if( numero2 == null || numero2.length == 0 || /^\s+$/.test(numero2) ) {
        alert("hay campos sin llenar");
    } */
    
}


