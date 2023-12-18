let btn = document.getElementById("boton");
btn.addEventListener("click",cerrarSesion);


let auth = sessionStorage.getItem("auth");
let nombre = sessionStorage.getItem('nombre');
console.log(nombre);

document.getElementById('nombre').innerText = nombre;

if (auth != 1) {
    location.href = "index.html";
}


function cerrarSesion() {
    sessionStorage.setItem("nombre", "");
    sessionStorage.setItem("auth", "");
    location.href = "index.html";
}
