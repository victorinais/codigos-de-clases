//for en javascript
//for(var i=0;i<11;i++){
//   console.log('sos el mejor ' + i)
//}

/*primer ejemplo
var nombre = "victor";

function imprimirNombre(){
    console.log(nombre);
}
imprimirNombre();*/

/* function ejemploFuncion(){
    var localVariable = "Soy local";

    if(true) {
        var otraVariable = "Tambien soy local";
        let variableBloque = "Tengo ambito de bloque";
        console.log(variableBloque)
    }

    console.log(localVariable);
    console.log(otraVariable);
    
}
ejemploFuncion(); */

function actualizarTexto(){
    document.getElementById('miElemento').innerText = 'Nuevo texto';
}

function actualizarHTML (){
    document.getElementById("h2").innerHTML = '<small>Seremos los mejores programadores</small>'
}

function actualizarTitulo(){
    document.getElementById('img-colombia').setAttribute('title' , 'Esto es un perfil');
}
function actaulizarAVerde(){
    document.getElementById('cuadro').classList.remove('cuadro-red');
    document.getElementById('cuadro').classList.add('cuadro-green');
    console.log("deberia el cuadro pasar a color verde")
}
function actaulizarARojo(){
    document.getElementById('cuadro').classList.remove('cuadro-green');
    document.getElementById('cuadro').classList.add('cuadro-red');
    console.log("deberia el cuadro pasar a color rojo")
}
function actualizarColor(){
    document.getElementById('cuadro').classList.toggle('cuadro-red','cuadro-green');
}
