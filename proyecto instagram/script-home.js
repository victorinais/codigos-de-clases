let btn = document.getElementById("btn");
btn.addEventListener("click", cerrarSesion);

let nombre = sessionStorage.getItem('nombre');
let auth = sessionStorage.getItem("auth");
let genero = sessionStorage.getItem("genero");


document.getElementById('nombre').innerText = nombre;
document.getElementById('ver').innerText = genero;


if (auth != 1) {
    location.href = "index.html";
}

function cerrarSesion() {
    sessionStorage.setItem("nombre", "");
    sessionStorage.setItem("auth", "");
    sessionStorage.setItem("genero", "");
    location.href = "index.html";
}


if (genero == "femenino"){
    document.getElementById("body").classList.remove("Masculino");
    document.getElementById("body").classList.add("Femenino");
} else {
    document.getElementById("body").classList.remove("Femenino");
    document.getElementById("body").classList.add("Masculino");
}
