import random from "./random.js" 
import {ejercicios, indexEjercicios, indexGrupo} from "./variables.js"
import imprimir from "./test.js" 
import segundos from "./segundos.js"


let modos =[
    "2 rounds",
    "4 rounds",
    "3 rounds",
    "21-15-9",
    "15-12-9",
    "9-12-15"
]

export default function forTime(contador) {
    let wod = []
    let ejercicio
    let modo = random(0, modos.length)
    let numEjercicios = random(0, 3) + 3
    if (modo <= 2){
        var titulo = [`For Time ${modos[modo]}`]
        for (let i = 0; i < numEjercicios; i++){
                ejercicio = random(0, ejercicios.length)
                if (indexEjercicios.includes(ejercicio)){
                    i = i - 1
                } else {
                    segundos(ejercicio, wod, 0)
                }
                //indexEjercicios.push(ejercicio)                
                //wod.push(`${reps[random(0, reps.length)]} ${ejercicios[ejercicio]}`)}
            }
            indexGrupo.push(0)
    }else{ 
        var titulo = [`For Time ${modos[modo]}`]
        for (let i = 0; i < numEjercicios; i++){
                ejercicio = random(0, ejercicios.length)
                if (indexEjercicios.includes(ejercicio)){
                    i = i - 1
                } else {
                    segundos(ejercicio, wod, 1)
                    //indexEjercicios.push(ejercicio)  
                    //wod.push(`${ejercicios[ejercicio]}`)
                }
        }
        indexGrupo.push(2)
    }
    imprimir(titulo, wod, contador)       
}