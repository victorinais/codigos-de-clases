let btn = document.getElementById("btn");
btn.addEventListener("click", cerrarSesion);

let nombre = sessionStorage.getItem('nombre');
let auth = sessionStorage.getItem("auth");

document.getElementById('nombre').innerText = nombre;

if (auth != 1) {
    location.href = "index.html";
}

function cerrarSesion() {
    sessionStorage.setItem("nombre", "");
    sessionStorage.setItem("auth", "");
    location.href = "index.html";
}

