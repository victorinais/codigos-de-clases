let boton = document.getElementById("btn");
boton.addEventListener("click",mostrarDatos);

function mostrarDatos(){
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let familia = document.getElementById("familia").value;
    let linaje = document.getElementById("linaje").value;
    let cualidades = document.getElementById("cualidades").value;

    if(cualidades == "opcion-1"){
        cualidades = document.getElementById("opcion-1").innerHTML;
    }else if(cualidades == "opcion-2"){
        cualidades = document.getElementById("opcion-2").innerHTML;
    }else if(cualidades == "opcion-3"){
        cualidades = document.getElementById("opcion-3").innerHTML;
    }else if(cualidades == "opcion-4"){
        cualidades = document.getElementById("opcion-4").innerHTML;
    }
    console.log(nombre,edad,familia,linaje,cualidades);
}