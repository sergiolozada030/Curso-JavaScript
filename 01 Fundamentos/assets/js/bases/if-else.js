
let a = 5;

if (a > 10) {
    console.log('a es mayor a 10');
}else{
    console.log('a es menor a 10');
}

//console.log('Fin del programa');

const hoy = new Date();
let dia = hoy.getDay();

// arr días de la semana
const dias = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];

const calcularDia = (dia) =>  dias[dia];

 console.log( calcularDia(1) || 'Dia no valido'); 


