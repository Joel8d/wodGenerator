import random from "./random.js" 
import {ejercicios, indexEjercicios, reps} from "./variables.js"

export default function segundos(ejercicio, wod, identificador) {
    switch(ejercicio){
        case 7:
            indexEjercicios.push(ejercicio) 
            wod.push([`30s ${ejercicios[ejercicio]}`])   
            break;
        case 8:
            indexEjercicios.push(ejercicio) 
            wod.push([`30s ${ejercicios[ejercicio]}`])   
            break;
        case 9:
            indexEjercicios.push(ejercicio) 
            wod.push([`30s ${ejercicios[ejercicio]}`])   
            break;    
        case 10:
            indexEjercicios.push(ejercicio) 
            wod.push([`10 ${ejercicios[ejercicio]}`])   
            break;
        case 11:
            indexEjercicios.push(ejercicio) 
            wod.push([`50 ${ejercicios[ejercicio]}`])   
            break;
        default:
            if (identificador === 1){
                indexEjercicios.push(ejercicio) 
                wod.push([`${ejercicios[ejercicio]}`])
            }else{
                indexEjercicios.push(ejercicio) 
                wod.push([`${reps[random(0, reps.length)]} ${ejercicios[ejercicio]}`])
            }
            break;  
     }
}