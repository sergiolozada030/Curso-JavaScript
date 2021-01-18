

class Singleton {

    static instancia;
    nombre = '';

    constructor ( nombre = ''){

        if ( !!Singleton.instancia ) {
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;

    }
}

const instancia1 = new Singleton('IronMan');
const instancia2 = new Singleton('SpiderMan');

console.log(`El nombre de la instacia1 es: ${instancia1.nombre}`);
console.log(`El nombre de la instacia1 es: ${instancia2.nombre}`);