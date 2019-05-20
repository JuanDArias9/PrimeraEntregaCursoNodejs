let cursos = [
    {
        id: 1,
        nombre: 'Curso de Ingles Intermedio',
        duracion: 40,
        valor: 150000
    },
    {
        id: 2,
        nombre: 'Curso de Economía',
        duracion: 32,
        valor: 170000 
    },
    {
        id: 3,
        nombre: 'Curso de Ingeniería de Software',
        duracion: 40,
        valor: 190000
    },
    {
        id: 4,
        nombre: 'Curso de Node.JS',
        duracion: 32,
        valor: 200000
    } 
]

let obtenerCurso = id => {
    let curso = cursos.find(function(cursos){
        return cursos.id == id;
    });
    return curso;
}

module.exports = {
    cursos,
    obtenerCurso
}
