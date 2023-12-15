//arreglo

/* let arreglo = [13,25,63,85,91];

for(let i = 0; i < arreglo.length; i++){
    console.log(`el indice es [${i}] y el valor es ${arreglo[i]}`);
} */

//matriz

/* let matriz = [[10,20,30],[40,50,60],[70,80,90],[100,200,300]];

for(let filas = 0; filas < matriz.length; filas++){
    for(let col = 0; col < matriz[filas].length; col++){
        console.log(`${filas} - ${col}`,matriz[filas][col]);
    }
} */

//funciones
/* let x = 57;
let z = 20;
            //parametros
function sumar(a, b){
    let suma = a+b;
    return suma
}               //argumentos
console.log(sumar(x,z)); */

//funciones incorporadas de javascript
/* let cadena = "mundote";
console.log(cadena.length);
cadena = "educacion"
console.log(cadena);

for(let i = 0; i < cadena.length; i++){
    console.log(i,cadena[i]);
    
}
let cadena1 = "hola mundo";
console.log(cadena1.substring(5)) */
/* 
let a = "10";
let b = "20";

let c = parseInt(a) + parseInt(b);
console.log(c);
 */
 
/* let a = 7.5;

console.log(Math.round(a));
console.log(Math.trunc(a)); */

let persona = {
    nombre: "mauricio",
    apellido: "Botero",
    edad: 30,
    correo: "elpepe@gmail.com",
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    } 
} 
let persona2 = {
    nombre: "leonel",
    apellido: "berrio",
    edad: 37
}
console.log(persona.nombreCompleto.call(persona2));


/* persona.telefono = "3145897523";
persona.nombre = "patroclo"; */
/* console.log(persona["edad"]); */

/* delete persona.nombreCompleto; */

/* let array = Object.keys(persona);
console.log(array);
let objetoString = JSON.stringify(persona);
console.log(objetoString); */

/* for(i in persona){
    console.log(persona[i]); 
} */


/* let persona1 = new Object();
persona1.nombre = "alberto";
persona1.apellido = "vero5";
persona1.edad = "velez"; */

/* console.log(persona1.nombre,persona1.apellido); */

/* function Persona(nombre,apellido,edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

let padre = new Persona("mario","yepez",48);

let madre = new Persona("luz","ocampo",53);

let hijo = new Persona("cristian","ocampo",21);


Persona.prototype.telefono = "3115698244";
padre.telefono = "555555555"

console.log(padre);
console.log(madre);
console.log(hijo); */