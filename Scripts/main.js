import tipowod from "./tipowod.js" 
import wod_gen from "./wod_gen.js"
import { indexGrupo } from "./variables.js"

var arrayWod = wod_gen()
var contador = 0
console.log(arrayWod)
arrayWod.forEach(Element => tipowod(Element, contador++))
console.log(indexGrupo)
