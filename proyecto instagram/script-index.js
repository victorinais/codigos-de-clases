
let btn = document.getElementById("btn");
btn.addEventListener("click", iniciarSesion);

function iniciarSesion() {

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

    let nombre = document.getElementById("Nombre").value;
    let correo = document.getElementById("Correo").value;
    let password = document.getElementById("Contraseña").value;


    persons.forEach(function (person, key) {
        if (correo == person.correo && password == person.password) {
            sessionStorage.setItem("nombre", person.nombre);
            sessionStorage.setItem("genero", person.genero);
            sessionStorage.setItem("pos", key)
            sessionStorage.setItem("auth", 1);
            location.href = "home.html";
        }
    });

    alert("Los datos no coinciden");




}




