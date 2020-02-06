// const multiplicar = require('./multiplicar/multiplicar')

// destructuracion 
const { crearArchivo } = require('./multiplicar/multiplicar')
let base = 4;

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado ${archivo}`))


// //file system en node js
// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado ${archivo}`))