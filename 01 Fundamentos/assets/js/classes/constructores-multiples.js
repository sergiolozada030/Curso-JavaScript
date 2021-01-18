

class Persona {

    constructor( nombre, apellido, pais ){
        
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;

    }

    static porObjeto({ nombre, apellido, pais}) {
        return new Persona( nombre, apellido, pais );   
    }

    getInfo() {
        console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }

}

const mama = {
    nombre: 'Luci',
    apellido: 'Perea',
    pais: 'Brasil'
}

const persona1 = new Persona('Sergio', 'Lozada', 'Brasil');
const persona2 = Persona.porObjeto( mama );

persona1.getInfo();
persona2.getInfo();

