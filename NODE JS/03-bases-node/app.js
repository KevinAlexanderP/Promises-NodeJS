const fs = require('fs')




// fs.writeFile(file,data[options],callback)



let base = 2;
let data = '';

for (i = 1; i < 10; i++) {
    data += `${base} * ${i} = ${base * i}\n`
}

fs.writeFile(`tabla-${base}`, data, (err) => {
    if (err) throw err;
    console.log('The file has been created');
});

//file system en node js
crearArchivo(base)
    .then(archivo => console.log(`Archivo creado ${archivo}`))