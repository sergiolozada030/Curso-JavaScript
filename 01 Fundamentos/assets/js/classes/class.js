
class Persona {

    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' Intancias'
    }

    static mensaje() {
        console.log('Hola a todos, soy un método stáctico');
    }

    nombre = '';
    codigo = '';
    frase = '';

    constructor( nombre, codigo, frase) {

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

const spiderMan = new Persona('Peter Parker', 'SpiderMan', 'Soy tu amigable vecino Spiderman');
//const ironMan = new Persona('Tony Stark', 'IronMan', 'Yo Soy Tony Stark');

spiderMan.setComidaFavorita = 'El pie de cereza de la tía May';

// console.log( spiderMan.getComidaFavorita );
// console.log( spiderMan );

// console.log( ironMan );
 spiderMan.miFrase();

//Persona._conteo = 2;
console.log('Conteo stático', Persona._conteo);
 Persona.mensaje();