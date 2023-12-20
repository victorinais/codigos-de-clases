

let btn = document.getElementById("btn");
btn.addEventListener("click", cerrarSesion);

let nombre = sessionStorage.getItem('nombre');
let auth = sessionStorage.getItem("auth");
let genero = sessionStorage.getItem("genero");


document.getElementById('nombre').innerText = nombre;



if (auth != 1) {
    location.href = "index.html";
}

function cerrarSesion() {
    sessionStorage.setItem("nombre", "");
    sessionStorage.setItem("auth", "");
    sessionStorage.setItem("genero", "");
    sessionStorage.setItem("pos", "")
    location.href = "index.html";
}


if (genero == "femenino") {
    document.getElementById("body").classList.remove("Masculino");
    document.getElementById("body").classList.add("Femenino");
} else {
    document.getElementById("body").classList.remove("Femenino");
    document.getElementById("body").classList.add("Masculino");
}

let row = document.getElementById('row');

let persons = [

    {
        nombre: "Samuel",
        correo: "samuel@gmail.com",
        genero: "masculino",
        password: "password",
        images: [
            './images/img-11.jpg',
            './images/img-12.jpg',
            './images/img-13.jpeg',
            './images/img-14.webp',
            './images/img-15.jpg',
            './images/img-16.jpg',
            './images/img-17.webp',
            './images/img-18.jpg',
            './images/img-19.jpg',
            './images/img-20.jpg',
        ]
    }, {
        nombre: "pedro",
        correo: "pedro@gmail.com",
        genero: "masculino",
        password: "password",
        images: [
            './images/img-21.jpg',
            './images/img-22.jpg',
            './images/img-23.jpg',
            './images/img-24.jpg',
            './images/img-25.jpg',
            './images/img-26.jpg',
            './images/img-27.jpg',
            './images/img-28.jpg',
            './images/img-29.jpg',
            './images/img-30.jpg',
        ]
    }, {
        nombre: "Manuela",
        correo: "manuela@gmail.com",
        genero: "femenino",
        password: "password",
        images: [
            './images/img-1.jpg',
            './images/img-2.jpeg',
            './images/img-3.jpg',
            './images/img-4.jpg',
            './images/img-5.webp',
            './images/img-6.jpg',
            './images/img-7.jpg',
            './images/img-8.jpg',
            './images/img-9.webp',
            './images/img-10.jpeg',
        ]
    }
]; 

let pos = sessionStorage.getItem("pos");

persons[pos].images.forEach(function (image) {
    let col = document.createElement('div');
    col.classList.add("col-md-3");
    row.appendChild(col);

    // img
    let img = document.createElement('img');
    img.setAttribute('src', image)
    img.style.width = "300px";
    img.style.height = "100%";
    col.appendChild(img);

});