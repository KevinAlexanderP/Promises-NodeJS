// // las promesas tienen 3 estados pendiente,completado,rechazado
// // pueden ser completadas por un estado(fullfilled with a value), o rechazadas por un motivo(rejected with a reason)
// let myFirstPromise = new Promise((resolve, reject) => {
//     // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
//     // In this example, we use setTimeout(...) to simulate async code. 
//     // In reality, you will probably be using something like XHR or an HTML5 API.
//     setTimeout(function() {
//         resolve("Success!") // Yay! Everything went well!
//     }, 250)
// })

// myFirstPromise.then((successMessage) => {
//     // successMessage is whatever we passed in the resolve(...) function above.
//     // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
//     console.log("Yay! " + successMessage)
// });

// // wrapear funciones y callbacks

// function
// const promise = () => {
//         return new Promise((reject, resolve) => {

//         })

//     }
//     // argumento con 3 estados objecto
// const prom = () {
//     return new Promise((reject, resolve) => {

//     })

// }


// function isMyName(name) {
//     return new Promise((reject, resolve) => {
//         if (name === isMyName) {
//             resolve(true)
//         }
//         reject(false)
//     })

// }

function isMyName(name) {
    const myName = "Charles"
    return new Promise((reject, resolve) => {
        if (name !== isMyName) {
            return reject(false)
        }
        resolve(true)
    })

}

isMyName('luis')
    .then(response => {
        console.log("TODO OK: ", response)

    })
    .catch(error => {
        console.error("TODO MAL: ", error)
    })

function planishPromise() {
    return new Promise((resolve, reject) => {
        planish(wall, (error, wallisPlanished) => {
            if (error) return (reject)
            resolve(wallisPlanished)
        })

    })
}

function paintPromise() {
    return new Promise((resolve, reject) => {
        paint(wall, (error, wallPainted) => {
            if (error) return (reject)
            resolve(wallPainted)
        })

    })
}

buildPromise(wallToBuild)
    .then(wallBuilt => {
        planishPromise(wallBuilt)
            .then(wallisPlanished => {

            })

    })
    .catch(error => {
        console.error("ERROR AT PLANISHED PROM")

    })
    .catch(error => {
        console.error("ERROR AT BUILT PROM")

    })