import {ejercicios, indexEjercicios, reps} from "./variables.js"
import random from "./random.js" 
import imprimir from "./test.js" 
import segundos from "./segundos.js"


export default function emom(contador) {
    let duracion = random(3,5)  
    let wod = []
    var titulo = [`EMOM 12 minutos | ${12/duracion} rounds`]
    for (var i=0; i < duracion; i++){
        let ejercicio = random(0, ejercicios.length)
        if (indexEjercicios.includes(ejercicio)){
            i--
        }else{
            console.log(ejercicio)
            segundos(ejercicio, wod, 0)
        }
    }
    imprimir(titulo, wod, contador)
    
}