

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

class Heroe extends Persona {

    clan = 'Sin clan';

    constructor(nombre, codigo, frase){
        super(nombre, codigo, frase);

        this.clan = 'TC';
    }

    quienSoy(){
        console.log(`Soy ${this.nombre}, clan: ${this.clan}`);
        super.quienSoy();
    }
}

const spiderMan = new Heroe('Peter Parker', 'SpiderMan', 'Soy tu amigable vecino Spiderman');
//const spiderMan = new Heroe();
 console.log( spiderMan );

spiderMan.quienSoy();
