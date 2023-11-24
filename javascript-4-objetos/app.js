var allPersons = [];
function guardarUsuario(){
    
    let nombres = document.getElementById('nombres').value;
    let apellidos = document.getElementById('apellidos').value;
    let correo = document.getElementById('correo').value;

    if(nombres != ""){
        document.getElementById('nombres').classList.add("is-valid");
        document.getElementById('nombres').classList.remove("is-invalid");
    }else{
        document.getElementById('nombres').classList.add('is-invalid');
        document.getElementById('nombres').classList.remove('is-valid');
    }
    if (apellidos != ""){
        document.getElementById('apellidos').classList.add("is-valid");
        document.getElementById('apellidos').classList.remove("is-invalid");
    }else{
        document.getElementById('apellidos').classList.add('is-invalid');
        document.getElementById('apellidos').classList.remove('is-valid');
    }
    if (apellidos != ""){
        document.getElementById('correo').classList.add("is-valid");
        document.getElementById('correo').classList.remove("is-invalid");
    }else{
        document.getElementById('correo').classList.add('is-invalid');
        document.getElementById('correo').classList.remove('is-valid');
    }

    document.getElementById("nombres").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("correo").value = "";

    let persona = {
        nombres : nombres,
        apellidos : apellidos,
        correo : correo
    }
    
    allPersons.push(persona);
    console.log(allPersons);
    contador = 0;

    allPersons.forEach(function(person){
        contador++;
        document.getElementById('resNombre'+contador).innerText = person.nombres;
        document.getElementById('resApellido'+contador).innerText = person.apellidos;
        document.getElementById('resCorreo'+contador).innerText = person.correo;

        /* document.createElementById("contenedor").innerText = person.nombres;
        contenedor.appendChild("element"); */

        console.log(contador);
    })
    //console.log(allPersons);
   
}

document.getElementById("nombres").focus();
fecha = new Date();
console.log(fecha);