const {cursos, obtenerCurso} = require('./cursos');
const fs = require('fs');
const express = require('express')
const app = express()

//app.use(express.static(__dirname + '/public'));

const opciones = {
    idCurso: {
        alias: 'i',
        demand: true
    },
    nombreInteresado: {
        alias: 'n',
        demand: true
    },
    cedulaInteresado: {
        alias: 'c',
        demand: true
    }
}

const argv = require('yargs')
    .command('inscribir', 'Modulo de Inscripciones', opciones)
    .argv

let crearArchivo = (argv, curso) => {
    texto = "*** ESTUDIANTE PREINSCRITO *** <br>" + 
            "<b>Nombre de interesado:</b> " + argv.n + '<br>' +
            "<b>Cedula de interesado:</b> " + argv.c + '<br>' +
            "<b>Curso Inscrito:</b> " + curso.nombre + " con Id " + argv.i + ". Tiene una duración de " + curso.duracion +
            " horas y un valor de " + curso.valor + " pesos. <br>";

    fs.writeFile('matricula_' + argv.n + '.txt', texto, (err) =>{
        if (err) {
            throw err;
        }
        else{
            console.log('\n Se ha creado correctamente el archivo de inscripción');
        }
    });
}

if (argv.n != null) {
    let curso = obtenerCurso(argv.i);
    if(curso){
        console.log("\n"+ argv.n + " se ha inscrito al Curso: \n");
        console.table(obtenerCurso(argv.i));        
        crearArchivo(argv, curso);
    }else{
        console.log("\n El Id del curso no existe. \n");
    }
}
else{
    console.log("\n  *** CURSOS OFERTADOS *** \n");
    // Primera forma
    /*let i = 0;
    cursos.forEach(element => {
        i++;  
        setTimeout(function(){          
            console.log("CURSO " + i + ": \n" + 
                        "Id: " + element.id + "\n" + 
                        "Nombre: " + element.nombre + "\n" +
                        "Duración: " + element.duracion + " horas \n" +
                        "Costo: " + element.valor + "\n"); 
        }, (i * 2000));       
    });*/

    // Segunda forma
    console.log("CURSO No 1: \n" + 
    "Id: " + cursos[0].id + "\n" + 
    "Nombre: " + cursos[0].nombre + "\n" +
    "Duración: " + cursos[0].duracion + " horas \n" +
    "Costo: " + cursos[0].valor + "\n"); 

    setTimeout(function(){
    console.log("CURSO No 2: \n" + 
    "Id: " + cursos[1].id + "\n" + 
    "Nombre: " + cursos[1].nombre + "\n" +
    "Duración: " + cursos[1].duracion + " horas \n" +
    "Costo: " + cursos[1].valor + "\n"); 
    }, 2000);

    setTimeout(function(){
    console.log("CURSO No 3: \n" + 
    "Id: " + cursos[2].id + "\n" + 
    "Nombre: " + cursos[2].nombre + "\n" +
    "Duración: " + cursos[2].duracion + " horas \n" +
    "Costo: " + cursos[2].valor + "\n"); 
    }, 4000);

    setTimeout(function(){
    console.log("CURSO No 4: \n" + 
    "Id: " + cursos[3].id + "\n" + 
    "Nombre: " + cursos[3].nombre + "\n" +
    "Duración: " + cursos[3].duracion + " horas \n" +
    "Costo: " + cursos[3].valor + "\n"); 
    }, 6000);
}
 
app.get('/', function (req, res) {
  res.send(texto)
})
 
app.listen(3008)
