function operaciones() {

    let operaciones = document.getElementById('operacion').value;
    let numero1 = document.getElementById("numero-1").value;
    numero1 = parseInt(numero1);
    let numero2 = document.getElementById("numero-2").value;
    numero2 = parseInt(numero2);

    if (operaciones == 'suma') {
        resultado = numero1 + numero2;
    }
    else if (operaciones == 'resta') {
        resultado = numero1 - numero2;
    }
    else if (operaciones == 'multi') {
        resultado = numero1 * numero2;
    }
    else if (operaciones == 'divi') {
        resultado = numero1 / numero2;
    }
    document.getElementById("resultado").innerText = resultado;
    document.getElementById("numero-1").value = "";
    document.getElementById("numero-2").value = "";
    document.getElementById("operacion").value = "";

}