import { buscarHeroeAsync, buscarHeroe } from "./promesas";


const heroesIds = ['capi','iron','spider'];
const heroesPromesas = heroesIds.map( id => buscarHeroe( id ));


/* export const obtenerHeroesArr = async() => {

    const heroesArr = [];

    for (const id of HeroesIds) {

         heroesArr.push( buscarHeroe( id ));
    
    }

    return  await Promise.all(heroesArr);
}; */

// Forma mas limpia de hacer lo mismo 

export const obtenerHeroesArr = async() => {
    return await Promise.all( heroesIds.map( buscarHeroe ));
}

export const obtenerHeroesAwait = async( id ) => {

    try{
        const heroe = await buscarHeroeAsync( id );
        return heroe;
    }catch( err ){
        console.log('Catch,', err);
        return{
            nombre: 'Sin Nombre',
            poder: 'Sin Poder'
        }
    }
}

export const heroesCiclo = async() => {

    console.time('HeroesCiclo');

    /* const heroes = await Promise.all( heroesPromesas );
    heroes.forEach( heroe => console.log(heroe)); */

    // Misma forma pero con for await

    for await(const heroe of heroesPromesas) {
        console.log(heroe);
    }

    console.timeEnd('HeroesCiclo');

}

export const HeroeIfAwait = async(id) => {

    if ((await buscarHeroe(id)).nombre === 'Ironman') {
        console.log('Es el mejor de todos');
    }else{
        console.log('Naaa');
    }
}