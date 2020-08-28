import {ejercicios, indexEjercicios} from "./variables.js"
import random from "./random.js" 
import imprimir from "./test.js" 

var titulo = ["Tabata"]

export default function  tabata(contador) {
    let wod = []
    for (var i = 0; i < 2; i++){
        let ejercicio = random(0, 6)
        if (indexEjercicios.includes(ejercicio)){
            i--
        }else{
            indexEjercicios.push(ejercicio) 
            wod.push(ejercicios[ejercicio])       
        }
    } 
    imprimir(titulo, wod, contador)  
}
