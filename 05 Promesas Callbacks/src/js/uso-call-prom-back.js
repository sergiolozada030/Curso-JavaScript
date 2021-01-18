import './styles.css';
import { buscarHeroe  as buscarHeroeCallbacks} from './js/callbacks'
import { buscarHeroe } from './js/promesas'

const heroeIdOne = 'spider';
const heroeIdTwo = 'iron';

// Uso de las promesas y los callbacks

/* buscarHeroe(heroeId, ( err, heroe ) => {

    if (err) {
        console.error(err);
    } else {
        console.log(heroe);
    }
    
}); */

/* buscarHeroe( heroeId ).then( heroe => {

    console.log(`Enviando a ${heroe.nombre} a la misión `);

}); */

Promise.all([ buscarHeroe(heroeIdOne), buscarHeroe(heroeIdTwo) ])
.then( ([heroeIdOne, heroeIdTwo]) => {


    console.log(`Enviando a ${heroeIdOne.nombre} y ${heroeIdTwo.nombre} a la misión `);

}).catch( err => {

    alert( err );

}).finally( () => {

    console.log('Termina Ejecución Promise.all');
});

console.log('Fin de programa');


