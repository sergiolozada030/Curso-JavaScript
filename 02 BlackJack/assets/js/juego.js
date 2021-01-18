
const miModulo = (() => {

'use strict'
    
let deck = [];
const tipos =  ['C','D','H','S'];
const especiales = ['A','J','K','Q'];
let puntosJugadores = [];


// Referencias del HTML
const btnPedirCarta = document.querySelector('#btnPedirCarta');
const puntosHtml = document.querySelectorAll('small')
const divCartasJugadores = document.querySelectorAll('.divCartas');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevoJuego = document.querySelector('#btnNuevoJuego');
    
    
const inicializarJuego = ( numJugadores = 2) => {
    deck = crearDeck();
    puntosJugadores = [];
    for (let i = 0; i < numJugadores; i++) {
        puntosJugadores.push(0);
    }
    
    puntosHtml.forEach(element => element.innerText = 0);

    /* 
    Remplazo del ciclo
    puntosHtml[0].innerText = 0;
    puntosHtml[1].innerText = 0; */

    divCartasJugadores.forEach(element => element.innerHTML = '');
    btnPedirCarta.disabled = false;
    btnDetener.disabled = false;
 
}
    
// Función para crear un nuevo deck
const crearDeck = () => {

    deck = [];
    for (let i = 2; i <= 10; i++) {
        for(let tipo of tipos){
                deck.push( i + tipo );
        }  
    }

    for(let esp of especiales){
        for(let tipo of tipos){
                deck.push( esp + tipo );
        }
    }
    
    return  _.shuffle(deck);;
    
}


// Función para pedir una nueva carta 
const pedirCarta = () => {
        
    if (deck.length === 0) {
        return;
    }
    return deck.pop();
}

// Funcion para sacar el valor de la carta 
const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return (isNaN( valor )) ? (valor === 'A') ? 11 : 10 : Number(valor); 
}

// Turno: 0 = Primer Jugador y el ultimo sera la pc
const acumularPuntos = ( carta, turno ) => {

    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
    puntosHtml[turno].innerText = puntosJugadores[turno];

    return puntosJugadores[turno];
}

const crearCarta = (carta, turno ) => {

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append( imgCarta );
        
}

// Determinar Ganador
const determinarGanador = () => {

    const [ puntosMinimos, puntosComputadora ] = puntosJugadores;

    setTimeout(() => {
            
        if (puntosComputadora === puntosMinimos ) {
            alert('Upss! Nadie Gana :(');
        }else if ( puntosMinimos > 21) {
            alert('Computadora Gana!');
        }else if(puntosComputadora > 21){
            alert('Jugador Gana!')
        }else{
            alert('Computadora Gana!');
        }
    
        }, 100);
}

// Turno Computadora
const turnoComputadora = ( puntosMinimos ) => {

    let puntosComputadora = 0; 

    do {
        const carta = pedirCarta();

        puntosComputadora = acumularPuntos( carta , puntosJugadores.length - 1)
        crearCarta(carta, puntosJugadores.length - 1); 

    } while ( (puntosComputadora < puntosMinimos) && ( puntosMinimos <= 21 ));
        
    determinarGanador();
}

// Eventos
btnPedirCarta.addEventListener('click', () => {
        
    const carta = pedirCarta();
        
   const puntosJugador = acumularPuntos(carta, 0);
   crearCarta(carta, 0)

    if ( puntosJugador > 21 ) {
      
        btnPedirCarta.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador );

    }else if ( puntosJugador === 21 ){
       
        btnPedirCarta.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador );

    }
});

 // Evento Boton Detener 
btnDetener.addEventListener('click', () => {

    btnPedirCarta.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora( puntosJugadores[0] );
});


    // Evento Boton Nuevo Juego 
btnNuevoJuego.addEventListener('click', () => {

    inicializarJuego();

});
    
    return {
        nuevoJuego: inicializarJuego
    }
})();

