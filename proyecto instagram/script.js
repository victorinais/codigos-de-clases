let btn = document.getElementById("btn");
btn.addEventListener("click", iniciarSesion);

function iniciarSesion() {
    let persons = [
        {
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
        },
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
        }
    ];

    let genero = document.getElementById("Genero").value;
    if(genero == "M"){
        location.href = "masculino.html";
    }else {
        location.href = "femenino.html";
    }
}