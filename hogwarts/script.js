// Paso 1
let estudiante = {
    nombre: "Harry Potter",
    edad: 11,
    familia: "Potter",
    linaje: "Mestizo",
    casa: null,
    animalPatronus: null,
    cualidades: ["Valor", "Fuerza", "Audacia"]
};

// Paso 2
let clases = {
    transformaciones: "Profesor Kevin Slughorn",
    herbologia: "Profesor Maria Umbridge",
    pociones: "Profesor Liliana McGonagall",
    encantamientos: "Profesora Jackie",
    defensaContraLasArtesOscuras: "Profesor Robinson Snape",
    animalesMagicos: "Profesor David Filch",
    historiaDeMagia: "Profesor Ronald Sprout"
};

// Paso 3
let sombreroSeleccionador = {
    seleccionarCasa: function (estudiante) {
        if (estudiante.cualidades.includes("Valor")) {
            estudiante.casa = "Gryffindor";
        } else if (estudiante.cualidades.includes("Justicia")) {
            estudiante.casa = "Hufflepuff";
        } else if (estudiante.cualidades.includes("Creatividad")) {
            estudiante.casa = "Ravenclaw";
        } else if (estudiante.cualidades.includes("Ambición")) {
            estudiante.casa = "Slytherin";
        }
    }
};

sombreroSeleccionador.seleccionarCasa(estudiante);

// Paso 4
let claseTransformaciones = {
    profesor: "Profesor Kevin Slughorn",
    horario: "Lunes 9:00 AM",
    boggart: null,
    realizarTransformacionRiddikulus: function () {
        if (this.boggart) {
            console.log("¡Riddikulus!");
            this.boggart = null;
        }
    },
    enfrentarBoggart: function (boggart) {
        this.boggart = boggart;
        console.log("Un boggart ha aparecido y se ha transformado en tu peor miedo.");
        this.realizarTransformacionRiddikulus();
        console.log("Has transformado el boggart en algo ridículo y ya no te asusta.");
    }
};

let boggartEjemplo = "Araña gigante";
claseTransformaciones.enfrentarBoggart(boggartEjemplo);

// Paso 5
let defensaContraLasArtesOscuras = {
    profesor: "Profesor Robinson Snape",
    generarAnimalPatronus: function () {
        let animales = ["ciervo", "nutria", "zorro", "liebre"];
        let indice = Math.floor(Math.random() * animales.length);
        return animales[indice];
    },
    enfrentarDementor: function (estudiante) {
        if (estudiante.animalPatronus) {
            console.log("Has invocado a tu patronus, un " + estudiante.animalPatronus + ", y has repelido al dementor.");
        } else {
            console.log("No has podido invocar a tu patronus. El dementor te ha absorbido y serás llevado a la enfermería.");
        }
    }
};

estudiante.animalPatronus = defensaContraLasArtesOscuras.generarAnimalPatronus();
defensaContraLasArtesOscuras.enfrentarDementor(estudiante); 

// Paso 6
console.log(estudiante);