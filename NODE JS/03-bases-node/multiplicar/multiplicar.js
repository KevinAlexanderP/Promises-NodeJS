const fs = require('fs')

// modulo.exports.CA

let crearArchivo = (base) => {

        return new Promise((resolve, reject) => {
            let data = '';

            for (i = 1; i < 10; i++) {
                data += `${base} * ${i} = ${base * i}\n`
            }

            fs.writeFile(`tabla-${base}`, data, (err) => {
                if (err) reject(err);
                else
                    resolve(`tabla-${base}.txt`)
                console.log('The file has been created');
            });


        })

    }
    // fs.writeFile(file,data[options],callback)

module.exports = {
    crearArchivo // no es necesario dos veces solo con una
}