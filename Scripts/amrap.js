import {ejercicios, indexEjercicios, reps} from "./variables.js"
import random from "./random.js" 
import imprimir from "./test.js" 
import segundos from "./segundos.js"

var tiempo = [8, 10, 12]


export default function amrap(contador) {
    let duracion = random(0, tiempo.length) 
    let numEjercicios = random(0, 3) + 3
    let wod = []
    var titulo= [`AMRAP ${tiempo[duracion]} minutos`]
    for (var i=0; i < numEjercicios; i++){
        let ejercicio = random(0, ejercicios.length)
        if (indexEjercicios.includes(ejercicio)){
            i--
        }else{
            segundos(ejercicio, wod, 0)     
        }
    }
    imprimir(titulo, wod, contador)
    
}