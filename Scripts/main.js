import tipowod from "./tipowod.js" 
import wod_gen from "./wod_gen.js"

var arrayWod = wod_gen()
var contador = 0
arrayWod.forEach(Element => tipowod(Element, contador++))



//Estableciendo el metodo sort a las listas de las tarjetas
const lista = document.getElementById('ul 0');
Sortable.create(lista, {
    //se crea grupo entre los cuales se podrá reasignar los ejercicios
    group: 'shared', // set both lists to same group
    animation: 150
});
const lista1 = document.getElementById('ul 1');
Sortable.create(lista1, {
    group: 'shared', // set both lists to same group
    animation: 150
});
const lista2 = document.getElementById('ul 2');
Sortable.create(lista2, {
    group: 'shared', // set both lists to same group
    animation: 150
});
