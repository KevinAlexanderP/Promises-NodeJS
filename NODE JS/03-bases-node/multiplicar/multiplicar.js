const fs = require('fs')



let crearArchivo = (base) => {

        return new Promise

    }
    // fs.writeFile(file,data[options],callback)


let data = '';

for (i = 1; i < 10; i++) {
    data += `${base} * ${i} = ${base * i}\n`
}

fs.writeFile(`tabla-${base}`, data, (err) => {
    if (err) throw err;
    console.log('The file has been created');
});