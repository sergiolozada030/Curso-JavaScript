let juegos = ['Pes 2020','Fifa 21','Gear of War','Halo'];
console.log('Largo: ', juegos.length);

let ultimo = juegos [juegos.length -1]

console.log('Ultimo Element: ', ultimo);

juegos.forEach((elemnto,indece, arr) =>{
    console.log({elemnto,indece,arr});
});

juegos.push('Dream league Soccer')
console.log({juegos});