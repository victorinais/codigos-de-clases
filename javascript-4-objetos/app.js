var allPersons = [];
function guardarUsuario(){
    
    let nombres = document.getElementById('nombres').value;
    let apellidos = document.getElementById('apellidos').value;
    let correo = document.getElementById('correo').value;

    let persona = {
        nombres : nombres,
        apellidos : apellidos,
        correo : correo
    }
    allPersons.push(persona);

    allPersons.forEach(function(person){
        document.getElementById('resNombre').innerText = person.nombres;
        document.getElementById('resApellido').innerText = person.apellidos;
        document.getElementById('resCorreo').innerText = person.correo;
    })
    //console.log(allPersons);
   
}