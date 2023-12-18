
let btn = document.getElementById("boton");
btn.addEventListener("click", iniciarSesion);


function iniciarSesion() {

    let persons = [
        {
            nombre: "mario",
            correo: "mario@gmail.com",
            contraseña: "mario1"
        },
        {
            nombre: "pedro",
            correo: "pedro@gmail.com",
            contraseña: "pedro2"
        },
        {
            nombre: "alberto",
            correo: "alberto@gmail.com",
            contraseña: "alberto3"
        }
    ]

    let correo = document.getElementById("correo").value;
    let contraseña = document.getElementById("contraseña").value;

    persons.forEach(function (person) {
        if (correo == person.correo && contraseña == person.contraseña) {
            sessionStorage.setItem("nombre", person.nombre);
            sessionStorage.setItem("auth", 1);
            location.href = "home.html";
        } else {
            alert("El correo y la contraseña no coinciden");
        }
    });
}




