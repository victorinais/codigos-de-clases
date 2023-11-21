function sumar(){
    let dato1 = document.getElementById("dato-1").value;
    let dato2 = document.getElementById("dato-2").value;
    dato1 = parseInt(dato1);
    dato2 = parseInt(dato2);
    resultado = dato1 + dato2;
    document.getElementById("resultado").innerText = resultado;
    document.getElementById("dato-1").value = "";
    document.getElementById("dato-2").value = "";
}