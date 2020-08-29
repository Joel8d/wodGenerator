import forTime from "./forTime.js"
import tabata from "./tabata.js"
import emom from "./emom.js"
import amrap from "./amrap.js"
import { indexGrupo } from "./variables.js"


export default function tipowod(arr, contador){
    switch(arr){
        case 0: //fortime
            console.log("fortime")
            forTime(contador)
            break;
        case 1: //tabata
            console.log("tabata")
            tabata(contador)
            break;
        case 2: //amrap
            console.log("amrap")
            amrap(contador)
            break;
        case 3: //emom
            console.log("emom")
            emom(contador)
            break;

    }

            //Asigna Grupos entre los cuales se pueden hacer draggeables o no 
            const lista = document.getElementById(`ul ${contador}`);
            Sortable.create(lista, {
            //se crea grupo entre los cuales se podrá reasignar los ejercicios
            group: `${indexGrupo[contador]}` , // set both lists to same group
            animation: 150
    });
}