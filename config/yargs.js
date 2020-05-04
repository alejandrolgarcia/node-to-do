// const argv ...
// comando crear 'crear nuevo ToDo', bandera -- descripcion -d
// comando actualizar 'actualizar ToDo', bandera --descripcion -d, --completado -c true
// --help

const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion del ToDo'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marcar como completado un ToDo'
}


const argv = require('yargs')
    .command('crear', 'Crear nuevo ToDo', {
        descripcion
    })
    .command('actualizar', 'Actualizar ToDo', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar del arreglo un ToDo', {
        descripcion
    })
    .help().argv;

module.exports = {
    argv
}