
const heroes = ['Ninja','Superman','Robin Hoob','Falcao'];


console.warn('For');

for (let i = 0; i <  heroes.length; i++) {
   const element = heroes[i];
   console.log('Heroes: ', element);
     }

console.warn('For In');

for (let i in heroes){
    console.log( 'Super Heroe: ',heroes[i] );
}

console.warn('For Of');

for ( let heroe of heroes ){
    console.log('Villanos: ', heroe);
}