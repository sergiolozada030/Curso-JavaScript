// Forma Tradicional
function saludar(nombre){
    console.log('Hola ' + nombre);
}

const saludarTwo = function(){
    console.log('Hola Mundo');
}

// Funcion de Flecha
const saludarFlecha = () =>{
    console.log('Funcion de flecha');
}

// llamando a una funcion 
saludar('Sergio');


function sumar(a,b){
    return a+b;
}

const sumar2 = (a,b) => a+b ;

const resultado = sumar2(99,1201);
console.log('Resultado : ',resultado);

const getAleatorio = () => Math.random();

console.log( getAleatorio() );