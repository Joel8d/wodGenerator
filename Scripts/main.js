import tipowod from "./tipowod.js" 
import wod_gen from "./wod_gen.js"
import {ejercicios, allreps} from "./variables.js"

var arrayWod = wod_gen()
var contador = 0
arrayWod.forEach(Element => tipowod(Element, contador++))


//Añade los valores a los draggeables
//Draggeable Ejercicios
ejercicios.forEach(Element =>{
        let temp = document.createElement('option');
        temp.innerHTML = Element;
        document.getElementById("addExercise").appendChild(temp);
    }) 

//Draggeable Reps
allreps.forEach(Element =>{
    let temp = document.createElement('option');
    temp.innerHTML = Element;
    document.getElementById("addReps").appendChild(temp);
}) 

var button = document.getElementById("add")
button.onclick = function(){
    let e = document.getElementById("addExercise");
    let eValue = e.options[e.selectedIndex].value;
    let f = document.getElementById("SelectCard");
    let fvalue = f.options[f.selectedIndex].value;
    let g = document.getElementById("addReps");
    let gvalue = g.options[g.selectedIndex].value;
    let temp = document.createElement('li');
    temp.className = 'Elementos';
    //Asigna el ejercicio
    if(gvalue === ""){
        temp.innerHTML = `${eValue}`;
    }else{
        temp.innerHTML = `${gvalue} ${eValue}`;
    }
    let but = document.createElement('span');
    //crea boton eliminar
    but.className = 'delbut'
    but.id = 'delbut';
    but.onclick = function() {
    but.parentElement.remove();}
    
    //selecciona a que tarjeta se añade
    switch(fvalue){
        case("Tarjeta 1"):{
            var tarjeta = document.getElementById("ul 0")
            tarjeta.appendChild(temp).appendChild(but)
        break;}
        case("Tarjeta 2"): {
            var tarjeta = document.getElementById("ul 1")
            tarjeta.appendChild(temp).appendChild(but)
        break;}
        case("Tarjeta 3"):{
            var tarjeta = document.getElementById("ul 2")
            tarjeta.appendChild(temp).appendChild(but)
        break;}
    }
}