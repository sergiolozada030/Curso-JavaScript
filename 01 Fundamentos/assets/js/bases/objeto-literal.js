let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I','Mark V', 'HulkBuster']

}

console.log(personaje);
console.log('Nombre:', personaje['nombre']);
console.log('No. Trajes: ', personaje.trajes.length);

//delete personaje.vivo;
console.log(personaje);

const values = Object.values(personaje)
console.log(values);
