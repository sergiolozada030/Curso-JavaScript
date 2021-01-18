
const heroes = {
    capi: {
        nombre: 'Capitán America',
        poder: 'Aguantar Inyecciones sin morir'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Absurda Cantidad de Dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'La mejor reacción alergica a la picadura de arañas'
    }
}

export const buscarHeroe = ( id ) => {

    const heroe = heroes[id];

    return new Promise((resolve, reject) => {

        if (heroe) {

            setTimeout(() => resolve( heroe ), 1000)
        
        } else {
            reject( `No existe el heroe con el id: ${id}` )
        }

    });
}

export const buscarHeroeAsync = async( id ) => {

    const heroe = heroes[id];

    if (heroe) {
        return heroe;
    } else {
        throw `No existe el heroe con el id: ${id}`;
    }
}

const promesaLenta = new Promise( ( resolve, reject) => {
    setTimeout(() => resolve('Promesa Lenta'), 2000);
});

const promesaMedia = new Promise( ( resolve, reject) => {
    setTimeout(() => resolve('Promesa Media'), 1500);
});

const promesaRapida = new Promise( ( resolve, reject) => {
    setTimeout(() => resolve('Promesa Rápida'), 1000);
});

export{
    promesaLenta,
    promesaMedia,
    promesaRapida
}