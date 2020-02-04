// setTimeout(() => {
//     console.log('Hola mundo')
// }, 3000)

let getUsuariobyId = (id, callback) => {

    let usuario = {
        nombre: 'Fernando',
    }

    if (id !== 10) {
        callback(`El usuario con ${id} no existe en la BD de datos`)
    } else {
        callback(null, usuario)
    }

}

getUsuariobyId(10, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log('Usuario', usuario)
})