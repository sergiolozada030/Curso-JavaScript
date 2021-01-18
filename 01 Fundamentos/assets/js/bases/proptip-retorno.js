// Función Tradicional 
function crearPersona (nombre, apellido){
    return { nombre, apellido}
}

// Función de flecha 
const crearPersonaTwo = (nombre, apellido) => ({nombre, apellido}) 

const persona = crearPersonaTwo( 'Cristiano', 'Ronaldo');
console.log(persona);

const imprimeArgumentos = (edad, ...args) => {
    return args;
}

const [ casado, vivo, nombre, dorsal] = imprimeArgumentos(26,true,false,'James', 10);
console.log({casado, vivo, nombre, dorsal});


const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I','Mark V', 'HulkBuster']
}

const imprimePropiedades = ({nombre, codeName, vivo, edad, trajes}) => {
    console.log(nombre);  
    console.log(codeName);  
    console.log(vivo);  
    console.log(edad);  
    console.log(trajes);  
}

imprimePropiedades( tony );


