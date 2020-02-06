let empleados = [{
        id: 1,
        nombre: 'Fernando'
    }, {
        id: 2,
        nombre: 'Melissa'
    }, {
        id: 3,
        nombre: 'Juan'
    }

]

let salarios = [{
        id: 1,
        salario: 1000


    },
    {
        id: 2,
        salario: 2000


    }
]

let getUserById = (id, callback) => {
    // por el find añade el empleado , no fue definido auto
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    console.log(empleadoDB)
    if (!empleadoDB) {
        callback(`No existe un empleado con el${id}`)
    } else {
        callback(null, empleadoDB)
    }


}

getUserById(30)