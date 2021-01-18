
const dia = 1; 
const horaActual = 10;


const horaApertura = ([0,6].includes(dia)) ? 9 : 11;
const mensaje = horaActual >= horaApertura ? 'Esta Abierto' : `Esta cerrado, Abrimos a las ${horaApertura}`

console.log({ horaApertura , mensaje});
 