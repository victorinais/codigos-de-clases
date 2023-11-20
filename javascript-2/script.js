function capturarInfo(){
    var input = document.getElementById("input").value;
    console.log(input.toUpperCase());
    document.getElementById("input").value = "";
}
function capturarColor(){
    var color = document.getElementById("color").value;
    console.log(color)
    document.getElementById("cuadro").style.backgroundColor = color;
    
}

/* Primera forma de ocultar y mostrar contenido con js */

function mostrarPaisaje(){
    let nuevaImagen = "./paisaje-1.jpg";
    document.getElementById("imagen").setAttribute("src",nuevaImagen);
}   
function mostrarCarros(){
    let nuevaImagen= "./imagen-2.jpg";
    document.getElementById("imagen").setAttribute("src",nuevaImagen);
} 
function mostrarCiudad(){
    let nuevaImagen= "https://cdn.pixabay.com/photo/2017/03/29/15/18/tianjin-2185510_960_720.jpg";
    document.getElementById("imagen").setAttribute("src",nuevaImagen);
} 


/* Segunda forma de mostrar y ocultar contenido en js */

function cambiarACiudad(){
    document.getElementById("paisaje").style.display = "none";
    document.getElementById("ciudad").style.display = "block";
}
function cambiarAPaisaje(){
    document.getElementById("ciudad").style.display = "none";
    document.getElementById("paisaje").style.display = "block";
}

/* Tercera forma de mostrar y ocultar contenido en js */

function cambiarAArbol(){
    document.getElementById("auto").classList.add("display-none");
    document.getElementById("arbol").classList.remove("display-none");
}
function cambiarAAuto(){
    document.getElementById("arbol").classList.add("display-none");
    document.getElementById("auto").classList.remove("display-none");
}
