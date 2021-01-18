
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

// callback retorna
export const buscarHeroe = ( id , callback) => {

    const heroe = heroes[id];

    if (heroe) {
        callback( null, heroe );
    } else {
        //un error
        callback(`No existe el heroe con el id: ${id}`);
    }

} 