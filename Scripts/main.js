import tipowod from "./tipowod.js" 
import wod_gen from "./wod_gen.js"

var arrayWod = wod_gen()
var contador = 0
arrayWod.forEach(Element => tipowod(Element, contador++))



let boton = document.getElementsByClassName("delbut");
for (let item of boton) {
    item.onclick = function() {
    item.parentElement.remove();}
}
